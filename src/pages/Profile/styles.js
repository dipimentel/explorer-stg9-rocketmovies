import styled from "styled-components";

export const Container = styled.div`
   width: 100%;

   > header {
      width: 100%;
      height: 144px;

      display: flex;
      align-items: center;

      padding: 0 123px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
   }
`;

export const Form = styled.form`
   max-width: 340px;
   margin: -93px auto 0;

   > div:nth-child(4) {
      margin-top: 16px;
   }

   > button {
      margin-top: 16px;
      width: 100%;
   }
`;

export const Avatar = styled.div`
   width: 186px;
   height: 186px;

   position: relative;
   margin: 0 auto 64px;


   > img {
      width: 186px;
      height: 186px;

      border-radius: 50%;
   }

   > label {
      display: flex;
      justify-content: center;
      align-items: center;
      
      width: 48px;
      height: 48px;
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 50%;

      position: absolute;
      bottom: 3px;
      right: 3px;

      cursor: pointer;

      svg {
         font-size: 20px;
         color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      }
   }

   input {
      display: none;
   }
`;
