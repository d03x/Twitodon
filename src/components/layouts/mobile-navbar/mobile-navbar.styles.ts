import { breakpoint } from "@/utils/breakpoint";
import { motion } from "motion/react";
import styled from "styled-components";

const mobileNavbarHeight = 59;

export const Wrapper = styled(motion.nav)`
  height: ${mobileNavbarHeight}px;
  border-top: 1px solid var(--primary-border-color);
  background: var(--primary-bg-color);
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  right: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  @media (min-width: ${breakpoint.md}) {
    display: none;
  }
`;

export const Item = styled(motion.div)<{ badgeValue?: string }>`
  flex-shrink: 1;
  position: relative;
  border-radius: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }

  &::before {
    content: "${(props) => (props.badgeValue ? props.badgeValue : "")}";
    display: ${(props) => (props.badgeValue ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -1px;
    right: -5px;
    width: 18px;
    height: 18px;
    background: var(--danger-color);
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before {
    transform: scale(1);
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;