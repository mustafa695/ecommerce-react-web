import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <ToastProvider>
      <Header />
      <Home />
    </ToastProvider>
  );
}

export default App;
