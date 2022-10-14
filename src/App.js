import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Widgets/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullPost from "./components/FullPost/FullPost";
import { AppProvider } from "./components/context.js";

function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/fullpost" element={<FullPost />}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
