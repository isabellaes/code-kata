import Addition from "./components/addition/Addition";
import ChangeText from "./components/changeText/ChangeText";
import ColorBox from "./components/colorbox/ColorBox";
import Header from "./components/header/Header";
import List from "./components/list/List";
import PizzaCalculator from "./components/pizzaCalculator/PizzaCalculator";
import PlusMinus from "./components/plusMinus/PlusMinus";
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
      <PizzaCalculator />
      <PlusMinus />
    </div>
  );
}

export default App;
