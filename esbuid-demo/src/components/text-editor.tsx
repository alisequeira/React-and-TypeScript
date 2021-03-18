import MDEditor from '@uiw/react-md-editor';

const TextEditor: React.FC = () => {
    return <div>
        <MDEditor.Markdown source={'# Hi there'} />
    </div>;
};

export default TextEditor;