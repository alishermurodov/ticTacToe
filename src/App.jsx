import { useState } from 'react'
import './App.css'

let cubes = [null, null, null, null, null, null, null, null, null]

function App() {

  let [arr, setArr] = useState([...cubes])
  // console.log(arr);

  let [status, setStatus] = useState(false)
  

  const declareWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(squares[a]);
        return squares[a];
      }
    }
    return null;
  }

  // handleValue
  function handleValue(id) {

    let prev = [...arr]
    status ? prev[id] = 'X' : prev[id] = 'O'
    setStatus(!status)
    setArr(prev)
    const winner = declareWinner(prev);
    
    if (winner) {
      alert(`Player ${winner} wins!`);
    }
    
  }

  // 
  function refreshCubes(){
    setArr([...cubes])
  }

  return (
    <div>
      <div className="cubeContainer">
        {
          arr?.map((cubes, i) => {
            return (
              <div
                className="cube"
                key={i}
                onClick={() => { handleValue(i) }}
              >
                {cubes}
              </div>
            )
          })
        }
      </div>
      <div style={{padding: '23px'}}>
        <button onClick={()=>refreshCubes()}>restart</button>
      </div>
    </div>
  )
}

export default App
