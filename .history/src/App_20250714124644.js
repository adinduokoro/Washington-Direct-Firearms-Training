import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./ui";
import { HomePage } from "./pages";

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--background)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
