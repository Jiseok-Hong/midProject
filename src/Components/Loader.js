import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Container from './Container';

const Wrap = styled.div`
    position: relative;
    height: 100vh;
    background-color: #A7BDB4;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: appear 3s forwards;
    z-index: 2;
    position: relative;
    @keyframes appear{
        0%{
            
            opacity: 20%;
        }
        90%{
            opacity: 100%;
        }
    }
`;

const Text = styled.div`
    animation: fade 1.4s ease-in-out;
    animation-delay: 2.7s;
    @keyframes fade{
        0%{
            
            transform: scale(1);
        }
        
        100%{
            transform: scale(0);
        }
    }
`;

const Introduce = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap');
    overflow: hidden;
    position: relative;
    color:  #222;
    margin: auto;
    font-size: 30px;
    z-index:20;
    font-family: 'Akaya Telivigala', cursive;
    :before{
        content: '';
        position: absolute;
        left: 110%;
        width:120%;
        height: 110%;
        background: linear-gradient(90deg, transparent 0%, #A7BDB4 5%, #A7BDB4 100%);
        animation: animate 2s forwards;
        
    }
    @keyframes animate{
        0%{
            left: -20%;
        }
        100%{
            left: 130%;
        }
    }
    animation: gradient 2.5s forwards;
    @keyframes gradient{
        0%{
            color:  rgba(255,255,255,0.7);
        }
        50%{
            color:  rgba(0,0,0,0.7);
        }
        100%{
            color:  rgba(255,255,255,0.7);
        }
    }
    @media screen and (max-width: 600px){
        font-size: 25px;
    }
`; 

export default () => 
<Wrap>
    <Text>
        <Introduce>HONG JISEOK</Introduce>
    </Text>
    
</Wrap>;