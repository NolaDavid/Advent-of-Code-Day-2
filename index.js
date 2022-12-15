const fs = require("fs")


const lines = fs.readFileSync('day02.txt', { encoding: 'utf-8' }).split('\n')

let gameValues = {

  'win': 6,
  'loss': 0,
  'draw': 3,
  'rock':1,
  'paper':2,
  'scissors':3

}
const translatedValues = {
  "A": 'rock',
  "B": 'paper',
  "C": 'scissors',
  "X": 'loss',
  "Y": 'draw',
  "Z": 'win'
}
const calculateGame = (roundValues) => {
  let splitValues = roundValues.split(' ')
  let opponentThrow = translatedValues[splitValues[0]]
  let expectedRoundResult = translatedValues[splitValues[1]]
  const resultValue = gameValues[expectedRoundResult]
  let myThrow;
  
  if(expectedRoundResult === 'draw'){
    myThrow = opponentThrow
    
  }else if( expectedRoundResult === 'loss'){
    if(opponentThrow === 'paper'){
      myThrow = 'rock'
    }else if(opponentThrow === 'rock'){
      myThrow = 'scissors'
    }else {
      myThrow = 'paper'
    }
    
  }else {
    if(opponentThrow === 'rock'){
      myThrow = 'paper'
    }else if(opponentThrow === 'paper'){
      myThrow = 'scissors'
    }else {
      myThrow = 'rock'
    }
  }
  optionThrownValue = gameValues[myThrow]

return optionThrownValue + resultValue
}
let total = 0
for (let i = 0; i < lines.length; i++) {
  let roundResult = calculateGame(lines[i])

  total += roundResult
  
}
console.log("total", total)