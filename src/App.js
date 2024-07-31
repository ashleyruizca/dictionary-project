import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Dictionary App</h1>
        <main>
          <Dictionary defaultKeyword="Rose" />
        </main>
        <footer className="App-footer">
          <small>Coded by Ashley Ruiz-Carrizales</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
