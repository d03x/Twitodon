import styled from 'styled-components';

const Spinner = () => (
    <StyledSpinner />
);

const StyledSpinner = styled.div`
  animation: rotate 2s linear infinite;
    width: 14px;
    height: 14px;
    border:2px solid #dedede;
    border-left-color:black;
    border-radius:100%;
  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;