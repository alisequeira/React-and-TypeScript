const EventComponent: React.FC = () => {
    //e: needs to be passed the type cuz the type inference is not gonna work, only just inline change method.
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        return console.log(e);
    };

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event);
    }
    return <div>
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
};

export default EventComponent;