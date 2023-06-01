import styled from "styled-components"

const HomeCard = (props) => {
    return(
        <Card>
            <Wrap>
                <img src={require('../Images/Shares.jpg')} alt="ShakeSpear" />
                <h2>Fancy being Shakespeare eh ?</h2>
                <h3>Come and share your stories with others !</h3>
            </Wrap>
            <Wrap>
                <img src={require('../Images/Rec.jpg')} alt="ShakeSpear" />
                <h2>“Fiction is the lie through which we tell the truth” <br />- Albert Camus</h2>
                <h3>Check Out Our Fiction Collection  !!</h3>
            </Wrap>
            <Wrap>
                <img src={require('../Images/FAQ.jpg')} alt="ShakeSpear" />
                <h2>Have Doubts ?</h2>
                <h3>Click Hear To Clear Them Out !</h3>
            </Wrap>
        </Card>
        
       
    )
}

const Card = styled.div`
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
    display: grid;
    grid-gap: 30px;
    gap: 30px;
    grid-template-columns: repeat(3 , minmax(0, 1fr));
    background-color: #fefbf6;

    @media (max-width: 769px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    padding-top: 0;
    border-radius: 10px;
    
    background-color: #5a3b5c;
    
    &:hover{
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border: 5px solid #efa0ad;
    }

    img{
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 20px;
        width: 96%;
    }

    h2{
        color: #ffccc4;
        text-align: center;
    }

    h3{
        color: #a4cbe2;
        text-align: center;
    }

`;

export default HomeCard;