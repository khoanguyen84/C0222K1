const company = "CodeGym Huế";
const handleClick = () => alert('hello world');
const products = ["iPhone 6s", "iPhone 7 Plus", "iPhone X", "iPhone 13 Pro Max"];
let container = (
    <React.Fragment>
        <h1 id="heading_1" 
            className="heading" 
            title="heaading 1"
            style={{
                backgroundColor: "green",
                color: "white"
            }}>
            Hello anh em học ReactJS</h1>
        <div className="post-item">
            <h2 title="React">React</h2>
            <p>{company || "Have company name yet"}</p>
        </div>
        <ul>
            {
                products.map((pdt, index) => 
                    <li key={index}>{pdt}</li>
                )
            }
        </ul>
        {/* <button onClick={() => alert('hello world')}>Submit</button> */}
        <button onClick={handleClick}>Submit</button>
    </React.Fragment>
)

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);