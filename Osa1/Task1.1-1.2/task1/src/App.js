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

const Statistics = (props) => {
  console.log(props)
  return(
    <div>
      <p>good {props.good} </p>
      <p>neutral {props.neutral} </p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.avg / props.total}</p>
    </div>
  )
}

const App = () => {
  // tallenna napit toiseen kohtaan


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad,] = useState(0)  
  const [allReviews, setAll] = useState(0)
  const [total, setTotal] = useState(0)

  return(
    <div>
      <Header/>

      <button onClick={() =>
        {setGood(good + 1); 
        setAll(allReviews + 1);
        setTotal(total + 1);
      }}
      > 
        good
      </button>

      <button onClick={() =>
        {setNeutral(neutral + 1);
        setAll(allReviews + 0);
        setTotal(total + 1);
      }}
      >
        neutral
      </button>

      <button onClick={() => 
        {setBad(bad + 1);
        setAll(allReviews + -1);
        setTotal(total + 1);
        }}
        >
        bad
      </button>

      <StatsHeader/>
      <Statistics good ={good} neutral = {neutral} bad = {bad} all = {good + neutral + bad} avg = {allReviews} total ={total}/>
    </div>
  )
}
export default App