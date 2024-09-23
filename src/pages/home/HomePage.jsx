import DisplaySection from "./DisplaySection"
import Info from "./Info"
import Tech from "./Tech"

const HomePage = () => {
  return (
    <div className="space-y-11">
      <DisplaySection />
      <Tech />
      <Info/>

    </div>
  )
}
export default HomePage