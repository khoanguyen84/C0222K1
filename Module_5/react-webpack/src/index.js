import React from "react";
import ReactDOM from 'react-dom/client';
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import '../src/index.css';
import UseEffect from './components/UseEffect';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// function component
function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                {/* <Content/> */}
                {/* <UseEffect /> */}
                <Routes>
                    {/* <Route path="/" element={<Navigate to={<UseEffect />} />} /> */}
                    <Route path="/content" element={<Content />} />
                    <Route path="/use-effect" element={<UseEffect />} />
                </Routes>
                <Footer />
            </BrowserRouter>
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
root.render(<App />);