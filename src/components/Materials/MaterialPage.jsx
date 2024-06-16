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
  Button,
  TitleWrap,
} from './MaterialPageStyled';

const materials = [
  {
    Name: 'Штучний інтелект для бізнесу: які завдання здатен вирішувати та в яких галузях допомагає',
    src: 'https://mind.ua/publications/20254126-shtuchnij-intelekt-dlya-biznesu-yaki-zavdannya-zdaten-virishuvati-ta-v-yakih-galuzyah-dopomagae',
    id: 1,
  },
  {
    Name: 'ВИКОРИСТАННЯ ШТУЧНОГО ІНТЕЛЕКТУ У БІЗНЕСІ',
    src: 'https://avada-media.ua/ua/services/ispolzovaniye-iskusstvennogo-intellekta-v-biznese/',
    id: 2,
  },
  {
    Name: 'Персональні дані: використання, захист і відповідальність - що потрібно знати',
    src: 'https://jurliga.ligazakon.net/news/201367_personaln-dan-vikoristannya-zakhist--vdpovdalnst---shcho-potrbno-znati',
    id: 3,
  },
  {
    Name: 'Бази даних: сутність та джерела формування.',
    src: 'https://osvita.ua/vnz/reports/management/15293/',
    id: 4,
  },
  {
    Name: 'Мультимедійні та гіпертекстові документи',
    src: 'https://umity.in.ua/topic/?id=778',
    id: 5,
  },
  {
    Name: 'Основні відомості про векторну графіку',
    src: 'https://elib.lntu.edu.ua/sites/default/files/elib_upload/%D1%84%D0%B5%D0%B4%D1%96%D0%BA%202/page9.html',
    id: 6,
  },
  {
    Name: '25 графічних редакторів для комп`ютера',
    src: 'https://winsoft.com.ua/windows/grafika/grafichni-redaktori',
    id: 7,
  },
  {
    Name: 'ТЕОРІЯ ЙМОВІРНОСТІ В ЖИТТІ ЛЮДИНИ',
    src: 'http://vnz-mpu.com.ua/images/pdf/%D0%9B%D0%B5%D0%BA%D1%86%D1%96%D1%97_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0_%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8/%D0%A2%D0%B5%D0%BE%D1%80%D1%96%D1%8F_%D0%B9%D0%BC%D0%BE%D0%B2%D1%96%D1%80%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9._%D0%9C%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D0%B0_%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0_%D1%82%D0%B0_%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D1%96_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B8_%D0%B2_%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%97/%D0%A2%D0%B5%D0%BC%D0%B0__1.pdf',
    id: 8,
  },
  {
    Name: 'ОСНОВИ ТЕОРІЇ ІНФОРМАЦІЇ ТА КОДУВАННЯ',
    src: 'https://ela.kpi.ua/bitstream/123456789/27880/1/OTIK_konsp._Romaniuk_Savchenko.pdf',
    id: 9,
  },
  {
    Name: 'МАТЕМАТИЧНА ЛОГІКА ТА ТЕОРІЯ АЛГОРИТМІВ',
    src: 'https://ela.kpi.ua/bitstream/123456789/21581/1/%D0%9C%D0%B0%D1%82_%D0%BB%D0%BE%D0%B3%D1%96%D0%BA%D0%B0_%D0%A2_%D0%B0%D0%BB%D0%B3_%D0%BB%D0%B5%D0%BA%D1%86%D1%96%D1%97_%D0%86%D0%9F%D0%A1%D0%90.pdf',
    id: 10,
  },
];

export const MaterialPage = () => {
  const { isLoggedIn } = useAuth();
  const [searchItem, setSearchItem] = useState('');
  const [filteredMaterials, setFilteredMaterials] = useState(materials);

  const handleInputChange = e => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = materials.filter(material =>
      material.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMaterials(filteredItems);
  };

  return (
    <SectionWrap>
      <Container1>
        <InputCont>
          <TitleWrap>
            <Title>Матеріали</Title>
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
          {filteredMaterials.map(material => (
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
