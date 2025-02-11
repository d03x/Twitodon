import { breakpoint } from "@/utils/breakpoint";
import { styled } from "styled-components";
export const Container = styled.div`
  width: 100%;
  padding: 0 1em;
  box-sizing: border-box;
  @media (min-width: ${breakpoint.lg}) {
    max-width: 1080px;
    margin: auto;
    padding: 0;
  }
`;
