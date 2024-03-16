import styled from "styled-components";

export const Container = styled.div`
   padding: 14px;

   border-radius: 10px;
   background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
   border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};

   display: flex;
   align-items: center;
   flex-basis: 180px;
   gap: 16px;

   > input {
      width: 100%;
      border: none;
      background: transparent;

      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      &::placeholder {
         color: ${({ theme }) => theme.COLORS.GRAY};
      }
   }

   > button {
      border: none;
      background: transparent;

      svg {
         font-size: 22px;
         color: ${({ theme }) => theme.COLORS.PINK};
      }
   }
`;