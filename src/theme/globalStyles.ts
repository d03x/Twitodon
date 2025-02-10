// src/theme/globalStyles.ts
import { motion } from "motion/react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: any }>`
 
`;

export const Loading = styled(motion.div)`
width:20px;
height:20px ;
border-radius:100%;
background:white;
border:4px solid #dedede;
border-left-color:red;
`