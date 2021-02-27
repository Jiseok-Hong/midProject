import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Container from './Container';

const Wrap = styled.div`
   height: 100vh;
    background-color: #A7BDB4;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 30px;
    justify-content: center;
    animation: fade 2s forwards;
    @keyframes fade{
        0%{
            opacity: 20%;
        }
        90%{
            opacity: 100%;
        }
    }
`;

const Introduce = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap');
    overflow: hidden;
    position: relative;
    margin: auto;
    font-family: 'Akaya Telivigala', cursive;
    :before{
        content: '';
        position: absolute;
        left: 110%;
        width:120%;
        height: 110%;
        background: linear-gradient(90deg, transparent 0%, #A7BDB4 5%, #A7BDB4 100%);
        animation: animate 3s forwards;
    }
    @keyframes animate{
        0%{
            left: -20%;
        }
        100%{
            left: 130%;
        }
    }
`; 

export default () => 
<Wrap>
    <Introduce>HONG JISEOK</Introduce>
</Wrap>;