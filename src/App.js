import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      // Pseudo code Story 1: create a conditional statement that if eachWord at index 0 equals index 0 of vowelsArray, then return eachWord + "way"
      // Pseudo Code Story 2: create a conditional statement that if eachWord includes "qu", then return that word with each consonant before and including "qu" to the end of the string, and add "ay"
      // Pseudo Code Story 3: create a conditional that states if each word includes 'y' && eachWord does not (!) include vowelsArray, then return a a slice that has the y in front, then everything that was before the y, then add "ay"

       if (eachWord[0] === vowelsArray[0]){
        return eachWord + ("way")
       }
       else if (eachWord.includes("qu")){
        return eachWord.slice(eachWord.indexOf("u") + 1, eachWord.length) + eachWord.slice(0, eachWord.indexOf("u") + 1) + ("ay")
       }
       else if (eachWord.includes("y") && eachWord.includes(vowelsArray)){
        return eachWord.slice(eachWord.indexOf("y")) + eachWord.slice(0, eachWord.indexOf("y")) + ("ay")
       }
       else if (eachWord.includes(vowelsArray[0])){
        return eachWord.slice(eachWord.indexOf(vowelsArray[0])) + eachWord.slice(0, eachWord.indexOf(vowelsArray[0])) + ("ay")
       }
 
 
      console.log("pigLatinLogic:", eachWord)
      console.log("example:", eachWord.indexOf(vowelsArray[0]));

      // appleway oughthray eenquay ealsquay fry uentflay
      // appleway hthrougay eenquay ealsquay yfray tfluenay
    

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App