import ClickCounter from "./component/HoverCounter";
import Counter from "./component/Counter";
import "./App.css";
import HoverCounter from "./component/HoverCounter";
import Contex from "./component/Contex";
import react, { Component } from "react";
import themeContext from "./context/Context";

class App extends Component {
  state = { theme: "dark" };
  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        <themeContext.Provider value={{ theme: theme }}>
          <Contex theme={theme} />
        </themeContext.Provider>
      </div>
    );
  }
}

export default App;
