const ButtonC = ({ text, color }) => {
  const showDialog = () => {
    alert(text);
  }

  return (
    <div>
      <button onClick={showDialog} className={`${color} text-white px-4 py-1 rounded-lg`}>{text}</button>
    </div>
  )
}
export default ButtonC