import panda from './panda.jpg';

const Header=()=>{
    const mycss={
        color:"white",
        backgroundcolor:"red"
    };
    return(
        <div>
            <img src={panda} />
            <h1 style={{color: "red", backgroundColor: "lightblue"}}>kuldeep</h1>
        </div>
    )
}

export default Header;