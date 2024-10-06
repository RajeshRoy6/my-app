import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import DisplayComponent from "./components/DisplayComponent";
import ApiCallComponent from "./components/ApiCallComponent";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/display" element={<DisplayComponent />} />
        <Route path="/api" element={<ApiCallComponent />} />
      </Routes>
    </Routers>
  );
}

export default App;
