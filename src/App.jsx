import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import TodoPage from "./pages/todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
