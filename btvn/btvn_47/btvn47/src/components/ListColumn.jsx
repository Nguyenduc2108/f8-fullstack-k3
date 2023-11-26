/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Column from "./Column";
import "../assets/style.scss";

import { useDispatch } from "react-redux";

export default function ListColumn() {
  const dispatch = useDispatch();
  const [activeColumn, setActiveColumn] = useState(null);
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  const handleDragStart = (event) => {
    console.log(event);
    if (event.active.data.current.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  };

  return (
    <div className="list-column">
      <DndContext sensors={sensors} onDragStart={handleDragStart}>
        {createPortal(
          <DragOverlay>
            {activeColumn && <Column column={activeColumn} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>

      <button className="btn-add-column">Add Column</button>
    </div>
  );
}
