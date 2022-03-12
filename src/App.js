import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./components/About/About.js";
import MovieCard from "./components/MovieCard/MovieCard.js";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <MovieCard />
    </div>
  );
}

export default App;
