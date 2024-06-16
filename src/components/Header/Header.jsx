import {
  SectionWrapper,
  HomeWrap,
  LinkWrap,
  Link,
  Svg,
  Use,
  Link1,
} from './Header.styled';

export const Header = () => {
  return (
    <SectionWrapper>
      <HomeWrap>
        <Link href="">
          <Svg id="icon-home" viewBox="0 0 32 32">
            <Use d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></Use>
          </Svg>
          Education
        </Link>
      </HomeWrap>
      <LinkWrap>
        <Link1 href="/src/components/App.jsx">Матеріли</Link1>
        <Link1 href="/src/components/App1.jsx">Тести</Link1>
        <Link1 href="#">Блоги</Link1>
        <Link1 href="#">Курси</Link1>
      </LinkWrap>
      <LinkWrap>
        <Link href="" target="_blank">
          Login
        </Link>
      </LinkWrap>
    </SectionWrapper>
  );
};
