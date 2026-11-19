import diagnosis from "./data/diagnosis.json";
import DiagnosisPlayer from "./components/DiagnosisPlayer";

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <p className="brand">SHINDAN STUDIO</p>
        <h1>{diagnosis.title}</h1>
        <p className="lead">{diagnosis.description}</p>
      </header>
      <DiagnosisPlayer />
    </main>
  );
}

export default App;
