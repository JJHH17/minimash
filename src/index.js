import "./styles.css";
import { ticTacToeBtn, rockPaperScissorBtn, etchASketchBtn, displayTicTacToe} from "./elementSelect"; // Import relevant buttons

ticTacToeBtn().addEventListener("click", () => {
    displayTicTacToe();
})

rockPaperScissorBtn().addEventListener("click", () => {
    alert("Hello");
})

etchASketchBtn().addEventListener("click", () => {
    alert("Hello");
})