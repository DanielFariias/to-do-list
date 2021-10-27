import styled from 'styled-components';

interface ContainerProps {
  done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (`
  background-color: #20212c;

  display: flex;
  align-items: center;
  
  border-radius: 10px;
  margin: 10px;
  padding: 10px;

  > input {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  > label {
    color: #CCC;
    text-decoration: ${done ? "line-through" : 'initial'}
  }
`))