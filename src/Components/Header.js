import styled from "styled-components";


const Header = () => {
    return(
       
        <Logo>
            <p>BookStocX</p>
            <Login>Login</Login>

            {/* <Navi> */}
                {/* <a href="/app">Home</a>
                <a href="/">Exchange Books</a>
                <a href="/">Blogs</a>
                <a href="/">Library</a>
                <a href="/">Feedback</a>
                <a href="/">About Us</a>
            </Navi> */}
        </Logo>
        
    )
}

const Logo = styled.nav`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 70px;
    background: rgb(166,209,230);
    background: linear-gradient(90deg, rgba(166,209,230,1) 8%, rgba(157,178,206,1) 34%, rgba(127,82,131,1) 74%, rgba(127,82,131,1) 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    z-index: 3;
    letter-spacing: 1px;
    font-size: 50px;
    color: black;
    font-family: 'Titillium Web', sans-serif;
    text-decoration: none;
`

const Login = styled.a`
    background-color: transparent;
    font-size: 30px;
    text-transform: capitalize;
    letter-spacing: 1.5px;
    padding: 10px;
    transition: all 0.2s ease 0s;
    letter-spacing: normal;

        &:hover {
            background-color: #90cfdd;
            color : #000;
            border-color: transparent;
            
        }


`
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



export default Header;