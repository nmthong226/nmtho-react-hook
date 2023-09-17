import Nav from '../views/Nav.js';
import logo from '../views/logo.svg';
import useFetch from '../customize/Fetch.js';
import '../views/Blog.scss'
import {Link} from 'react-router-dom';
import DetailBlog from './DetailBlog.js';
const Blog = () => {
    const {dataTmp: DataBlog, isError, isLoading} = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    let newData = [];
    if (DataBlog && DataBlog.length > 0)
    {
        newData = DataBlog.slice(0,10);
    }
    return(
        <header className="App-header">
            <div>
                <Nav />
                <img src= {logo} className="App-logo" alt="logo" />
                <h1>Blog Page</h1>
            </div>
            <div className='blog-container'>
                {newData && newData.length > 0 && newData.map(item => {
                return(
                <div key = {item.id} className='single-blog'>
                    <div className='title'>{item.title}</div>
                    <div className='content'>Content: {item.body}</div>
                    <Link to ={`/blog/${item.id}`}>
                        <button>View detail</button>
                    </Link>
                </div>)})}
            </div>
        </header>
    )
}
export default Blog;