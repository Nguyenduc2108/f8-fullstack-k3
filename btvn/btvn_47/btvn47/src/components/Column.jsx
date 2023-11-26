/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  SortableContext,
  useSortable,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "../assets/style.scss";
export default function Column({ column }) {
  const { column: columnOrder, columnName } = column;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    data: {
      type: "Column",
      column,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if (isDragging) {
    const styleOverlay = {
      ...style,
      backgroundColor: "transparent",
      border: "2px solid #872341",
      height: "501px",
      width: "400px",
      marginRight: "20px",
      borderRadius: "5px",
    };

    return <div style={styleOverlay} ref={setNodeRef}></div>;
  }

  return (
    <div className="column" ref={setNodeRef} style={style}>
      <div className="column-header" {...attributes} {...listeners}>
        <div className="heading">
          <h2>{columnName}</h2>
        </div>
      </div>

      <div className="tasks">
        <SortableContext
          strategy={horizontalListSortingStrategy}
        ></SortableContext>
      </div>

      <button className="btn-add-task">Add Task</button>
    </div>
  );
}
