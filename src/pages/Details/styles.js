import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  
  > main {
    height: 100%;
    margin: 40px 123px 60px;
    overflow-y: hidden;

    a {
      margin-bottom: 24px;
    }
  }
`;

export const Content = styled.div`
  height: calc(100% - 45px);
  padding-right: 20px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  /* &::-webkit-scrollbar-track {
    background: red;
    border-radius: 8px;
    margin: 20px;
  } */

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const MovieTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  > h1 {
    font-size: 36px;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > span {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

`;

export const Credits = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 24px;

  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    align-items: center;

    img {
      width: 18px;
      height: 18px;
      margin-right: 8px;

      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LINE};
    }
  }

  > time {
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 18px;
      margin-right: 8px;
    }
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  margin: 40px 0;

  > div {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  }
`;

export const Review = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: justify;

  line-height: 24px;

  > p + p {
    margin-top: 24px;
  }
`;