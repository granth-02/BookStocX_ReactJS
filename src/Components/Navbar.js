import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserEmail, selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/userSlice";
import { useEffect } from "react";
import{ BsFillBookmarkHeartFill } from 'react-icons/bs'
import Home from "./Home";


const Navbar = (props) => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail)
    const userPhoto = useSelector(selectUserPhoto);

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
           
          }
        });
      }, [userName]);

    const handleAuth = () => {
        if(!userName){
            
            signInWithPopup(auth,provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                alert(error.messsage);
            }
            )
        }
        else if(userName){
            auth
                .signOut().then(() => {
                    dispatch(setSignOutState());
                    history('/')
                    
                })
        }
        
    };


    return(
        <Nav>
            <Logo>
                BookStocX
            </Logo>
            <Bar>
                <a class="active" href="/home">
                    <span>Home</span>
                </a>
                <a href="/">
                    <span>Exchange</span>
                </a>
                <a href="/">
                    <span>Blogs</span>
                </a>
                <a href="/library">
                    <span>Library</span>
                </a>
                <a href="/">
                    <span>About Us</span>
                </a>
                <a href="/">
                    <span>Feedback</span>
                </a>
            </Bar>
            {!userName ? (
            <Login onClick={handleAuth}>Login</Login>
             ) : (
                
                <>
                <UserImg>
                    <Cart size={40}/>
                    <img src={(userPhoto)} alt="profile-pic" />
                    <DropDown>
                        <span onClick={handleAuth}>Sign Out</span>
                    </DropDown>
                </UserImg>
                
                </>
             )}</Nav>
             

        
    )
}

const Nav = styled.nav`
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    top: 0;
    right: 0;
    left: 0;
    height: 80px;
    background-color:  #5a3b5c;
`

const Logo = styled.a`
    font-size: 50px;
    color: #ffccc4;
`
const Bar = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 55px;

    a{
        display: flex;
        align-items: center;
        padding: 0 10px;
        
        span{
        color: rgb(249, 249, 249);
        font-size: 16px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

            &:before{
                background-color: #ffccc4;
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1;
            
            
            }
        }
        &:active{
            background-color: red;
        }
    }

    @media (max-width: 800px) {
        display: none;
    }

`

const Login = styled.a`
    background-color:  #5a3b5c;
    color: #ffccc4;
    padding: 20px 24px;
    text-transform: capitalize;
    letter-spacing: 1.5px;
    margin-left: auto;
    margin-right: 10px;
    border-radius: 0px;
    transition: all 0.5s ease 0s;
    font-size: 20px;

    &:hover {
        background-color: #ffccc4;
        color : #5a3b5c;
        border-color: transparent;
    }
`
const UserImg = styled.div`
    img{
        border-radius: 50%;
        height: 70px;
        margin-right: 5px;
    }
    
    
`
const DropDown = styled.div`
    top: 48px;
    position: absolute;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 1px;
    width: 89px;
    opacity: 0;

    &:hover{
        
        opacity: 1;
        transition-duration: 1s;
    }
`

const Cart = styled(BsFillBookmarkHeartFill)`
    cursor: pointer;
    margin-right: 25px;
    color: #ffccc4;
    margin-bottom: 15px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
     &:hover{
        transform: scale(1.2);
     }
`

export default Navbar;