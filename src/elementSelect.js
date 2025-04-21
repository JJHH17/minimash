// Files responsible for selecting elements on page/DOM

// Selects tictactoe game
export function tictactoeDiv() {
    const tictactoe = document.querySelector("#TicTacToe");
    return tictactoe;
}

// Hides tictactoe
export function hideTicTacToe() {
    tictactoeDiv().style.display = "none";
}

// Selects Rock paper scissors game
export function rockPaperScissorsDiv() {
    const rockPaperScissors = document.querySelector("#RockPaperScissors");
    return rockPaperScissors;
}

// Hides rock paper scissors
export function hideRockPaperScissors() {
    rockPaperScissorsDiv().style.display = "none";
}

// Selects etch a sketch game
export function etchASketchDiv() {
    const etchASketch = document.querySelector("#etch-a-sketch");
    return etchASketch;
}

// Hides etch a sketch
export function hideEtchASketch() {
    etchASketchDiv().style.display = "none";
}

// Tictactoe Button
export function ticTacToeBtn() {
    const ticTacToeButton = document.querySelector("")
}

// Rock paper scissors button

// Etch-a-sketch button