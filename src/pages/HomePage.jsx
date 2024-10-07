import { useEffect, useMemo, useState } from "react"
import SamplePage from "./SamplePage";
import ItemPage from "./ItemPage";


const HomePage = () => {

  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);


  const showSome = useMemo(() => {
    for (let i = 0; i <= 1000000000; i++);
    return count * 2;
  }, [count]);


  const handleClick = () => {
    setShow((prev) => !prev);
  }

  const handleCount = () => {
    setCount((prev) => prev + 1);
  }



  return (
    <div className="p-4">

      <button onClick={handleCount}>Click Me</button>
      <h1>{showSome}</h1>

      <button onClick={handleClick}>Show Logic {`${show ? 'dark' : 'white'}`}</button>




    </div>
  )
}
export default HomePage