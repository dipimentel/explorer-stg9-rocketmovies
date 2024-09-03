import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: flex;
   flex-direction: column;

   > main {
      height: 100%;
      margin: 50px 123px 60px;

      overflow-y: hidden;
   }
`;

export const TitleBar = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   margin-bottom: 40px;

   > h1 {
      font-size: 32px;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.WHITE};
   }
`;

export const Content = styled.div`
   height: calc(100% - 87px);
   padding-right: 20px;

   overflow-y: scroll;

      &::-webkit-scrollbar {
         width: 8px;
      }

      &::-webkit-scrollbar-thumb {
         border-radius: 4px;
         background-color: ${({ theme }) => theme.COLORS.PINK};
      }
   
   > button {
      margin-bottom: 24px;
   }
`;