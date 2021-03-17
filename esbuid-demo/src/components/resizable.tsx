import './resizable.css';
import { ResizableBox } from 'react-resizable';

interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}


//children: It's going to be the thing that we want to make resizable
const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    return (
        <ResizableBox
            height={300}
            width={Infinity}
            resizeHandles={['s']}
        >
            {children}
        </ResizableBox>
    );
};

export default Resizable;