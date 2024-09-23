import { DiAtom, DiCss3, DiJava, DiJavascript, DiMarkdown, DiPython } from "react-icons/di" ;

const Tech = () => {
  return (
    <div className="grid grid-cols-auto
      place-items-center gap-y-10">

       <DiMarkdown size={200}/>
       <DiJava size={200}/>
       <DiPython size={200}/>
       <DiCss3 size={200}/>
       <DiAtom size={200}/>
       <DiJavascript size={200}/>
    </div>
  )
}

export default Tech ;