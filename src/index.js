import "./styles.css";
import { ticTacToeBtn, rockPaperScissorBtn, etchASketchBtn, displayTicTacToe, hideHome, showHome,
    hideTicTacToe, closeTicTacToe } from "./elementSelect"; // Import relevant buttons

ticTacToeBtn().addEventListener("click", () => {
    hideHome(); // Hides home page
    displayTicTacToe(); // Displays tictactoe game
})

// TicTacToe close button
closeTicTacToe().addEventListener("click", () => {
    showHome();
    hideTicTacToe(); // Hides game
})

rockPaperScissorBtn().addEventListener("click", () => {
    alert("Hello");
})

etchASketchBtn().addEventListener("click", () => {
    alert("Hello");
})