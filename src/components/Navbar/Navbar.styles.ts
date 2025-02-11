import { motion } from "motion/react";
import styled from "styled-components";
import { Container } from "@/components/Container";
export const navHeight = "48px";

export const MainNav = styled(motion.div)`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  right: 0;
  z-index: 9999;
  background: var(--navbar_bg_color);
  border-bottom:1px solid var(--color_separator_secondary);
  box-sizing: border-box;
`;

export const NavWrapper = styled(Container)`
  height: ${navHeight};
  display: flex;
  align-items: center;
  color: var(--color_text_accent);
`;
export const Logo = styled.div`
  margin-right: 10rem;
`;
export const NavItemLeft = styled.div`
  margin-right: auto;
`;
export const TopInputSearch = styled.input`
  background-color: var(--color_search_field_background);
  height: 32px;
  border-radius: 0.3em;
  padding:0 0.8em;
  outline: none;
  border: none;
  color: var(--color_text_primary);
  &:hover{
      background: var(--color_search_field_background--hover);
  }
`
