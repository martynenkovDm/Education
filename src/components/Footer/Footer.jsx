import PropTypes from 'prop-types';
import { SectionWrap, Text, Link } from './Footer.styled';

export const Footer = ({ text }) => {
  return (
    <SectionWrap>
      <Text>{text}</Text>
      <div>
        <Link href="https://www.rshu.edu.ua/" target="_blank">
          РДГУ
        </Link>
        <Link href="https://mon.gov.ua/" target="_blank">
          МОН
        </Link>
      </div>
    </SectionWrap>
  );
};
Footer.propTypes = {
  text: PropTypes.string.isRequired,
};
