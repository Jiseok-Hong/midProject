import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background-color: rgba(167,189,180,1);
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 0;
    overflow: hidden;
    @import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap');
    font-family: 'Akaya Telivigala', cursive;
    font-size: 50px;
    animation: backg 3s ease forwards;

    @keyframes backg{
        0%{
            background-color: rgba(167,189,180,1);
        }
        30%{
            background-color: rgba(167,189,180,0.4);
        }
        50%{
            background-color: rgba(181,218,211,0.4);
        }
        100%{
            background-color: rgba(181,218,211,1);
        }
    }
`;

const SLink = styled(Link)``;

const Random = styled.div`
    position:absolute;
    height: 61%;
    width: 31%;
    bottom: 5%;
    left: 5%;
    border-radius: 50%;
    border: 1px solid white;
    overflow: hidden;
    text-align:center;
    padding: 60px;
    animation: randomUp 1s ease-in-out;
    @keyframes randomUp{
        0%{
            transform: translateY(-150%);
        }
        100%{
            transform: translateY(0%);
        }
    }
    :hover{ 
        border: 1px solid #7b86a0;
    }
    
    @media screen and (max-width: 800px){
        left: 2%;
        height: 300px;
         width: 300px;
    }
`;

const Contact = styled.div`
    position:absolute;
    height: 61%;
    width: 31%;
    bottom: 5%;
    right: 5%;
    border-radius: 50%;
    border: 1px solid white;
    overflow: hidden;
    text-align:center;
    padding: 60px;
    animation: ContactUp 1s ease-in-out;
    @keyframes ContactUp{
        0%{
            transform: translateY(-150%);
        }
        100%{
            transform: translateY(0%);
        }
    }
    :hover{ 
        border: 1px solid #7b86a0;
    }
    @media screen and (max-width: 800px){
        right:2%;
        height: 300px;
        width: 300px;
    }
`;

const About = styled.div`
    position:absolute;
    height: 61%;
    width: 31%;
    transform: translate(-50%, 0%);
    left: 50%;
    top: 5%;
    border-radius: 50%;
    border: 1px solid white;
    overflow: hidden;
    text-align:center;
    padding: 60px;
    animation: AboutUp 1s ease-in-out;
    
    @keyframes AboutUp{
        0%{
            transform: translate(-50%, 150%);
        }
        100%{
            transform: translate(-50%, 0%);
        }
    }
    :hover{ 
        border: 1px solid #7b86a0;
    }
    @media screen and (max-width: 800px){
        
        height: 300px;
        width: 300px;
    }

    
    
`;

const Header = () => 
<Container>
    <SLink to="/random">
        <Random>Random</Random>
    </SLink>
    <SLink to="/contact">
        <Contact>Contact</Contact>
    </SLink>
    <SLink to="/aboutme">
        <About>About</About>
    </SLink>
</Container>;

export default Header;