import React, { useState } from "react";

const Questions = ({
  currrQues,
  setcurrQues,
  question,
  optionss,
  score,
  setscore,
  correct,
  setquestion,
}) => {
  const [select, setselect] = useState();
  const [error, seterror] = useState(false);

  return (
      <div>
        {/* <h1>Question {currrQues + 1}</h1> */}
        <div className="SingleQuestion">
            {/* <h2>{question[currrQues].question}</h2> */}
        </div>
      </div>
  )
};

export default Questions;
