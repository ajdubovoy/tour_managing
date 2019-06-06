import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const OutlineButton = styled(Button)`
background-color: transparent;
color: ${props => props.theme.colors.active};
${(props) => {
  if (props.uppercaseStyle) {
    return( 
      `
      text-transform: uppercase;
      font-weight: 200;
      letter-spacing: 0.15rem;
      font-size: 0.8rem;
      `
    );
  }
}}
`

export default OutlineButton;
