"use client";
import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Draggable from "~/components/Draggable";
import DragGroup from "~/components/DragGroup";
import Droppable from "~/components/Droppable";
import Title from "antd/es/typography/Title";
import { Divider } from "antd";

function Practise2() {
  const [box1, setBox1] = React.useState([
    { text: "Hello" },
    { text: "World" },
  ]);
  const [box2, setBox2] = React.useState([]);

  const handleBox1 = (item, monitor, state) => {
    if (state.find((each) => each.text === item.text)) return;
    // remove from box2
    setBox2((prev) => {
      const index = prev.findIndex((each) => each.text === item.text);
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
    // add to box1
    setBox1((prev) => {
      return [...prev, { text: item.text }];
    });
  };

  const handleBox2 = (item, monitor, state) => {
    if (state.find((each) => each.text === item.text)) return;
    // remove from box1
    setBox1((prev) => {
      const index = prev.findIndex((each) => each.text === item.text);
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
    // add to box2
    setBox2((prev) => {
      return [...prev, { text: item.text }];
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ margin: 100 }}>
        <Title level={2}>Drag from box 1 to box 2</Title>
        <Divider />

        <Droppable
          accept="drag-3"
          handleDrop={handleBox1}
          text="Box1"
          state={box1}
        >
          <DragGroup>
            {box1.map((drag) => (
              <Draggable
                key={drag.text}
                type="drag-3"
                text={drag.text}
                item={{ text: drag.text }}
                state={box1}
              />
            ))}
          </DragGroup>
        </Droppable>
        <div style={{ height: 100 }} />
        <Droppable
          accept="drag-3"
          handleDrop={handleBox2}
          text="Box 2"
          state={box2}
        >
          <DragGroup>
            {box2.map((drag) => (
              <Draggable
                key={drag.text}
                type="drag-3"
                text={drag.text}
                item={{ text: drag.text }}
                state={box2}
              />
            ))}
          </DragGroup>
        </Droppable>
      </div>
    </DndProvider>
  );
}

export default Practise2;
