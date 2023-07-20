import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from "styled-components"
import TechCard from "./TechCard";


const Technology = (props) => {
    return(
        <div>
            
            <Libgrid>
                <Genre>
                    <a href="Fiction.html">Fiction</a>
                    <a href="Non-Fiction.html">Non-Fiction</a>
                    <a href="Autobio.html">Biography</a>
                    <a class="active" href="/technology">Technology</a>
                    <a href="/library">All</a>
                </Genre>
                <h1>Technology</h1>
                <TechCard />
            </Libgrid>
            
        </div>
    )
}

const Libgrid = styled.div`
    position: relative;
    overflow-x: hidden;
    display: block;
    top: 95px;
    background-color: #fefbf6;
    text-align: center;
    

`

const Genre = styled.div`
    display: flex;
    align-items: center;
    width: 65vw;
    height: 14vh;
    padding: 3.25vw;
    margin-top: 3.25vw;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0.6510416666666666vw;
    background-color: #a4cbe2;
    border-radius: 2px;
    

    a{
        display: flex;
        align-items: center;
        font-size: 1.95vw;
        text-align: center;
        padding: 1.953125vw;
        text-decoration:none;
        color:  #7F5283;
        transition:0.2s;
        margin-left: auto;
        margin-right: auto;

        &:hover{
            background-color:#7F5283;
            color: #ffccc4;
        }

        
    }

    a.active{
        background-color:#7F5283;
        color: #ffccc4;
    }




`


export default Technology;
