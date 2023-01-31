import { FC, Key, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, useTodos } from "./redux/todoSlice";

const App: FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(useTodos);
  const handleAddTask = (taskName: string) => {
    dispatch(addTodo({ name: taskName }));
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        {/* area de add novas tarefas */}
        <AddArea onEnter={handleAddTask} />

        {/* lista de tarefas */}
        {todos.map((item: Item, index: Key) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
