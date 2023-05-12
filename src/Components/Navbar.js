import styled from "styled-components";

const Navbar = () => {
    return(
        <Navi>
            <a href="/app">Home</a>
            <a href="/">Exchange Books</a>
            <a href="/">Blogs</a>
            <a href="/">Library</a>
            <a href="/">Feedback</a>
            <a href="/">About Us</a>
        </Navi>
    )
}

const Navi = styled.nav`
    font-size: 25px;
    background: rgb(138,91,139);
    background: linear-gradient(45deg, rgba(138,91,139,1) 0%, rgba(253,201,195,1) 2%, rgba(255,203,196,1) 50%, rgba(255,203,196,1) 98%, rgba(130,84,135,1) 100%);
    display: flex;
    position: relative;
    flex-flow: row nowrap;

    a{
        font-family: 'Titillium Web', sans-serif;
        color:#fefbf6;
        transition:0.3s;
        text-decoration:none;
    }

`

export default Navbar;