import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [text, settext] = useState("Enable Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#292525";
      document.body.style.color = "white";
      document.title = "TextUtilz - DarkMode";
      showAlert("Dark mode has been enabled", "success");
      settext("Enable Light Mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtilz";
      showAlert("Light mode has been enabled", "success");
      settext("Enable Dark Mode");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          toggletext={text}
          title="TextUtils"
          about="About Textutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze:" mode={mode}/>} /> */}
          {/* </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze:" mode={mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}
;
export default App;
