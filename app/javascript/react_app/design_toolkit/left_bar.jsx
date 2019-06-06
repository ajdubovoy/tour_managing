import styled from 'styled-components';

const LeftBar = styled.div`
width: ${props => props.theme.spacing.leftBar}vw;
margin: 0;
height: 100%;
float: left;
overflow: scroll;
${props => props.theme.borders.right};
`

export default LeftBar;
