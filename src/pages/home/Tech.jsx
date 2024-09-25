import { DiAtom, DiDatabase, DiDebian, DiJava, DiJavascript, DiMarkdown, DiNodejs, DiPython } from "react-icons/di";

const Tech = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 justify-items-center">
      <div className="text-center">
        <h2 className="font-bold text-2xl mb-5">Technologies I Use</h2>
      </div>
      <div className="grid grid-cols-4 gap-24 place-items-center">
        <DiMarkdown size={200} className="hover:scale-150 ease-in duration-700 hover:text-red-700 cursor-pointer" />
        <DiJava size={200} />
        <DiPython size={200} />
        <DiDebian size={200} />
        <DiAtom size={200} />
        <DiJavascript size={200} className="animate-bounce" />
        <DiDatabase size={200} />
        <DiNodejs size={200} />
      </div>

    </div>
  )
}

export default Tech;

