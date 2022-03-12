import About from "./components/About/About.js";
import Header from "./components/Header/Header.js";
import MovieList from "./components/MovieList/MovieList.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <MovieList />
    </div>
  );
}

export default App;
