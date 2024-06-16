import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
  width: 320px;
  min-height: calc(100vh - 56px);
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
  color: black;
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
`;
export const Button = styled.button`
  margin-top: 20px;
  width: 150px;
  border-radius: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
