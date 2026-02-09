import Title from "./components/Title";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Title title="Contagem regressiva para 2027" />
        <div className="countdown-container">
          <p>2 dias</p>
        </div>
      </div>
    </div>
  );
}

export default App;
