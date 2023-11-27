import React, { useState } from "react";
import quizImage from "./quiz.svg";
import { TextField, MenuItem , Button} from "@material-ui/core";
import Categories from "./data/category";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
// import { createBrowserHistory } from 'history';


const Home = ({name , setname , fetchQuestions}) => {
    const [difficulty , setdifficulty] = useState("")
    const [category , setcategory] = useState("")
    const [error , seterror] = useState(false)
    const navigate = useNavigate()
    // const history = createBrowserHistory()


    const handelsubmit = () => {
      if (!category || !difficulty || !name) {
        seterror(true)
        return;
      }
      else
      seterror(false)
      fetchQuestions(category, difficulty)  
      navigate('/quiz')
    }
    // console.log(difficulty);
    // console.log(category);
    // console.log(name);
  return (
    <div className="content">
      <div className="setting">
        <span style={{ fontSize: 30 }}></span>
        <div className="setting_select">
          {error && <ErrorMessage>Please Fill The form</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            onChange={(e) => setname(e.target.value)}
            variant="outlined"
          />
          <TextField 
            select
            label="Select Category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
            ))}
          </TextField>

          <TextField
             select
             label="Select Difficulty"
             value={difficulty}
             onChange={(e) => setdifficulty(e.target.value)}
             variant="outlined"
             style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
                Easy
            </MenuItem>
            <MenuItem key="medium" value="medium">
                Medium
            </MenuItem>
            <MenuItem key="hard" value="hard">
                Hard
            </MenuItem>
          </TextField>
          <Button onClick={() => handelsubmit()} variant="contained" color="primary" size="large">
                Start Quiz
          </Button>
        </div>
      </div>
      <img src={quizImage} className="banner" alt="quiz images" />
    </div>
  );
};

export default Home;
