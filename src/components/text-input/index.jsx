import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../../atoms";

export const TextInput = () => {
  console.log("<TexInput/> Render");
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};
