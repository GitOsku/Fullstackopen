import { useState } from "react";

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Give feedback</h1>
    </div>
  );
};
//lower header
const StatsHeader = () => {
  return (
    <div>
      <h2>statistics</h2>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  console.log(props);
  if (props.total === 0) {
    return <p>No feedback given yet</p>;
  } else {
    return (
      <table>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={props.all} />
        <StatisticsLine text="average" value={props.ar / props.total} />
        <StatisticsLine text="positive" value={props.pos + "%"} />
      </table>
    );
  }
};

const Vote = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Anekdootti = (props) => {
  console.log(props);
  return <p> {props.anecdotes[props.selected]}</p>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [allReviews, setAll] = useState(0);
  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(0);

  const points = new Uint8Array(anecdotes);

  const copy = { ...points };

  const goodHandle = () => {
    setGood(good + 1);
    setAll(allReviews + 1);
    setTotal(total + 1);
  };

  const neutralHandle = () => {
    setNeutral(neutral + 1);
    setAll(allReviews + 0);
    setTotal(total + 1);
  };

  const badHandle = () => {
    setBad(bad + 1);
    setAll(allReviews + -1);
    setTotal(total + 1);
  };

  const random = () => {
    let number = Math.floor(Math.random() * anecdotes.length);
    setSelected(number);
    console.log(number);
  };

  const voteCounter = () => {
    setVoted(copy[selected] += 1)
    console.log(copy);
  };

  return (
    <div>
      <Header />
      <div>
        <Button handleClick={goodHandle} text="Good" />
        <Button handleClick={neutralHandle} text="Neutral" />
        <Button handleClick={badHandle} text="Bad" />
        <div></div>
        <p></p>
      </div>
      <Button handleClick={random} text="Next anecdote" />

      <Vote handleClick={voteCounter} text="Vote" />

      <Anekdootti anecdotes={anecdotes} selected={selected} />
      {"has " + voted + " votes."} <br />
      <StatsHeader />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        ar={allReviews} // var that defines numeric value to good neutral and bad review
        total={total}
        pos={(good / total) * 100}
      />
    </div>
  );
};

export default App;
