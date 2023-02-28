import React from "react";
import SignIn from "./SignIn";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BurritoControl from "./BurritoControl";


function App() {
  return (
    <Router>
    <div className="text-center">
        <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<BurritoControl />} /> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
