import React from "react";
import SignIn from "./SignIn";
import Header from "./Header";
import TopStories from "./TopStories";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<TopStories />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;




{/* <div>
  Header
  SignIn/Out
  BurritoControl
</div> */}