import { useState } from 'react'

const Statistics = ({good, neutral, bad}) =>{

  let total = bad+neutral+good
  let positivePercent = (good/total)*100
  if(total == 0){
    positivePercent = 0
  }
  if(total == 0){
    return <p>no feedback given</p>
  }
  return(
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>average {bad}</p>
      <p>average {total/3}</p>
      <p>positive {positivePercent}%</p>
    </>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}
export default App