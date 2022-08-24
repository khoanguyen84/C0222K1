let h1 = document.createElement("h1");
h1.innerText = 'Hello anh em học reactjs';
h1.id = 'heading_1';
h1.className = 'heading';
// h1.style.backgroundColor = "green";
// h1.style.color = "white";

Object.assign(h1.style, {
    backgroundColor: "yellow",
    color: "red",
    fontSize: "60px"
})

document.querySelector('#root').appendChild(h1);

const div = document.createElement("div");
div.className = "post-item";
const h2 = document.createElement("h2");
h2.title = "React";
h2.innerText = "React";
const p = document.createElement("p");
p.innerText = "CodeGym";
div.appendChild(h2);
div.appendChild(p);

document.querySelector('#root').appendChild(div);