import styled from 'styled-components';

export const LinkWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-width: 525px;
  justify-content: end;
  gap: 20px;
  align-items: center;
  padding-right: 20px;
`;

export const Label = styled.p`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fonts.monospace};
  font-size: 18px;
  letter-spacing: 0.02em;
  min-width: 125px;
  padding-left: 20px;
  text-shadow: none;
  color: black;
`;

export const Button = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 15px;
`;
