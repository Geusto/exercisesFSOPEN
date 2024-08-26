import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
} 

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
    <table>
      <tbody>
          <StatisticsLine text='good' value={good}/>
          <StatisticsLine text='neutral' value={neutral}/>
          <StatisticsLine text='bad' value={bad}/>
          <StatisticsLine text='total' value={total}/>
          <StatisticsLine text='average' value={total/3}/>
          <StatisticsLine text='positive' value={positivePercent + '%'}/>
      </tbody>
    </table>
    </>
  )
}

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </>
  )
}
export default App