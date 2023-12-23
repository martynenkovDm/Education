import PropTypes from 'prop-types';
import { SectionWrap, Text } from './FirstSection.styled';

export const FirstSection = ({ text }) => {
  return (
    <SectionWrap>
      <Text>{text}</Text>
    </SectionWrap>
  );
};
FirstSection.propTypes = {
  text: PropTypes.string.isRequired,
};
