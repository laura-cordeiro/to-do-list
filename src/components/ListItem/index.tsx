import React, { useState } from "react";
import { Item } from "../../types/Item";
import * as C from "./Styles";

type ListItemProps = {
  item: Item;
};

export default function ListItem({ item }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      ></input>
      <label>{item.name}</label>
    </C.Container>
  );
}
