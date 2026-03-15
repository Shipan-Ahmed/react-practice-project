
import './App.css'
import Countries from './component/Countries/Countries'

const countriesPromises = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json());


function App() {
  
  return (
    <>
      <h1>Welcome to React world!</h1>
      <Countries countriesPromises={countriesPromises}></Countries>
    </>
  )
}

export default App
