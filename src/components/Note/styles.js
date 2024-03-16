import styled from "styled-components";

export const Container = styled.div`
   width: 100%;

   display: flex;
   flex-direction: column;
   padding: 32px;

   border-radius: 16px;

   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

   > h2 {
      font-size: 24px;
      font-weight: 700px;
      color: ${({ theme }) => theme.COLORS.WHITE};
   }

   > p {
      line-height: 24px;
      color: ${({ theme }) => theme.COLORS.GRAY};

      margin-top: 16px;
   }

   > footer {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      margin-top: 28px;
   }
`;