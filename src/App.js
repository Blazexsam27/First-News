import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Widgets/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullPost from "./components/FullPost/FullPost";
import About from "./components/About/About.js";
import Footer from "./components/Home/Footer.js";
import { AppProvider } from "./components/context.js";

function App() {
  return (
    <>
      <div className="main-background">
        <AppProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/fullpost" element={<FullPost />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </AppProvider>
      </div>
    </>
  );
}

export default App;
