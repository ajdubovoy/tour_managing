import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: ${props => props.theme.spacing.navbarHeight};
  padding: 0;
  height: calc(100vh - ${props => props.theme.spacing.navbarHeight});
  overflow: hidden;
  display: flex;
  background: ${props => props.theme.colors.bgSecondary};
`

export default PageContainer;
