import { motion } from "motion/react";
import styled from "styled-components";
import { navHeight } from "../Navbar/Navbar.styles";
import { Container } from "../Container";
import { breakpoint } from "@/utils/breakpoint";
export const Main = styled(motion.div)``;

export const Wrapper = styled(Container)`
  margin-top: ${navHeight};
`;

export const Begin = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: block;
  align-items: start;
  @media (min-width: ${breakpoint.xl}) {
    display: flex;
  }
`;
export const Content= styled.div`

`