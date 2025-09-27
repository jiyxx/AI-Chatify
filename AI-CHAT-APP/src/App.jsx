import { useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [question , setQuestion] = useState("");
  const [answer , setAnswer] = useState("");

  async function generateAnswer(){
    setAnswer("Loading...");
    const response = await axios({
      url : "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAfflh-_2nYR8UFvRNVAzGGrCZm7FIvra8",
      method : "post",
      data: {
        contents: [
         {"parts": [{"text":question}]},
       ],
      },
    });
    setAnswer(response.data.candidates[0].content.parts[0].text);
  }

  return (
    <>
      <h1> Chat AI </h1>
      <textarea 
        value={question} 
         onChange = {(e) => setQuestion(e.target.value)}
         cols = "30"
         rows = "10"
      >
        
      </textarea><br></br>
      <button onClick={generateAnswer}>
        Generate Answer
      </button>
      <p> {answer}</p>
    </>
  )
}

export default App
