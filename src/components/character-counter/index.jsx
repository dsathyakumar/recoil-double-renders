import React from "react";
import { TextInput } from "../text-input";
import { CharacterCount } from "../character-count";

export const CharacterCounter = () => {
  console.log("<characterCounetr/> render");
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};
