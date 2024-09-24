import { useState } from 'react'

const HomePage = () => {
  const [count, setCount] = useState(0);
  const handleincrement = () => {
    setCount(count + 1);
  };
  const handledecrement = () => {
    setCount(count - 1);
  };
  const isEven = count % 2 === 0;

  return (
    <div>
      <h1>{count}</h1>
      <p>{isEven ? 'Even' : 'Odd'}</p>
      <button onClick={handleincrement}>Click for increment</button>
      <br />
      <button onClick={handledecrement}>Click for decrement</button>

    </div>
  )
}

export default HomePage
