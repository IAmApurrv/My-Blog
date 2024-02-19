import { useState } from "react";
// import { useHistory } from "react-router-dom";
// In "react-router-dom" v6 --> useHistory hook has been replaced with useNavigate
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const [author, setAuthor] = useState('mario');
  const [author, setAuthor] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent refresh of page after clicking button
    const blog = { title, body, author };
    // console.log(blog);

    setIsWaiting(true)

    fetch('http://localhost:3001/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog added.")
      // history.go(-1);
      // history.push('/');
      navigate('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body :</label>
        <textarea
          required
          value={body}
          cols="30" rows="10"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author :</label>
        {/* <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Apurrv">Apurrv</option>
          <option value="AA">AA</option>
        </select> */}
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        {!isWaiting && <button>Add Blog</button>}
        {isWaiting && <button disabled>Adding Blog</button>}

      </form>
    </div>
  );
}

export default Create;