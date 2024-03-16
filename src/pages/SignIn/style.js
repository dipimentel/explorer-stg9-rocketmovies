import styled from "styled-components";
import BackgroundImg from '../../assets/bg-rocketmovies-login.png';

export const Container = styled.div`
   height: 100vh;
   
   display: flex;
   align-items: stretch;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;

   padding: 0 164px 0 132px;


   > h1 {
      font-size: 48px;
      color: ${({ theme }) => theme.COLORS.PINK};
   }

   > p {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY};
      margin-bottom: 48px;
   }

   > h2 {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-bottom: 48px;
   }

   button:nth-child(6) {
      margin-top: 8px;
   }

   a {
      margin-top: 40px;

      align-self: center;
   }

     
`;

export const Background = styled.div`
   flex-grow: 1;
   background: url(${BackgroundImg}) no-repeat center center;
   background-size: cover;
`;