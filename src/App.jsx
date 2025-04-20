import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
    <div className="w-[390px] bg-white min-h-screen relative">
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;