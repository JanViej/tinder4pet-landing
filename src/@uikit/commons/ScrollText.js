import styled from 'styled-components';

const ScrollText = ({ color = '#000' }) => (
  <ScrollTextWrapper color={color}>
    Scroll down for more
  </ScrollTextWrapper>
)

const ScrollTextWrapper = styled.div`
  color: ${({ color }) => color};
  text-align: center;
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
  text-decoration: underline;
`

export default ScrollText;
