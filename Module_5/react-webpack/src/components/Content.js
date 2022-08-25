import React, { useState } from "react";
function Content() {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(async (res) => {
                let data = await res.json();
                setPosts(data);
            })
    }
    return (
        <React.Fragment>
            <button type="button" onClick={getPosts}>Get posts</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
    // ================================================
    // const [state, setState] = useState({
    //     "email" : "",
    //     "password" : ""
    // })

    // const handleInput = (e) => {
    //     setState({
    //         ...state,
    //         [e.target.name] : e.target.value
    //     })
    // }
    // const handleClick = () => {
    //     // call API
    //     console.log(state)
    // }

    // const fetchData = () => {
    //     setState({
    //         "email" : "nhatanh@gmail.com",
    //         "password" : "444555"
    //     })
    // }
    // return (
    //     <div className="container">
    //         <form>
    //             <table>
    //                 <tbody>
    //                     <tr>
    //                         <td>Email</td>
    //                         <td>
    //                             <input type="email" 
    //                                 value={state.email} 
    //                                 name="email" onInput={handleInput} />
    //                         </td>
    //                     </tr>
    //                     <tr>
    //                         <td>Password</td>
    //                         <td>
    //                             <input type="password" 
    //                             value={state.password} 
    //                             name="password" onInput={handleInput} />
    //                         </td>
    //                     </tr>
    //                     <tr>
    //                         <td colSpan={2}>
    //                             <button type="button" onClick={handleClick}>Submit</button>
    //                             <button type="button" onClick={fetchData}>Get Data</button>
    //                         </td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </form>

    //     </div>
    // )
    // ================================================
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleInputEmail = (e) => setEmail(e.target.value);
    // const handleInputPassword = (e) => setPassword(e.target.value);

    // const handleClick = () => {
    //     // call API
    //     console.log({
    //         "email": email,
    //         "password": password
    //     })
    // }

    // return (
    //     <div className="container">
    //         <form>
    //             <table>
    //                 <tbody>
    //                     <tr>
    //                         <td>Email</td>
    //                         <td>
    //                             <input type="email" onInput={handleInputEmail} />
    //                         </td>
    //                     </tr>
    //                     <tr>
    //                         <td>Password</td>
    //                         <td>
    //                             <input type="password" onInput={handleInputPassword} />
    //                         </td>
    //                     </tr>
    //                     <tr>
    //                         <td colSpan={2}>
    //                             <button type="button" onClick={handleClick}>Submit</button>
    //                         </td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </form>

    //     </div>
    // )
    // ================================================
    // const [title, setTitle] = useState("");
    // const changeTitle = (e) => {
    //     setTitle(e.target.value);
    //     document.title = title;
    // }
    // return (
    //     <div className="container">
    //         <input type="text" onInput={changeTitle} />
    //     </div>
    // )

    // ================================================
    // const [count, setCount] = useState(0);
    // const handleIncrement = () => {
    //     setCount(preCount => preCount + 1);
    //     setCount(preCount => preCount + 1);
    //     setCount(preCount => preCount + 1);
    // }
    // console.log(`render-${count}`);
    // return (
    //     <div className="container">
    //         <h1>{count}</h1>
    //         <button onClick={handleIncrement}>Increment</button>
    //     </div>
    // )
}

export default Content;