import styled from 'styled-components';

export const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  border-radius: 20px;
  position: relative;
  width: 90%;
  margin-top: 91px;
  min-height: 520px;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url('https://image.cnbcfm.com/api/v1/image/107032274-1647540069295-gettyimages-1084167640-2018_10_13-n1_office_0312.jpeg?v=1647540545');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: -1px -1px 1px -1px, 1px 1px 1px #babecc;
`;

export const Text = styled.h1`
  text-align: center;
  padding-bottom: 30px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.l};
  font-family: ${props => props.theme.fonts.monospace};
  font-weight: ${props => props.theme.fontWeights.bold};
  max-width: 50%;
  transition: 2000ms;
`;
