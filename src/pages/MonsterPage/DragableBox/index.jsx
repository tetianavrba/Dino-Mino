import './style.css';
import { useDrag } from 'react-dnd';

const style = {
  position: 'absolute',
  cursor: 'move',
};

export const DragableBox = ({
  id,
  left,
  top,
  height,
  children,
  hideSourceOnDrag,
}) => {
  const ItemTypes = {
    BOX: 'box',
  };

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  );
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }

  return (
    <>
      <div
        ref={drag}
        className="dragable-box"
        style={{ ...style, left, top, height }}
        data-testid="box"
      >
        {children}
      </div>
    </>
  );
};
