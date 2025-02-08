// src/theme/globalStyles.ts
import { motion } from "motion/react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: any }>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
  }
  *{
    font-family:"Work Sans", serif;
  }
  a {
    color: ${({ theme }) => theme.primary};
  }

  button {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
  }
`;

export const Loading = styled(motion.div)`
width:20px;
height:20px ;
border-radius:100%;
background:white;
border:4px solid #dedede;
border-left-color:red;
`