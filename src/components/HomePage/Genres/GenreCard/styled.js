import { SectionSubtitle } from "components/UI/Typography";
import styled from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 116px;
  border-radius: 25px;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.4;
    border-radius: 25px;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center center;
    color: ${({ theme }) => theme.colors.white};
  }

  ${device.md} {
    width: 137px;
    height: 95px;
  }
`;

export const GenreName = styled(SectionSubtitle)`
  z-index: ${({ theme }) => theme.zIndex["10"]};
`;
