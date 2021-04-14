import "./styles.css";
import { RecoilRoot } from "recoil";
import { CharacterCounter } from "./components/character-counter";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}
