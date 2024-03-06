import React , { useState } from "react"
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {BrowserRouter, Routes,Route  } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray'
      showAlert('Dark mode enabled', 'success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('light mode enabled', 'success')
    }

  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />}>    </Route>
          <Route path="/about" element={<About  mode={mode}/>}></Route>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
