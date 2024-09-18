import ButtonC from "../components/ButtonC"

const HomePage = ({ age, data }) => {




  return (
    <div>
      <h1>Hello jee</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa, dolor delectus ex reprehenderit neque doloribus impedit vel. Eius facilis neque non eligendi ipsum magni totam, incidunt consectetur ullam dolor.</p>


      <ButtonC text={'hello Jee'} color={'bg-black'} />
      <ButtonC text={'hello See'} color={'bg-orange-500'} />
      <ButtonC text={'Hello Si'} color={'bg-yellow-900'} />

      {/* <button onClick={showDialog} className="bg-orange-500 text-white px-4 py-1 rounded-lg">Hello See</button>

      <button onClick={showDialog} className="bg-yellow-900 text-white px-4 py-1 rounded-lg">Hello Si</button> */}
    </div>
  )
}
export default HomePage