import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Dictionary App</h1>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>coded by Ashley Ruiz-Carrizales</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
