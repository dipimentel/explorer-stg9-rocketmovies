import styled from "styled-components";

export const Container = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;

   padding: 13px 32px;
   border: none;
   border-radius: 8px;

   background-color: ${({ theme, $dark }) => $dark ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
   color: ${({ theme, $dark }) => $dark ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_800};

   > svg {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      
      margin-right: 8px;
   }

   &:disabled {
      filter: brightness(0.6);
      cursor: default;
      
   }
`;