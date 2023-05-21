import styled from "styled-components";
import IconButton from "components/UI/IconButton/IconButton";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 35px;
  overflow: hidden;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const GenresWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  min-height: 116px;
`;

export const GenreSkeletonWrapper = styled.div`
  display: flex;
`;

export const Button = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;