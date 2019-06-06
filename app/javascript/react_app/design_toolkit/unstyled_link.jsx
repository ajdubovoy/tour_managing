import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UnstyledLink = styled(Link)`
color: ${props => props.theme.colors.body} !important;
text-decoration: none !important;
`;

export default UnstyledLink;
