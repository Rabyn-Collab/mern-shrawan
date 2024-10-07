import { memo } from "react";

const ItemPage = () => {
  console.log('child render');
  return (
    <div>

      <h1>hello jee</h1>
    </div>
  )
}
export default memo(ItemPage)