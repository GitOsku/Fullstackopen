import { useState } from "react"


const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Give feedback</h1>
    </div>
    
  )
}
//lower header
const StatsHeader = () => {
  return(
    <div>
      <h2>statistics</h2>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = (props) => {
  console.log(props)
  return(
    <tr>
      {props.text} {props.value}
    </tr>
  )

}

const Statistics = (props) => {
  console.log(props)
  if (props.total === 0) 
  {
    return(
      <p>No feedback given yet</p>
    )
}
else {
  return(
      <table>
        <tbody>
        <StatisticsLine text="good" value ={props.good} />
        <StatisticsLine text="neutral" value ={props.neutral} />
        <StatisticsLine text ="bad" value ={props.bad} />
        <StatisticsLine text ="all" value ={props.all}/>
        <StatisticsLine text ="average" value ={props.ar / props.total}/>
        </tbody>
      </table>
    )
  }
}



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad,] = useState(0)  
  const [total, setTotal] = useState (0)
  const [allReviews, setAll] = useState (0)

  const goodHandle = () => {
    setGood(good +1);
    setAll(allReviews + 1);
    setTotal(total + 1)
  }

  const neutralHandle = () => {
    setNeutral(neutral +1);
    setAll(allReviews + 0);
    setTotal(total + 1)
  }

  const badHandle = () => {
    setBad(bad +1);
    setAll(allReviews + -1);
    setTotal(total + 1)
  }

  return(
    <div>
      <Header/>
      <div>
      <Button handleClick={goodHandle} text ='good' />
      <Button handleClick={neutralHandle} text ='neutral' />
      <Button handleClick={badHandle} text ='bad' />
      </div>
      <StatsHeader/>
      <Statistics good ={good} neutral = {neutral} bad = {bad} 
      all = {good + neutral + bad} 
      ar = {allReviews} // var that defines numeric value to good neutral and bad review
      total ={total} />
    </div>
  )
}
export default App