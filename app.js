// let perc = 73.9
// document.write(Math.floor(perc))

// document.write(Math.random() * 10)

let player1 = prompt('Enter heads name')
let player2 = prompt('Enter tails name')
let toss = Math.random() * 2
let change = Math.floor(toss)
// document.write(change)

if(change == 0) {
    document.write(player1 + ' heads win')
}
else{
    document.write(player2 + ' tails win')
}