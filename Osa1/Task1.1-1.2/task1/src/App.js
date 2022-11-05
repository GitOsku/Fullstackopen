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

//good stats
const GStats =(props) => {
  console.log(props)
  return(
    <div>
      <p>good {props.good}</p> 
    </div>
  )
}

//neutral stats
const NStats =(props) => {
  console.log(props)
  return(
    <div>
      <p>neutral {props.neutral}</p>
    </div>
  )
}
//Bad stats
const BStats =(props) => {
  console.log(props)
  return(
    <div>
      <p>bad {props.bad}</p>
    </div>
  )
}

// Shows all reviews
const Stats =(props) => {
  console.log(props)
  return(
    <div>
      <p>all {props.all} </p>
    </div>
  )
}

const Average =(props) => {
  return(
    <div>
      <p>average {props.avg / props.total} </p>
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
      <GStats good ={good}  />
      <NStats neutral ={neutral}  />
      <BStats bad ={bad}  />
      <Stats all ={good + neutral + bad}/>
      <Average avg = {allReviews} total ={total}/>
  
    </div>
  )
}
export default App