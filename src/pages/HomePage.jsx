import { useSelector } from "react-redux"
import CardAni from "../components/CardAni";
//
const HomePage = () => {


  // const ng = [
  //   { id: 1, name: 'ram' },
  //   { id: 2, name: 'shyam' },
  // ];

  // const m = ng.map((p) => p.id === 1 ? 9 : p);

  // console.log(m);

  const { posts } = useSelector((state) => state.postSlice);





  return (
    <div className="p-3 grid grid-cols-3">

      {posts.map((post, i) => {

        return <CardAni key={post.id} post={post} index={i} />;
      })}
    </div>
  )
}
export default HomePage