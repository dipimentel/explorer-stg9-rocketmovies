import { forwardRef } from "react";
import { Container } from "./styles";

export const Input = forwardRef(({ icon: Icon, width, ...rest }, ref) => {
   return(
      <Container $width={width}>
         { Icon && <Icon />}
         <input ref={ref} {...rest} />
      </Container>
   );
})