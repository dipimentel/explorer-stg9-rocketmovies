import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
   display: flex;
   align-items: center;

   border: none;
   background: none;

   > svg {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};

      margin-right: 8px;
   }

   > span {
      color: ${({ theme }) => theme.COLORS.PINK};

   }
`;