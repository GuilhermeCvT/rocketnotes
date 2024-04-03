import { Container } from "./styles";

export function Button({title, $icon: Icon, loading = false, $exclude = false, ...rest}) {
  return (
    <Container {...$exclude} type="button" disabled={loading} $icon={Icon} {...rest}>
      {Icon && <Icon size={20}/>}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}