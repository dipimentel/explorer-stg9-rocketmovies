import { Container } from "./styles";

export function Button({ icon: Icon, dark, title, ...rest }) {
   return(
      <Container $dark={dark} {...rest}>
         { Icon && <Icon />}
         { title }
      </Container>
   );
}