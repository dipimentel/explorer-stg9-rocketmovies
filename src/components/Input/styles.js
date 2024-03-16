import styled from "styled-components";

export const Container = styled.div`
   width: ${({ $width }) => $width ? $width : "100%"} ;
   height: 56px;
   padding: 12px;

   display: flex;
   align-items: center;

   margin-bottom: 8px;
   border-radius: 10px;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

   > svg {
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-size: 20px;
   }

   > input {
      width: 100%;
      
      border: none;
      background: transparent;
      margin-left: 8px;
      
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      &::placeholder {
         color: ${({ theme }) => theme.COLORS.GRAY};
      }
   }
`;