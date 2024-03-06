import Addition from "./components/addition/Addition";
import ChangeText from "./components/changeText/ChangeText";
import ColorBox from "./components/colorbox/ColorBox";
import Header from "./components/header/Header";
import List from "./components/list/List";
import PrettyText from "./components/prettyText/PrettyText";

function App() {
  return (
    <div className="app">
      <Header />
      <ChangeText />
      <Addition />
      <ColorBox />
      <List />
      <PrettyText />
    </div>
  );
}

export default App;
