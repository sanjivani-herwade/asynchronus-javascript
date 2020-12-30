
 const Hangman = function (pen, remainingPens) {
    this.pen = pen.toLowerCase().split('')
    this.remainingPens = remainingPens
    this.pensWords = [10, 'c', 'a']
}

    Hangman.prototype.makePens = function (pens) {

    }


    const letter1 = new Hangman('blue', 5) 
        console.log(letter1)

    
    const letter2 = new Hangman('red', 6) 
        console.log(letter2)
    

