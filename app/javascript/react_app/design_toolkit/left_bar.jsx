import styled from 'styled-components';

const LeftBar = styled.div`
width: 100vw;
${props => props.theme.media.greaterThan("sm")`
  width: ${props => props.theme.spacing.leftBar}vw;
  display: block;
`}
display: ${props => props.mobileHidden ? 'none' : 'block'};
margin: 0;
height: 100%;
float: left;
overflow: scroll;
`

export default LeftBar;
