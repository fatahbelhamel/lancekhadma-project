import './App.css';
import Navbar from "./components/navbar/navbar.js";
import Main from "./components/main/main.js";
import Categories from "./components/categories/categories.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Categories />
    </div>
  );
}

export default App;


