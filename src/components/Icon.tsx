import styled from "styled-components";

const IconBase = styled.div<{ color?: string; size?: number }>`
  color: ${(props) => props.color};
  font-size: ${props=>props.size}px;
`;
export default function Icon({
  name,
  size,
  color,
}: {
  name: string;
  size?: number;
  color?: any;
}) {
  return (
    <IconBase size={size} color={color} className={`icon-${name}`}></IconBase>
  );
}
