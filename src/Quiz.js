  import React, { useEffect, useState } from 'react'
  import { CircularProgress } from '@material-ui/core'
import Questions from './Questions'

  const Quiz = ({name , score , question , setquestion , setscore}) => {
    const[optionss , setoptionss] = useState()
    const [currrQues , setcurrQues] = useState(0)

    // console.log(name);
    // console.log(score);
  useEffect(() => {
    // console.log(question[0]);
    setoptionss(question && handleshufffle([question[currrQues]?.correct_answer , ...question[currrQues]?.incorrect_answers, ]))
  } , [question])

  console.log(question[0]);

  console.log(optionss);

  const handleshufffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  }

    return (
      <div className='quiz' >
        <span className='subtitile'>Welcome ,{name}</span>
        <span>Score : {score}</span>

        {/* <Questions 
        currrQues={currrQues}
        setcurrQues={setcurrQues}
        question={question}
        optionss={optionss}
        score={score}
        setscore={setscore}
        setquestion={setquestion}
        correct={question[currrQues]?.correct_answer}
        /> */}
        {question ? 
          <>
          
          </>
          :
          <CircularProgress style={{margin:100}} color='inherit' size={150} thickness={1} />
            }
      </div>
    )
  }

  export default Quiz