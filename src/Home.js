import { useState } from "react";

const Home = () => {
    //let name = "Clark";
    const [name, setName] = useState("Clark");
    const [age, setAge] = useState(36);

    const handleClick = (e) => {
        setName("Bruce");
        setAge(48);
    }

    return (
        <div className="home">
            <h2>Home page</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;