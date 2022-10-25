const Footer = () => {
  return (
    <div>
      greeting app created by 
      <a href="https://github.com/GitOsku">GitOsku</a>
    </div>
  )
}


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old and you are from {props.city}
      </p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10
  const kaupunki = 'Turku'

  return (
    <div>
      <h1> Greetings</h1>
      <Hello name="Maya" age={26 + 10} city='Turku' />
      <Hello name={nimi} age={ika} city='Turku' />
      <Footer />
    </div>
  )
}
export default App
