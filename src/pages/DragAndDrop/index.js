import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { initialData } from "../../const/initial-data";
import Column from "../../components/DragAndDrop/Column";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const DragAndDrop = () => {
  const [state, setState] = useState(initialData);
  const onDragStart = start => {
    // document.body.style.color = "orange";

    //for allowing move task only to right column
    const homeIndex = state.columnOrder.indexOf(start.source.droppableId);

    setState({ ...state, homeIndex });
  };

  const onDragUpdate = update => {};

  const onDragEnd = result => {
    // document.body.style.color = "inherit";

    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
        homeIndex: null
      };
      setState(newState);
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = { ...start, taskIds: newTaskIds };
      const newState = {
        ...state,
        columns: { ...state.columns, [newColumn.id]: newColumn },
        homeIndex: null
      };
      setState(newState);
      return;
    }
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskIds };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    setState(newState);
    return;
  };

  return (
    <div>
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided, snapshot) => {
            return (
              <Container {...provided.droppableProps} ref={provided.innerRef}>
                {state.columnOrder.map((colId, index) => {
                  const column = state.columns[colId];
                  const isDropDisabled = index < state.homeIndex;
                  return (
                    <InnerList
                      key={column.id}
                      taskMap={state.tasks}
                      index={index}
                      column={column}
                      isDropDisabled={isDropDisabled}
                    />
                  );
                  // const tasks = column.taskIds.map(
                  //   taskId => state.tasks[taskId]
                  // );

                  //isDropDisabled allow move task only to right column
                  // return (
                  //   <Column
                  //     key={column.id}
                  //     column={column}
                  //     tasks={tasks}
                  //     isDropDisabled={isDropDisabled}
                  //     index={index}
                  //   />
                  // );
                })}
                {/* Required for every Droppable Container */}
                {provided.placeholder}
              </Container>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.column === this.props.column &&
      nextProps.taskMap === this.props.taskMap &&
      nextProps.index === this.props.index
    ) {
      return false;
    }
    return true;
  }
  render() {
    const { column, taskMap, index, isDropDisabled } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return (
      <Column
        key={column.id}
        column={column}
        tasks={tasks}
        isDropDisabled={isDropDisabled}
        index={index}
      />
    );
  }
}

export default DragAndDrop;
