import Bloglist from "./Bloglist";
import useFetch from "./useFetch";


const Home = () => {

    const { data: blogs, error, isWaiting } = useFetch('http://localhost:3001/blogs')

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isWaiting && <div>Loading...</div> }
            {blogs && <Bloglist blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;

// npx json-server --watch data/db.json --port 3001
/*
    http://localhost:3001/blogs
    /blogs          GET     fetch all blogs
    /blogs/{id}     GET     fetch a single data
    /blogs          POST    add a new blog
    /blogs/{id}     DELETE  delete a blog
*/