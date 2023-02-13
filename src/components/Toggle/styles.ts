import styled from 'styled-components';

export const Container = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 2.8em;
  height: 1.5rem;

  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: .5s;
    border-radius: 30px;

    &:before {
      position: absolute;
      content: "";
      height: 1em;
      width: 1em;
      border-radius: 50%;
      left: 10%;
      bottom: 15%;
      box-shadow: inset 7px -2px 0px 0px #ffffff;
      background: var(--background);
      transition: .25s;
    }
  }

  > input:checked + span {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  > input:checked + span:before {
    transform: translateX(120%);
    box-shadow: inset 15px -4px 0px 15px #ffffff;
  }
`;
