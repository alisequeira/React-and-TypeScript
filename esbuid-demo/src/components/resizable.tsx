import './resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}


//children: It's going to be the thing that we want to make resizable
const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;

    if (direction === 'horizontal') {
        resizableProps = {

        };
    } else {
        resizableProps = {

        };
    }
    return (
        <ResizableBox
            height={300}
            width={Infinity}
            resizeHandles={['s']}
            maxConstraints={[Infinity, window.innerHeight * 0.9]}
            minConstraints={[Infinity, 24]}
        >
            {children}
        </ResizableBox>
    );
};

export default Resizable;