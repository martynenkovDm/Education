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
} from './TestsStyled';

const tests = [
  {
    Name: 'Тест 1. Моделі і моделювання. Аналіз та візуалізація даних.',
    src: 'https://naurok.com.ua/test/10-klas-modeli-i-modelyuvannya-analiz-ta-vizualizaciya-danih-693997.html',
    id: 1,
  },
  {
    Name: 'Тест 2. Бази даних. Системи керування базами даних',
    src: 'https://naurok.com.ua/test/bazi-danih-sistemi-keruvannya-bazami-danih-788206.html',
    id: 2,
  },
  {
    Name: 'Тест 3. Бази даних. Системи керування базами даних',
    src: 'https://naurok.com.ua/test/bazi-danih-sistemi-keruvannya-bazami-danih-788206.html',
    id: 3,
  },
  {
    Name: 'Тест 4. Підсумковий тест. Модуль "Веб - технології"',
    src: 'https://naurok.com.ua/test/pidsumkoviy-test-modul-veb---tehnologi-2951220.html',
    id: 4,
  },
  {
    Name: 'Тест 5. Основи веб-дизайну',
    src: 'https://naurok.com.ua/test/osnovi-veb-dizaynu-10-klas-2951221.html',
    id: 5,
  },
  {
    Name: 'Тест 6. Колір. Теорія кольору. Колористика. Вибірковий модуль "Графічний дизайн"',
    src: 'https://naurok.com.ua/test/kolir-teoriya-koloru-koloristika-vibirkoviy-modul-grafichniy-dizayn-2951270.html',
    id: 6,
  },
  {
    Name: 'Тест 7. Підсумковий тест з теми "документи та документообіг"',
    src: 'https://naurok.com.ua/test/pidsumkoviy-test-z-temi-dokumentoobig-simeyne-navchannya-2951227.html',
    id: 7,
  },
  {
    Name: 'Тест 8. Тематичне оцінювання з теми: «Технічні та програмні засоби обробки документів та інформації»',
    src: 'https://naurok.com.ua/test/tematichne-ocinyuvannya-z-temi-dokumenti-ta-dokumentoobig-tehnichni-ta-programni-zasobi-obrobki-dokumentiv-ta-informaci-2951229.html',
    id: 8,
  },
  {
    Name: 'Тест 9. Контрольна робота з теми "Інформаційна безпека"',
    src: 'https://naurok.com.ua/test/kontrolna-robota-z-temi-informaciyna-bezpeka-2953667.html',
    id: 9,
  },
  {
    Name: 'Тест 10. Тривимірна анімація',
    src: 'https://naurok.com.ua/test/3d-grafika-animaciya-blender-2951301.html',
    id: 10,
  },
];

export const Tests = () => {
  const { isLoggedIn } = useAuth();
  const [searchItem, setSearchItem] = useState('');
  const [filteredTests, setFilteredTests] = useState(tests);

  const handleInputChange = e => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = tests.filter(test =>
      test.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredTests(filteredItems);
  };

  return (
    <SectionWrap>
      <Container1>
        <InputCont>
          <TitleWrap>
            <Title>Тести</Title>
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
          {filteredTests.map(material => (
            <MaterialsItem key={material.id}>
              <MyLink href={material.src} target="_blank">
                {material.Name}
              </MyLink>
            </MaterialsItem>
          ))}
        </MaterialList>
      </Container1>
    </SectionWrap>
  );
};
