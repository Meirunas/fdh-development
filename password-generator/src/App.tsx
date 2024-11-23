import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1 className="main-heading">Password Generator</h1>
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
