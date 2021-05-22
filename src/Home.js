const Home = () => {
    const handleClick = (e) => {
        console.log("hello Raja: ", e);
    }

    
    return (
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click me</button>
            
        </div>
    );
}
 
export default Home;