import { useEffect, useState } from "react"

const handleEven = (e) => {
  console.log(e);
  console.log('hello click me');
}

const SamplePage = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {


    document.addEventListener('keydown', handleEven);

    return () => {
      console.log('unmount');

      document.removeEventListener('keydown', handleEven);

    }

  }, []);


  const handleClick = () => {
    setCount((prev) => prev + 1);
  }



  return (
    <div className="p-4">

      <button onClick={handleClick}>Sample Page SHow</button>



    </div>
  )
}
export default SamplePage