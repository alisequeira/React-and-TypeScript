import * as esbuild from "esbuild-wasm";
import axios from 'axios';
import localForage from 'localforage';

const fileCache = localForage.createInstance({
    name: 'filecache'
});

export const fetchPlugin = (inputCode: string) => {
    return {
        name: 'fetch-plugin',
        setup(build: esbuild.PluginBuild) {
            build.onLoad({ filter: /.*/ }, async (args: any) => {

                if (args.path === 'index.js') {
                    return {
                        loader: 'jsx',
                        contents: inputCode,
                    };
                }

                //Check if we see if we have already fetched this file
                //and if it is in the cache
                const cacheResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path);

                //if it is return it immediately 
                if (cacheResult) {
                    return cacheResult;
                }
                const { data, request } = await axios.get(args.path);

                const result: esbuild.OnLoadResult = {
                    loader: 'jsx',
                    contents: data,
                    resolveDir: new URL('./', request.responseURL).pathname
                };
                //store response in cache
                await fileCache.setItem(args.path, result);

                return result;
            });
        }
    }
}