import { Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import Public from "./components/Public";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Public />} />
      </Route>
    </Routes>
  );
}

export default App;
