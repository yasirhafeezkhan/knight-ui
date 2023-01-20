import React from "react";
import "./index.css";
let moves: string[] = [];

// Helper function to check if a move is within the chessboard
function isValidMove(x: number, y: number): boolean {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}
// Function to get all possible moves for a Knight at a given position
function getKnightMoves(x: number, y: number) {
  // Possible moves for a Knight
  moves = [];
  const moveX = [2, 1, -1, -2, -2, -1, 1, 2];
  const moveY = [1, 2, 2, 1, -1, -2, -2, -1];
  // Check all possible moves and add them to the moves array if they are valid
  for (let i = 0; i < 8; i++) {
    const newX = x + moveX[i];
    const newY = y + moveY[i];
    if (isValidMove(newX, newY)) {
      moves.push(`${String.fromCharCode(newX + 97)}${newY + 1}`);
    }
  }

  moves.map((move: string) =>
    document.getElementById(move)!.classList.add("possibleMoves")
  );
}
const KnightMoves: React.FC = () => {
  const handlePositionChange = (move: string) => {
    let prevHorseImg = document.querySelectorAll(".horseImg");
    prevHorseImg.forEach(function (item) {
      item.classList.remove("horseImg");
    });
    let horseImg = document.getElementById(move);
    horseImg!.classList.add("horseImg");

    let selectedMoves = document.querySelectorAll(".possibleMoves");
    selectedMoves.forEach(function (item) {
      item.classList.remove("possibleMoves");
    });

    const position: string = move;
    const x = position.charCodeAt(0) - 97;
    const y = parseInt(position.slice(1)) - 1;
    getKnightMoves(x, y);
  };
  return (
    <div id="main">
      <div className="boardWrapper">
        <table role="grid" className="board" id="chessBoard">
          <tbody>
            <tr>
              <th id="rank_0">8</th>
              <td id="a8" onClick={() => handlePositionChange("a8")}></td>
              <td id="b8" onClick={() => handlePositionChange("b8")}></td>
              <td id="c8" onClick={() => handlePositionChange("c8")}></td>
              <td id="d8" onClick={() => handlePositionChange("d8")}></td>
              <td id="e8" onClick={() => handlePositionChange("e8")}></td>
              <td id="f8" onClick={() => handlePositionChange("f8")}></td>
              <td id="g8" onClick={() => handlePositionChange("g8")}></td>
              <td id="h8" onClick={() => handlePositionChange("h8")}></td>
            </tr>
            <tr>
              <th id="rank_1">7</th>
              <td id="a7" onClick={() => handlePositionChange("a7")}></td>
              <td id="b7" onClick={() => handlePositionChange("b7")}></td>
              <td id="c7" onClick={() => handlePositionChange("c7")}></td>
              <td id="d7" onClick={() => handlePositionChange("d7")}></td>
              <td id="e7" onClick={() => handlePositionChange("e7")}></td>
              <td id="f7" onClick={() => handlePositionChange("f7")}></td>
              <td id="g7" onClick={() => handlePositionChange("g7")}></td>
              <td id="h7" onClick={() => handlePositionChange("h7")}></td>
            </tr>
            <tr>
              <th id="rank_2">6</th>
              <td id="a6" onClick={() => handlePositionChange("a6")}></td>
              <td id="b6" onClick={() => handlePositionChange("b6")}></td>
              <td id="c6" onClick={() => handlePositionChange("c6")}></td>
              <td id="d6" onClick={() => handlePositionChange("d6")}></td>
              <td id="e6" onClick={() => handlePositionChange("e6")}></td>
              <td id="f6" onClick={() => handlePositionChange("f6")}></td>
              <td id="g6" onClick={() => handlePositionChange("g6")}></td>
              <td id="h6" onClick={() => handlePositionChange("h6")}></td>
            </tr>
            <tr>
              <th id="rank_3">5</th>
              <td id="a5" onClick={() => handlePositionChange("a5")}></td>
              <td id="b5" onClick={() => handlePositionChange("b5")}></td>
              <td id="c5" onClick={() => handlePositionChange("c5")}></td>
              <td id="d5" onClick={() => handlePositionChange("d5")}></td>
              <td id="e5" onClick={() => handlePositionChange("e5")}></td>
              <td id="f5" onClick={() => handlePositionChange("f5")}></td>
              <td id="g5" onClick={() => handlePositionChange("g5")}></td>
              <td id="h5" onClick={() => handlePositionChange("h5")}></td>
            </tr>
            <tr>
              <th id="rank_4">4</th>
              <td id="a4" onClick={() => handlePositionChange("a4")}></td>
              <td id="b4" onClick={() => handlePositionChange("b4")}></td>
              <td id="c4" onClick={() => handlePositionChange("c4")}></td>
              <td id="d4" onClick={() => handlePositionChange("d4")}></td>
              <td id="e4" onClick={() => handlePositionChange("e4")}></td>
              <td id="f4" onClick={() => handlePositionChange("f4")}></td>
              <td id="g4" onClick={() => handlePositionChange("g4")}></td>
              <td id="h4" onClick={() => handlePositionChange("h4")}></td>
            </tr>
            <tr>
              <th id="rank_5">3</th>
              <td id="a3" onClick={() => handlePositionChange("a3")}></td>
              <td id="b3" onClick={() => handlePositionChange("b4")}></td>
              <td id="c3" onClick={() => handlePositionChange("c3")}></td>
              <td id="d3" onClick={() => handlePositionChange("d3")}></td>
              <td id="e3" onClick={() => handlePositionChange("e3")}></td>
              <td id="f3" onClick={() => handlePositionChange("f3")}></td>
              <td id="g3" onClick={() => handlePositionChange("g3")}></td>
              <td id="h3" onClick={() => handlePositionChange("h3")}></td>
            </tr>
            <tr>
              <th id="rank_6">2</th>
              <td id="a2" onClick={() => handlePositionChange("a2")}></td>
              <td id="b2" onClick={() => handlePositionChange("b2")}></td>
              <td id="c2" onClick={() => handlePositionChange("c2")}></td>
              <td id="d2" onClick={() => handlePositionChange("d2")}></td>
              <td id="e2" onClick={() => handlePositionChange("e2")}></td>
              <td id="f2" onClick={() => handlePositionChange("f2")}></td>
              <td id="g2" onClick={() => handlePositionChange("g2")}></td>
              <td id="h2" onClick={() => handlePositionChange("h2")}></td>
            </tr>
            <tr>
              <th id="rank_7">1</th>
              <td id="a1" onClick={() => handlePositionChange("a1")}></td>
              <td id="b1" onClick={() => handlePositionChange("b1")}></td>
              <td id="c1" onClick={() => handlePositionChange("c1")}></td>
              <td id="d1" onClick={() => handlePositionChange("d1")}></td>
              <td id="e1" onClick={() => handlePositionChange("e1")}></td>
              <td id="f1" onClick={() => handlePositionChange("f1")}></td>
              <td id="g1" onClick={() => handlePositionChange("g1")}></td>
              <td id="h1" onClick={() => handlePositionChange("h1")}></td>
            </tr>
            <tr>
              <th></th>
              <th id="file_0">a</th>
              <th id="file_1">b</th>
              <th id="file_2">c</th>
              <th id="file_3">d</th>
              <th id="file_4">e</th>
              <th id="file_5">f</th>
              <th id="file_6">g</th>
              <th id="file_7">h</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default KnightMoves;
