import styled from "styled-components";

export const Container = styled.textarea`
   width: 100%;
   height: 274px;

   border: none;
   border-radius: 10px;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

   margin-top: 40px;
   padding: 16px;

   font-size: 14px;
   color: ${({ theme }) => theme.COLORS.WHITE};

   resize: none;

   &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
   }
`;