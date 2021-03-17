import './resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import { useEffect, useState } from 'react'
interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}


//children: It's going to be the thing that we want to make resizable
const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    useEffect(() => {
        let timer: any;
        const listener = () => {
            timer && clearTimeout(timer);

            timer = setTimeout(() => {
                setInnerHeight(window.innerHeight);
                setInnerWidth(window.innerWidth);
            }, 100)
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
            width: innerWidth * 0.75,
            resizeHandles: ['e'],
            maxConstraints: [innerWidth * 0.75, Infinity],
            minConstraints: [innerWidth * 0.2, Infinity]
        };
    } else {
        resizableProps = {
            height: 300,
            width: Infinity,
            resizeHandles: ['s'],
            maxConstraints: [Infinity, innerHeight * 0.9],
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