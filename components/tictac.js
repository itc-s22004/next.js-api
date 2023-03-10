// import { useState } from 'react'

// const Square = props => {
//   const [state, setState] = useState({ value: null })
//   return (
//     <button
//       className='square'
//       onClick={props.onClick}
//     >
//       {props.value}
//     </button>
//   )
// }

// const Board = props => {
//   const [state, setState] = useState({ squares: Array(9).fill(null), xIsNext: true })
//   const handleClick = (i) => {
//     const history = state.history
//     const current = history[history.length - 1]
//     const squares = current.squares.slice()
//     if (calculateWinner(squares) || squares[i]) {
//       return
//     }
//     squares[i] = state.xIsNext ? 'X' : 'O'
//     setState({ history: history.concat([{ squares }]), xIsNext: !state.xIsNext })
//   }
//   // const status = 'Next player: ' + (state.xIsNext ? 'X' : 'O')

//   const winner = calculateWinner(state.squares)
//   let status
//   if (winner) {
//     status = 'Winner: ' + winner
//   } else {
//     status = 'Next player: ' + (state.xIsNext ? 'X' : 'O')
//   }
//   const renderSquare = (i) => {
//     return (
//       <Square
//         value={props.squares[i]}
//         onClick={() => props.onClick(i)}
//       />
//     )
//   }

//   return (
//     <div>
//       <div className='board-row'>
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className='board-row'>
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className='board-row'>
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//     </div>
//   )
// }

// const Game = props => {
//   // const [state, setState] = useState({ squares: Array(9).fill(null), xIsNext: true })
//   // const [state, setState] = useState({
//   //   history: [{ squares: Array(9).fill(null) }],
//   //   xIsNext: true
//   // })
//   const history = state.history;
//   const current = history[history.length - 1];
//   const winner = calculateWinner(current.squares);
//   let status;
//   if (winner) {
//     status = 'Winner: ' + winner;
//   } else {
//     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//   }

//   return (
//     <div className='game'>
//       <div className='game-board'>
//         <Board
//           squares={current.squares}
//           onClick={(i) => handleClick(i)}
//         />
//       </div>
//       <div className='game-info'>
//         <div>{status}</div>
//         {/* <ol>{moves}</ol> */}
//       </div>
//     </div>
//   )
// }
// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }

// export default Game
