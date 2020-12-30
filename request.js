const getPuzzle = (callback) => {
    const request =  XMLHttpRequest()
    
    if (e.target.readyState === 4 && e.target.status === 200) {
         data = JSON.parse(e.target.responseText)
         console.log(data)
            callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
       console.log('An error has taken place')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
    return data
}


