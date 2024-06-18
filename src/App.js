import { useState } from 'react';
import './App.css';

let initialStars = [
  {
    id: 1,
    star: '☆',
  },
  {
    id: 2,
    star: '☆',
  },
  {
    id: 3,
    star: '☆',
  },
  {
    id: 4,
    star: '☆',
  },
  {
    id: 5,
    star: '☆',
  },
];

function App() {

  const [InitialStars, setInitialStars] = useState(initialStars);

  let filledStar = '★';

  const handleClick = (starId) => {
    const arrayLength = InitialStars.length; // array is five in this example, but could be any length
    let newStars = InitialStars.filter(star => star.id <= starId);
    console.log(newStars); //log filtered array
    let nextStars = newStars.map(next => {

      return {
        ...next,
        star: filledStar,
      };
    });
    // log array with filled stars
    console.log(nextStars);
    // add array elements up to length
    let list = nextStars;
    for (let i = starId + 1; i <= arrayLength; i++) {
      list = list.concat({ id: i, star: '☆' });
    }
    // log new array
    console.log(list)
    setInitialStars(list);

  };

  const handleReset = () => {
    setInitialStars(initialStars);
  }

  return (
    <>
      <ul>
        {InitialStars.map(x =>
          <li key={x.id}><div onClick={() => handleClick(x.id)}>{x.star}</div></li>
        )}
      </ul>
      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
}

export default App;
