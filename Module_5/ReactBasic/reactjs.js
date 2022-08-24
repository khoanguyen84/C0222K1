// React Element
// 1. type: tagname/component
// 2. props: atributes
// 3. Childrens : Text/ React Element khác

// JSX: JavaScript XML
const h1 = React.createElement("h1", 
                                    {
                                        id: "heading_1",
                                        className: "heading",
                                        title: "heading 1"
                                    }, 
                                "Hello anh em học ReactJS");
const div = React.createElement("div",
                                    {
                                        className: "post-item"
                                    },
                                    React.createElement("h2", { title : "React"}, "React"),
                                    React.createElement("p", null, "CodeGym")
                                )
const container = React.createElement(React.Fragment, null, h1, div);
// const container = React.createElement("div", null, h1, div);
// ReactDOM.render(h1, document.querySelector("#root"));
const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(h1);    
// root.render(div);   
root.render(container);