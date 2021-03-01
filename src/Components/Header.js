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
    display: flex;
    align-items: center;
    justify-content: center;
    @import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap');
    font-family: 'Akaya Telivigala', cursive;
    font-size: 50px;
    animation: backg 2s ease forwards;
    animation-delay: 1s;
    @keyframes backg{
        0%{
            background-color: rgba(167,189,180,1);
        }
        100%{
            background-color: #b5dad3;
        }
    };
    /* transform: scale(calc(1 + ${props => props.roll}/100)); */
`;


const SLink = styled(Link)``;

const Random = styled.div`
    width: 100%;
    height: 580px;
    border-radius: 50%;
    border: 1px solid white;
    overflow: hidden;
    padding: 60px;
    border: 1px solid white;
    overflow: hidden;
    background-color: #14b09b;
    z-index: 10;
    padding: 60px;
    /* display: none; */
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover{ 
        border: 1px solid #7b86a0;
    }
    transform: scale(0);
    animation: aboutshow 1s ease forwards;
    animation-delay: 1s;
    @keyframes aboutshow{
        0%{
            transform: scale(0) rotate(0deg);
        }
        
        100%{
            transform: scale(1) rotate(720deg);
        }
    }
`;

const Contact = styled.div`
    width: 100%;
    height: 580px;
    border-radius: 50%;
    border: 1px solid white;
    padding: 60px;
    border: 1px solid white;
    overflow: hidden;
    background-color: #EBE5D9;
    padding: 60px;
    z-index: 10;
    transform: scale(0);
    /* display: none; */
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{ 
        border: 1px solid #7b86a0;
    }
    animation: aboutshow 1s ease forwards;
    animation-delay: 1s;
    @keyframes aboutshow{
        0%{
            transform: scale(0) rotate(0deg);
        }
        
        100%{
            transform: scale(1) rotate(720deg);
        }
    }
`;



const Span = styled.span`
    
    
    transform-origin: bottom left;
    font-size: 80px;
   
    text-shadow: 
        0px -2px 3px #222,
        -1px -2px 3px #222,
        -2px -2px 3px #222,

        -1px -3px 3px #222,
        -2px -3px 3px #222,
        -3px -3px 3px #222,

        -2px -4px 2px #222,
        -3px -4px 2px #222,
        -4px -4px 2px #222,

        -3px -5px 1px #222,
        -4px -5px 1px #222,
        -5px -5px 1px #222;

`;
const About = styled.div`
    width: 100%;
    height: 580px;
    border-radius: 50%;
    border: 1px solid white;
    overflow: hidden;
    padding: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0359ae;
    z-index: 10;
    
    &:hover{ 
        border: 1px solid #7b86a0;
    }
    transform: scale(0);
    animation: aboutshow 1s ease forwards;
    animation-delay: 1s;
    @keyframes aboutshow{
        0%{
            transform: scale(0) rotate(0deg);
        }
        
        100%{
            transform: scale(1) rotate(720deg);
        }
    }

`;

const Game = styled.div`
    width: 100%;
    height: 580px;
    border-radius: 50%;
    border: 1px solid white;
    overflow: hidden;
    padding: 60px;
    border: 1px solid white;
    overflow: hidden;
    background-color: #bc5f6a;
    z-index: 10;
    padding: 60px;
    /* display: none; */
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{ 
        border: 1px solid #7b86a0;
    }
    transform: scale(0);
    animation: aboutshow 1s ease forwards;
    animation-delay: 1s;
    @keyframes aboutshow{
        0%{
            transform: scale(0) rotate(0deg);
        }
        
        100%{
            transform: scale(1) rotate(720deg);
        }
    }
`;

const Project = styled.div`
    width: 100%;
    height: 580px;
    border-radius: 50%;
    border: 1px solid white;
    overflow: hidden;
    padding: 60px;
    border: 1px solid white;
    overflow: hidden;
    background-color: #e5bb4b;
    z-index: 10;
    padding: 60px;
    /* display: none; */
    transform: scale(0);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{ 
        border: 1px solid #7b86a0;
    }
    animation: aboutshow 1s ease forwards;
    animation-delay: 1s;
    @keyframes aboutshow{
        0%{
            transform: scale(0) rotate(0deg);
        }
        
        100%{
            transform: scale(1) rotate(720deg);
        }
    }
`;


const SVG = styled.svg`
    height: 100%;
    width: 100%;
    opacity: 0;
    animation: circleup 1s ease forwards;
    animation-delay: 0.5s;
    @keyframes circleup{
        0%{
            opacity:0;
        }
        100%{
            opacity: 1;
        }
    }
    z-index: 1;
    
