import styled from "styled-components"
import LibCard from "./LibCard";


const Library = (props) => {
    return(
        <div>
            
            <Libgrid>
                
                <Genre>
                    <a href="Fiction.html">Fiction</a>
                    <a href="Non-Fiction.html">Non-Fiction</a>
                    <a href="Autobio.html">Biography</a>
                    <a href="Tech.html">Technology</a>
                    <a class="active" href="/library">All</a>
                </Genre>
                <h1>Library</h1>
                <LibCard />
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
    width: 60%;
    height: 100px;
    padding: 50x;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    background-color: #a4cbe2;
    
    

    a{
        display: flex;
        align-items: center;
        font-size: 30px;
        text-align: center;
        padding: 30px;
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


export default Library;
