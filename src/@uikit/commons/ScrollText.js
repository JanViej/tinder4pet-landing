import styled from 'styled-components';
import { useTranslation } from 'react-i18next'

const ScrollText = ({ color = '#000' }) => {
  const { t } = useTranslation()
  return (
    <ScrollTextWrapper color={color}>
      {t('text.scrollMore')}
    </ScrollTextWrapper>
)}

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
