import { breakpoint } from "@/utils/breakpoint";
import { motion } from "motion/react";
import styled from "styled-components";

const sidebarWidth = 230;
export const Wrapper = styled(motion.div)`
  min-width: 100%;
`;
export const Container = styled(motion.div)`
  width: 100%;
  padding: 0 0.3em;
  box-sizing: border-box;

  @media (min-width: ${breakpoint.xl}) {
    width: 1200px;
    margin: 0px auto;
  }
`;

export const Begin = styled(motion.div)`
  @media (min-width: ${breakpoint.md}) {
    display: flex;
    align-items: flex-start;
  }
`;
export const Sidebar = styled(motion.div)`
  display: none;
  overflow-y: auto;
  @media (min-width: ${breakpoint.md}) {
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: sticky;
    top: 0px;
    min-height: 90vh;
    box-sizing: border-box;
    display: block;
  }
  @media (min-width: ${breakpoint.lg}) {
    max-width: ${sidebarWidth}px;
    width: 100%;
    position: sticky;
    top: 0px;
    min-height: 90vh;
    box-sizing: border-box;
    display: block;
  }
`;
export const Main = styled.div`
  @media (min-width: ${breakpoint.md}) {
    max-width: 100%;
    padding: 0 0.5em;
    box-sizing: border-box;
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    width: 100%;
    display: block;
  }
`;
