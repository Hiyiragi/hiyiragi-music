import styled from "styled-components";
import IconButton from "components/UI/IconButton";
import { SubText, Text } from "components/UI/Typography";
import { device } from "styles/BreakPoints";

export const StyledTableRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightWhite};
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.2s ease-in-out;
  }

  td:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding-left: 18px;
  }

  td:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &:hover {
    .number {
      display: none;
    }
    .icon {
      display: block;
    }
  }
`;

export const TableData = styled.td`
  padding: 10px 20px 10px 0;
`;

export const TrackInfo = styled(TableData)`
  display: flex;
  gap: 25px;
  align-items: center;

  ${device.md} {
    gap: 10px;
  }
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${device.md} {
    gap: 2px;
  }
`;

export const TrackInfoImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;

  ${device.md} {
    width: 45px;
    height: 45px;
    border-radius: 10px;
  }
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const TrackSubtext = styled(SubText)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ${device.md} {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const SongNumber = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const StyledIconButton = styled(IconButton)`
  margin: 0 auto;
`;

export const IconWrapper = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 20px;
  display: none;
`;
