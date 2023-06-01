import styled from "styled-components"
import HomeCard from "./HomeCard";

const Home = (props) => {
    return(
        <Hgrid>
            <img src={require('../Images/homeheader.jpg')} alt="Header" />
            <HomeCard />
        </Hgrid>
    )
}

const Hgrid = styled.div`
    position: relative;
    overflow-x: hidden;
    display: block;
    top: 95px;
    background-color: #fefbf6;
    
    img{
        display: block;
        width: 98%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 20px;
        
    }
    
`



export default Home;
