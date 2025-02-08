import { motion } from "motion/react";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
    font-family:var(--font-base);
    box-sizing:border-box ;
    font-family:"Roboto";
    border-radius:10px;
    height:100vh ;
    margin:2em auto;
    padding:10px 1.9em;
    width:100%;
    @media(min-width:420px){
        width:370px;
        padding: 10px;
    }
`
export const Header = styled(motion.div)`
    display:flex;
    margin-bottom:10px;
    align-items:center;
    flex-direction:column;

`;
export const Logo = styled.img`
    width:40px;
    height:40px;
    aspect-ratio:1/1;
    border-radius:2px;
`
export const Title = styled.h1`
    font-size:18px;
    font-weight:bold;
`

export const Form = styled(motion.form)`
    display:flex;
    flex-direction:column;
    gap:1em;
`

export const Button = styled(motion.button)`
 width:100%;
 display:flex;
 align-items:center;
 justify-content:center;
 gap:10px;
 height:45px;
 cursor:pointer;
 background-color:#1da1f1;
 border:none;
 border-radius:0.5em;
 font-weight:bold;
 color:white;
 transition:0.1s ease-in-out;
 &:disabled{
    opacity:0.7;
    cursor:not-allowed;
 }
 &:active{
    transform:scale(1.02);
 }
 transition:0.2s ease;
 &:hover{
    opacity:0.8 ;
 }
`
export const SocialLogin = styled(Button)`
 background:transparent;
 color:black;
 margin:10px 0px;
 font-weight:500;
 font-size:small;
 border:1px solid #1da1f1;
 color: #1da1f1;
`