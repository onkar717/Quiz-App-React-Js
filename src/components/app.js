import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Corrected import
import Header from "./Header";
import Footer from "../Footer";
import Home from "../Home";
import Quiz from "../Quiz";
import Result from "../Result";

const App = () => {
  const [question , setquestions] = useState()
  const [score ,setscore] = useState(0)
  const [name , setname] = useState("")

  // https://opentdb.com/api.php?amount=10&category=20&type=multiple

  
  const fetchQuestions = async (category="" , difficulty="" ) => {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
      const result = await response.json();
      setquestions(result.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };



  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: `url(./ques1.png)` }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} fetchQuestions={fetchQuestions} setname={setname} />} />
          <Route path="/quiz" element={<Quiz name={name} question={question} score={score} setscore={setscore}/>} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
