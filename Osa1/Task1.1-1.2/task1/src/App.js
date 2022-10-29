import { useState } from "react"


const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
    
  )
}

const Header2 = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const GStats =(props) => {
  console.log(props)
  return(
    // ei perkele toimi
    <div>
      <p>good {props.good}</p> 
    </div>
  )
}

const NStats =(props) => {
  console.log(props)
  return(
    // ei perkele toimi
    <div>
      <p>neutral {props.neutral}</p>
    </div>
  )
}

const BStats =(props) => {
  console.log(props)
  return(
    // ei perkele toimi
    <div>
      <p>bad {props.bad}</p>
    </div>
  )
}

const App = () => {
  // tallenna napit toiseen kohtaan
  const feedback ={
    name: 'Give feedback',
  }

  const statistics ={
    name: 'Statistics',
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <Header name ={feedback.name} />

      <button onClick={() => setGood(good + 1)}>
        good
      </button>

      <button onClick={() =>setNeutral(neutral + 1)}>
        neutral
      </button>

      <button onClick={() => setBad(bad +1)}>
        bad
      </button>

      <Header2 name ={statistics.name} />
      <GStats good ={good}  />
      <NStats neutral ={neutral}  />
      <BStats bad ={bad}  />
    </div>
  )
}

export default App