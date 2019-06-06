import styled from 'styled-components';

const RightBar = styled.div`
width: 100vw;
${props => props.theme.media.greaterThan("sm")`
  width: ${props => 100 - props.theme.spacing.leftBar}vw;
  display: block;
`}
display: ${props => props.mobileHidden ? 'none' : 'block'};
margin: 0;
height: 100%;
float: right;
overflow: scroll;
`

export default RightBar;
