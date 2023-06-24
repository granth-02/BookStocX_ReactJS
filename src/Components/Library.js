import styled from "styled-components"
import LibCard from "./LibCard";


const Library = (props) => {
    return(
        <div>
            <Libgrid>
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


export default Library;
