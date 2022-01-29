import styled from 'styled-components';

export const TextAnimationStyle = styled.div`
  display: inline;
  font-family: var(--font-title);
  ${
    '' /* @property --percent {
    syntax: '<number>';
    initial-value: 0;
    inherits: false;
  }
  @property --temp {
    syntax: '<number>';
    initial-value: 0;
    inherits: false;
  }
  @property --v1 {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
  }
  @property --v2 {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
  }
  & {
    font: 800 40px monospace;
    padding: 2rem;
    transition: --percent 5s;
    --temp: var(--percent);
    --v1: max(var(--temp) - 0.5, 0);
    --v2: max((var(--temp) - var(--v1)) - 0.5, 0);
    counter-reset: v1 var(--v1) v2 var(--v2);
  }

  &::before {
    content: counter(v1) '.' counter(v2, decimal-leading-zero);
  } */
  }
`;
