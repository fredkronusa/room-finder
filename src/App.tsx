import { Route, Routes } from "react-router-dom";
import BunningsMap from "./pages/BunningsMap";

function App() {
  return (
      <div className="flex flex-col relative w-full max-h-[100dvh]">
        <Routes>
          <Route path="/:position?" element={<BunningsMap />} />
        </Routes>
      </div>
  );
}

export default App;
