import PropTypes from 'prop-types';
import { SectionWrap, Title, Text } from './SecondSection.styled';

export const SecondSection = ({ title, text }) => {
  return (
    <SectionWrap>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </SectionWrap>
  );
};
SecondSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
