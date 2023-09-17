import { useParams } from "react-router-dom";
const DetailBlog = () => {
    let {id} = useParams();
    return(
        <div>
            <h1>It's blog's detail with {id}</h1>
        </div>
    )
}
export default DetailBlog;