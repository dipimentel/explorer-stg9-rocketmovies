import { Container } from "./styles";

export function Input({ icon: Icon, width, ...rest }) {
   return(
      <Container $width={width}>
         { Icon && <Icon />}
         <input {...rest} />
      </Container>
   );
}