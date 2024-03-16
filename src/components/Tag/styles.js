import styled from "styled-components";

export const Container = styled.div`
   padding: 8px 16px;
   border-radius: 8px;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};

   font-family: 'Roboto', sans-serif;
   font-size: 12px;
   line-height: 14px;
   color: ${({ theme }) => theme.COLORS.WHITE};

`;