`;

const Rotatethree = styled.div`
    position: absolute;
    left: 400px;
    top: -230px;
    transform: translate(-50%, 0%);
    padding: none;
    height: 930px;
    width: 580px;
    transform-origin: bottom center;
    transform: rotate(calc(0deg));
    background-color: transparent;
    animation: threeroll 2s ease-in-out ;
    animation-delay: 2s;
    @keyframes threeroll{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;
const Rotateone = styled.div`
    position: absolute;
    left: 400px;
    top: -230px;
    transform: translate(-50%, 0%);
    padding: none;
    height: 930px;
    width: 580px;
    transform-origin: bottom center;
    background-color: transparent;
    animation: oneroll 2s ease-in-out ;
    animation-delay: 2s;
    @keyframes oneroll{
        0%{
            transform: rotate(72deg);
        }
        100%{
            transform: rotate(432deg);
        }
    }
`;
const Rotatetwo = styled.div`
position: absolute;
    left: 400px;
    top: -230px;
    transform: translate(-50%, 0%);
    padding: none;
    height: 930px;
    width: 580px;
    transform-origin: bottom center;
    background-color: transparent;
    animation: tworoll 2s ease-in-out ;
    animation-delay: 2s;
    @keyframes tworoll{
        0%{
            transform: rotate(144deg);
        }
        100%{
            transform: rotate(504deg);
        }
    }
`;
const Rotatefour = styled.div`
    position: absolute;
    left: 400px;
    top: -230px;
    transform: translate(-50%, 0%);
    padding: none;
    height: 930px;
    width: 580px;
    transform-origin: bottom center;
    background-color: transparent;
    animation: fourroll 2s ease-in-out;
    animation-delay: 2s;
    @keyframes fourroll{
        0%{
            transform: rotate(216deg);
        }
        100%{
            transform: rotate(576deg);
        }
    }
`;
const Rotatefive = styled.div`
    position: absolute;
    left: 400px;
    top: -230px;
    transform: translate(-50%, 0%);
    padding: none;
    height: 930px;
    width: 580px;
    transform-origin: bottom center;
    transform: rotate(288deg);
    background-color: transparent;
    animation: fiveroll 2s ease-in-out;
    animation-delay: 2s;
    @keyframes fiveroll{
        0%{
            transform: rotate(288deg);
        }
        100%{
            transform: rotate(648deg);
        }
    }
`;
const CircleContainer = styled.div`
    width: 1400px;
    height: 1400px;
    transform: scale(0.4);
    background-color: transparent;
    position: absolute;
    display: inline-block;
    border-radius: 50%;
    z-index: 5;
`;

const Indicator = styled.div`
    position: absolute;
    width: 50px;
    height: 70px;
    top:45%;
    border-radius: 30px;
    transform: translateX(-50%);
    left: 50%;
    opacity:0;
    border: solid 2px white;
    animation: indicatorshow 1.5s ease forwards;
    animation-delay: 3s;
    z-index: 5;
    @keyframes indicatorshow{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`;

const ScrollBar = styled.div`
    position: absolute;
    top:5%;
    left:50%;
    transform: translateX(-50%);
    width: 3px;
    height: 10px;
    border-radius: 20px;
    border: solid 2px white;
    animation: scrolling 1.5s ease infinite;
    @keyframes scrolling{
        0%{
            transform: translate(-50%, 0%);
            
        }
        100%{
            transform: translate(-50%, 100%);
        
        }
    } 
`;
const Information = styled.div`
    width: 25%;
    height: 45%;
    border-bottom-right-radius: 100%;
    background-color: rgba(255,255,255,0);
    position: absolute;
    top: 0;
    left: 0;
    /* border--moz-outline-radius-bottomright: solid 6px #222; */
    /* opacity: 0; */
    animation: infoup 3s linear forwards;
    @keyframes infoup{
        0%{
            background-color: rgba(255,255,255,0);
        }
        100%{
            background-color: rgba(255,255,255,0.6);
        }
    }

`;
const Selected = styled.div`
    width: 25%;
    height: 45%;
    border-bottom-left-radius: 100%;
    background-color: rgba(255,255,255,0);
    position: absolute;
    top: 0;
    right: 0;
    animation: infoup 3s linear forwards;
    @keyframes infoup{
        0%{
            background-color: rgba(255,255,255,0);
        }
        100%{
            background-color: rgba(255,255,255,0.6);
        }
    }
`;
export default class extends React.Component{ 
    constructor(props){
        super(props);
        
    }
    state={
        rollingPlus: "10deg",
        rollingMinus: "-10deg",
        difference: 0
    }
    wheel = (event) => {
        const { deltaY } = event;
        this.setState({difference: deltaY > 0 ? this.state.difference + 12 : this.state.difference - 12 });
    }


    render(){
    const {rolling, rollingMinus, rollingPlus, difference} = this.state;
    console.log(difference);
    return <Container onWheel = {(e) => this.wheel(e)} >
    <CircleContainer>
    <Rotateone style={{transform: `rotate(${this.state.difference + 72}deg)`}}>
        <SLink to="/random">
        <Random ><Span>Random</Span></Random>
    </SLink>
    </Rotateone>
    <Rotatetwo style={{transform: `rotate(${this.state.difference + 144}deg)`}}>
        <SLink to="/contact">
        <Contact ><Span>Contact</Span></Contact>
    </SLink>
    </Rotatetwo>
    <Rotatethree style={{transform: `rotate(${this.state.difference}deg)`}}>
        <SLink to="/aboutme">
        <About ><Span>About</Span></About>
    </SLink>
    </Rotatethree>
    <Rotatefour style={{transform: `rotate(${this.state.difference + 216}deg)`}}>
        <SLink to="/project">
        <Project ><Span>Project</Span></Project>
    </SLink>
    </Rotatefour >
    <Rotatefive style={{transform: `rotate(${this.state.difference + 288}deg)`}}>
        <SLink to="/game">
        <Game ><Span>Game</Span></Game>
    </SLink>
    </Rotatefive>
    </CircleContainer>
    <Information></Information>
    <Selected></Selected>
    
    <Indicator><ScrollBar></ScrollBar></Indicator>
    
    </Container>};
}