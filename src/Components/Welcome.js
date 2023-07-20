import styled from "styled-components"

const Welcome = (props) => {
  return (
    <Intro>
        <img src="https://free4kwallpapers.com/uploads/originals/2019/12/17/painted-library-wallpaper.jpg" />
        <span>WELCOME</span>
    </Intro>
  )
}

const Intro = styled.div`
    img{
        width: 100vw;
        margin-top: 80px;
        z-index: -1;
        
    }
    span{
        display: flex;
        text-align: center;
        align-items: center; 
        justify-content: center; 
        position: relative;
        margin-top: -55vw;
        color: #ffccc4;
        font-size: 5vw;
        letter-spacing: 20px;
        font-family: 'Lora', serif;

    }
`

export default Welcome;