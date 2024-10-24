import { IconButton } from "@material-tailwind/react"
import { CustomDialog } from "./CustomDialog"

const CardAni = ({ post: { title, detail, preview }, index }) => {

  return (
    <div className="cursor-pointer group relative flex flex-col  bg-white shadow-sm border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="overflow-hidden text-white rounded-md">
        <img className="transition-transform duration-500 w-full ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
          src={preview} alt="investment-seed-round" />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {title}
        </h6>
        <p className="text-slate-600 leading-normal font-light">
          {detail}
        </p>
      </div>
      <div className="flex justify-end space-x-4 pr-2 pb-3">

        <IconButton color="green" size="sm">
          <i className="fas fa-edit" />
        </IconButton>
        <CustomDialog index={index} />


      </div>
    </div>
  )
}
export default CardAni