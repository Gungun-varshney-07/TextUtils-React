import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');             //Tells whether the dark mode is enabled or not
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
      document.body.style.color = 'white';
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
            </Route>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;