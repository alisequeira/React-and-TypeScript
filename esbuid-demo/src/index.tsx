import * as esbuild from 'esbuild-wasm';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const ref = useRef<any>();
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    //Initializing ESBuild
    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        });
    };

    useEffect(() => {
        startService();
    }, [])

    const onClick = async () => {
        if (!ref.current) {
            return;
        }

        /* This operation is asynchronous in nature*/
        const result = await ref.current.transform(input, {
            loader: 'jsx', /* Tell what kind of code we're providing to it*/
            target: 'es2015'/* This is use for the transpiling process*/
        });

        setCode(result.code);
    };

    return <div>
        <textarea value={input} onChange={e => setInput(e.target.value)}></textarea>
        <div>
            <button onClick={onClick}>Submit</button>
        </div>
        <pre>{code}</pre>
    </div>
};

ReactDOM.render(<App />, document.querySelector('#root'));