import {
  SectionWrapper,
  HomeWrap,
  LinkWrap,
  Link,
  Svg,
  Use,
} from './Header.styled';

export const Header = () => {
  return (
    <SectionWrapper>
      <HomeWrap>
        <Link href="">
          <Svg id="icon-home" viewBox="0 0 32 32">
            <Use d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></Use>
          </Svg>
          Головна сторінка
        </Link>
      </HomeWrap>
      <LinkWrap>
        <Link
          href="https://mon.gov.ua/ua/osvita/zagalna-serednya-osvita/navchalni-programi/navchalni-programi-dlya-10-11-klasiv"
          target="_blank"
        >
          МОН
        </Link>
        <Link href="https://www.rshu.edu.ua/" target="_blank">
          РДГУ
        </Link>
      </LinkWrap>
    </SectionWrapper>
  );
};
