import React from "react";
import { useDispatch } from "react-redux";
import { addDone } from "../../redux/todoSlice";
import { Item } from "../../types/Item";
import * as C from "./Styles";

type ListItemProps = {
  item: Item;
};

export default function ListItem({ item }: ListItemProps) {
  const dispatch = useDispatch();
  const isChecked = () => {
    dispatch(addDone(item.id));
  };

  return (
    <C.Container done={item.done}>
      <C.Input
        type="checkbox"
        checked={item.done}
        onChange={isChecked}
      ></C.Input>
      <label>{item.name}</label>
    </C.Container>
  );
}
