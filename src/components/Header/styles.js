import styled from "styled-components";

export const Container = styled.header`
   width: 100%;
   height: 116px;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 24px;
   flex-shrink: 0;

   padding: 0 123px;

   border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LINE};

   > div:nth-child(2) {
      margin-top: 8px;
   }
`;

export const Logo = styled.div`
   font-size: 24px;
   font-weight: 700;
   color: ${({ theme }) => theme.COLORS.PINK};

`;

export const Profile = styled.div`
   display: flex;
   align-items: center;
   gap: 9px;

   > div {
      display: flex;
      flex-direction: column;
      text-align: right;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      a {
         color: ${({ theme }) => theme.COLORS.GRAY};
      }
   }


   img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LINE};
   }

`;