import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "../../selectors";

export const CharacterCount = () => {
  console.log("<charactercount/> render");
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};
