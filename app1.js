const puzzleEl = document.querySelector('#puzzle')
  const guessesEl = document.querySelector('#guesses')
    const letter1 = new Hangman('blue bags', 5)

puzzleEl.textContent = letter1.Puzzle
guessesEl.textContent = letter1.statusMessage


window.addEventListener('keypress', (e) => {
const guess = String.fromCharCode(e.charCode)
letter1.makePens(Pens)


puzzleEl.textContent = letter1.Puzzle
guessesEl.textContent = letter1.statusMessage
})

    //const puzzle = getPuzzle()
        getPuzzle((error, puzzle) => {
            if (error) {
                console.log('Error: ${error}')
            } else {
                console.log(puzzle)
            }
    
         })

// HTTP requests
 //if (e.target.readyState === 4 && e.target.status === 200) {
            //const data = JSON.parse(e.target.responseText)
            //console.log(data)
        //} else if (e.target.readyState === 4) {
           // console.log('An error has taken place')
     //}

//})

    //request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    //request.send()



// Country info
    //const countrtCode = 'Us'
    //const countryRequest =  XMLHttpRequest()
       // countryRequest.open('GET',  'https://restcountries.eu/rest/v2/all')

    
    //countryRequest.addEventListener('readystatechange',(e) => {
            //if (e.target.readyState === 4 && e.target.status === 200) {
                //const data = JSON.parse(e.target.responseText)
               // const country = data.find((country) => country.alpha2Code === countryCode)
                   // console.log(country.name)
            //}
            // else if (e.target.readyState === 4) {
            //    console.log('fetch the data')
        // }
    
    //})



