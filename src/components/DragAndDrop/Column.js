import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  width: 220px;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  flex-grow: 1;
  padding: 8px;
  transition: background-color 0.3s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "inherit")};
  min-height: 100px;
`;

const Column = props => {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {provided => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{props.column.title}</Title>
          <Droppable
            droppableId={props.column.id}
            type="task"
            isDropDisabled={props.isDropDisabled}
          >
            {(provided, snapshot) => (
              <TaskList
                isDraggingOver={snapshot.isDraggingOver}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <InnerList tasks={props.tasks} />
                {/* {props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))} */}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ));
  }
}

export default Column;
