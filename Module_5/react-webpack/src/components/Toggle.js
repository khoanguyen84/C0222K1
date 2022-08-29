import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const menus = ["posts", "comments", "albums", "photos", "todos", "users"];

function Toggle() {
    const [title, setTitle] = useState('');
    const [state, setState] = useState({
        loading: false,
        data: []
    });
    const [menu, setMenu] = useState("posts");
    useEffect(() => {
        // console.log("Component Toggle mounted");
        // document.title = title;
        try {
            setState({ ...state, loading: true });

            fetch(`https://jsonplaceholder.typicode.com/${menu}`)
                .then(async (res) => {
                    let resData = await res.json();
                    setState({
                        data: resData,
                        loading: false
                    });
                })
        } catch (error) {

        }
    }, [menu])

    const { loading, data } = state;
    return (
        <div>
            <input type="text" onInput={(e) => setTitle(e.target.value)} />
            <div>
                {
                    menus.map((tab) => (
                        <button key={tab}
                            style={menu === tab ? {
                                backgroundColor: "green",
                                color: "white"
                            } : null}
                            onClick={() => setMenu(tab)}
                        >{tab}</button>
                    ))
                }
                {
                    loading ? <Spinner /> : (
                        <ul>
                            {
                                data.map((item) => (
                                    <li key={item.id}>{item.body || item.title || item.website}</li>
                                ))
                            }
                        </ul>
                    )
                }

            </div>
        </div>
    )
}

export default Toggle;