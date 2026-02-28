import React from 'react'
import logo from './assets/react.svg'
import FirstComponent from './Components/FirstComponent'
import SecondComponent from './Components/SecondComponent'
import ThirdComponent from './Components/ThirdComponent'

const App = () => {
  // js code
  const name = 'Samarjeet'
  const age = 20
  const nums = [10,20,30,40,50]
  const link = 'https://www.google.com'
  const target = '_blank'
  const title = 'Google'
  const alternative = 'React logo'
  const ReactImage = () => {
    return <img src={logo} alt={alternative} />
  }
  return (
    <div>
      <h2>Hello World my name is {name} and my age is {age}.</h2>
      <h3>Numbers are {nums + " "}</h3>
      {nums.map((num => (
        <ul>
          <li>{num}</li>
        </ul>
      )))}
      <a href={link} target={target}>{title}</a>
      <img src={logo} alt={alternative} />
      <ReactImage/>
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
    </div>
  )
}

export default App
