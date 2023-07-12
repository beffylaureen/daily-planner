// Save Local Storage
localStorage.setItem('key', "value")


let fruit = ['kiwi', 'apple']
localStorage.setItem('fruit', JSON.stringify(fruit))

// Retrieve Local Storage
localStorage.getItem('key')

JSON.parse(localStorage.getItem('fruit'))