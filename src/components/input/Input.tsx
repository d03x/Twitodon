import { motion } from "motion/react";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputBase = styled(motion.input)`
   width:100%;
   height:3.3em;
   box-sizing:border-box;
   padding:0 1.2em;
   outline:none;
   background-color:#f2f2f279;
   border:1px solid #d0d0d069;
   border-radius:0.6em;
   transition:0.2s ease-in-out;
   &:focus{
    border:1px solid #1da1f1;
    background:#1da0f110;
   }
   @media(min-width:420px) {
    height:49px;

   }
`

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  //@ts-ignore
  return <InputBase {...props} />
}