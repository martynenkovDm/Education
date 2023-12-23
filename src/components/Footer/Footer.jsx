import PropTypes from 'prop-types';
import { SectionWrap, Text } from './Footer.styled';

export const Footer = ({ text }) => {
  return (
    <SectionWrap>
      <Text>{text}</Text>
    </SectionWrap>
  );
};
Footer.propTypes = {
  text: PropTypes.string.isRequired,
};
