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
      
      > a {
      margin-bottom: 24px;
      }
   }
   
`;

export const Form = styled.form`
   height: calc(100% - 45px);
   padding-right: 20px;

   overflow-y: scroll;

   &::-webkit-scrollbar {
      width: 8px;
   }

   &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${({ theme }) => theme.COLORS.PINK};
   }

   h1 {
      font-size: 36px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-bottom: 40px;
   }

   > div:nth-child(2) {
      display: flex;
      gap: 40px;

   }

   h2 {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY};
      margin: 40px 0 24px;
   }

`;

export const Markers = styled.div`
   width: 100%;
   border-radius: 10px;

   padding: 16px;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

   display: flex;
   flex-wrap: wrap;
   gap: 16px;
`;

export const Buttons = styled.div`
   display: flex;
   align-items: center;
   gap: 40px;

   margin-top: 40px; 

   button {
      width: 100%;
      height: 56px;
   }
`;