import styled from "styled-components";

export const Container = styled.div`
   color: ${({ theme }) => theme.COLORS.PINK};

   margin-top: 8px;
   font-size: ${({ $small }) => $small == "true" ? "12px" : "20px" };

   svg {
      margin-right: ${({ $small }) => $small == "true" ? "6px" : "10px" };      
   }

   > span svg {
      fill: ${({ theme }) => theme.COLORS.PINK};
   }
`;