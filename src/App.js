import logo from "./logo.svg";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Uniswap">
          <SwapWidget />
        </div>
      </header>
    </div>
  );
}

export default App;
