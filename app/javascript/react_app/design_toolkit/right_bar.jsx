import styled from 'styled-components';

const RightBar = styled.div`
width: ${props => 100 - props.theme.spacing.leftBar}vw;
margin: 0;
height: 100%;
float: right;
overflow: scroll;
`

export default RightBar;
