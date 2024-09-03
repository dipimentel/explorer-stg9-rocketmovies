import { Container } from "./styles";

export function Button({ icon: Icon, dark, title, ...rest }) {
   return(
      <Container
         type="button"
         $dark={dark}
         {...rest}
      >
         { Icon && <Icon />}
         { title }
      </Container>
   );
}