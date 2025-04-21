// Files responsible for selecting elements on page/DOM

// Selects tictactoe game
export function tictactoeDiv() {
    const tictactoe = document.querySelector("#TicTacToe");

    return tictactoe;
}

// Displays tictactoe game
export function displayTicTacToe() {
    tictactoeDiv().style.display = "block";
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
    const ticTacToeButton = document.querySelector("#tictactoebtn");
    return ticTacToeButton;
}

// Rock paper scissors button
export function rockPaperScissorBtn() {
    const rockPaperScissorBtn = document.querySelector("#rockpaperscissorbtn");
    return rockPaperScissorBtn;
}

// Etch-a-sketch button
export function etchASketchBtn() {
    const etchASketchButton = document.querySelector("#etch-a-sketchbtn");
    return etchASketchButton;
}