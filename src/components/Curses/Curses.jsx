import { useAuth } from '../hooks';
import { useState } from 'react';
import {
  SectionWrap,
  Title,
  Container1,
  TextField,
  InputCont,
  MaterialList,
  MaterialsItem,
  ListCont,
  MyLink,
  TitleWrap,
  Button,
} from './CursesStyled';

const curse = [
  {
    Name: 'Курс 1. Основи програмування',
    src: 'https://prometheus.org.ua/course/course-v1:KPI+Programming101+2015_T1',
    id: 1,
  },
  {
    Name: 'Курс 2. Критичне мислення для освітян',
    src: 'https://prometheus.org.ua/course/course-v1:CZ+CTFT101+2017_T3',
    id: 2,
  },
  {
    Name: 'Курс 3. Основи програмування з HTML, CSS та JavaScript',
    src: 'https://prometheus.org.ua/course/course-v1:DukeUniversity+PFW101+2023_T3',
    id: 3,
  },
  {
    Name: 'Курс 4. Практичні аспекти вивчення програмування у шкільному курсі інформатики',
    src: 'https://conf.ipo.kiev.ua/training/prakticni-aspekti-vivcenna-programuvanna-u-5740?inpoint=ippo.com.ua',
    id: 4,
  },
  {
    Name: 'Курс 5. Ефективні методи запам’ятовування. Розвиток уваги та зосередженості учнів. Інформатика',
    src: 'https://conf.ipo.kiev.ua/training/efektivni-metodi-zapamatovuvanna-rozvitok-uvagi-3600?cat=LiDQhtC90YTQvtGA0LzQsNGC0LjQutCw&inpoint=ippo.com.ua',
    id: 5,
  },
  {
    Name: 'Курс 6. Візуалізація навчального контенту за допомогою майндмеппінгу або як навчати цікаво та захоплююче.',
    src: 'https://conf.ipo.kiev.ua/training/vizualizacia-navcalnogo-kontentu-za-dopomogou-2860?cat=LiDQhtC90YTQvtGA0LzQsNGC0LjQutCw&inpoint=ippo.com.ua',
    id: 6,
  },
  {
    Name: 'Курс 7. Практика захоплюючого уроку. Ігри та вправи для розвитку в учнів Soft Skills.',
    src: 'https://pedrada.ippo.com.ua/training/praktika-zahopluucogo-uroku-igri-ta-3670?cat=LiDQhtC90YTQvtGA0LzQsNGC0LjQutCw&inpoint=ippo.com.ua',
    id: 7,
  },
  {
    Name: 'Курс 8. Візуалізація навчального матеріалу. Практичні поради для дистанційного навчання.',
    src: 'https://naurok.com.ua/test/tematichne-ocinyuvannya-z-temi-dokumenti-ta-dokumentoobig-tehnichni-ta-programni-zasobi-obrobki-dokumentiv-ta-informaci-2951229.html',
    id: 8,
  },
  {
    Name: 'Курс 9. Зручні та інтерактивні сервіси для уроків офлайн та онлайн.',
    src: 'https://pedrada.ippo.com.ua/training/zrucni-ta-interaktivni-servisi-dla-3110?cat=LiDQhtC90YTQvtGA0LzQsNGC0LjQutCw&inpoint=ippo.com.ua',
    id: 9,
  },
];

export const Curses = () => {
  const { isLoggedIn } = useAuth();
  const [searchItem, setSearchItem] = useState('');
  const [filteredCurses, setFilteredCurses] = useState(curse);

  const handleInputChange = e => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = curse.filter(curs =>
      curs.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCurses(filteredItems);
  };

  return (
    <SectionWrap>
      <Container1>
        <InputCont>
          <TitleWrap>
            <Title>Курси</Title>
            {isLoggedIn ? <Button>Додати</Button> : <div></div>}
          </TitleWrap>
          <TextField
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Пошук"
          />
        </InputCont>
        <ListCont></ListCont>
        <MaterialList>
          {filteredCurses.map(curs => (
            <MaterialsItem key={curs.id}>
              <MyLink href={curs.src} target="_blank">
                {curs.Name}
              </MyLink>
            </MaterialsItem>
          ))}
        </MaterialList>
      </Container1>
    </SectionWrap>
  );
};
