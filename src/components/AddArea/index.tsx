import * as C from "./Styles";

import React, { useState, KeyboardEvent } from "react";

type AddAreaProps = {
  onEnter: (taskNAme: string) => void;
};

export default function AddArea({ onEnter }: AddAreaProps) {
  const [inputText, setInputText] = useState("");
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
}
