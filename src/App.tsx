import { FC, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";

const App: FC = () => {
  const [list, setList] = useState<Item[]>([
    { id: 2, name: "Comprar ovos", done: false },
    { id: 1, name: "Comprar frango", done: true },
  ]);

  const handleAddTAsk = (taskName: string) => {
    let newList = [...list];
    newList.push({ id: list.length + 1, name: taskName, done: false });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddTAsk}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
