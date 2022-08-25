import React from "react";
import ReactDOM from 'react-dom/client';
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import '../src/index.css';

// function component
function App(){
    return (
        <div className="container">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}
// ReactDOM.render(<App/>, document.querySelector('#root'));


// class component
// class App extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>Xin chào anh em CodeGym Huế</h1>
//             </div>
//         )
//     }
// }


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);