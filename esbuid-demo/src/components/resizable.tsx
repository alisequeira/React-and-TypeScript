import './resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import { useEffect } from 'react'
interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}


//children: It's going to be the thing that we want to make resizable
const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;

    useEffect(() => {
        const listener = () => {
            console.log(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener);
        }
    }, [])

    if (direction === 'horizontal') {
        resizableProps = {
            className: 'resize-horizontal',
            height: Infinity,
            width: window.innerWidth * 0.75,
            resizeHandles: ['e'],
            maxConstraints: [window.innerWidth * 0.75, Infinity],
            minConstraints: [window.innerWidth * 0.2, Infinity]
        };
    } else {
        resizableProps = {
            height: 300,
            width: Infinity,
            resizeHandles: ['s'],
            maxConstraints: [Infinity, window.innerHeight * 0.9],
            minConstraints: [Infinity, 24]
        };
    }
    return (
        <ResizableBox {...resizableProps}>
            {children}
        </ResizableBox>
    );
};

export default Resizable;