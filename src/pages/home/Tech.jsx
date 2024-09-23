import { DiAtom, DiDatabase, DiDebian, DiJava, DiJavascript, DiMarkdown, DiNodejs, DiPython } from "react-icons/di";

const Tech = () => {
  return (
    <div className="grid grid-cols-auto place-items-center gap-y-10">

      <DiMarkdown size={200} className="hover:scale-150 ease-in duration-700 hover:text-red-700  cursor-pointer" />
      <DiJava size={200} />
      <DiPython size={200} />
      <DiDebian size={200} />
      <DiAtom size={200} />
      <DiJavascript size={200} className="animate-bounce" />
      <DiDatabase size={200} />
      <DiNodejs size={200} />


    </div>
  )
}
export default Tech