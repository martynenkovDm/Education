import PropTypes from 'prop-types';
import {
  SectionWrap,
  SubTitle,
  Title,
  Text,
  Container1,
  ReviewsList,
  ReviewsItem,
  ReviewsImg,
} from './ThirdSection.styled';

export const ThirdSection = ({ title }) => {
  return (
    <SectionWrap>
      <Container1>
        <Title> Відгуки</Title>
        <ReviewsList>
          <ReviewsItem>
            <ReviewsImg
              src="/src/img/victoria-dobrzhanska-x1.webp"
              alt="victoria-dobrzhanska"
            />
            <SubTitle>Вікторія Доброжанська</SubTitle>
            <Text>
              I love this chocolate bar. Perfect combination of light crispy
              wafer, covered in a thin layer chocolate.
            </Text>
          </ReviewsItem>
          <ReviewsItem>
            <ReviewsImg src="img/nazar-babenko-x1.webp" alt="nazar-babenko" />
            <SubTitle>Назар Бабенко</SubTitle>
            <Text>
              I love this chocolate bar. Perfect combination of light crispy
              wafer, covered in a thin layer chocolate.
            </Text>
          </ReviewsItem>
          <ReviewsItem>
            <ReviewsImg
              src="/src/img/olena-kampusch-x1.webp"
              alt="olena-kampusch"
            />
            <SubTitle>Олена Кампуш</SubTitle>
            <Text>
              I love this chocolate bar. Perfect combination of light crispy
              wafer, covered in a thin layer chocolate.
            </Text>
          </ReviewsItem>
        </ReviewsList>
      </Container1>
    </SectionWrap>
    // <SectionWrap>
    //   <Title>{title}</Title>
    //   <Btn type="button" onClick={() => onShowList(1)}>
    //     <Text>{'БАЗОВИЙ МОДУЛЬ'}</Text>
    //   </Btn>
    //   <List className="hidden" id="1">
    //     <Items>
    //       <Link
    //         href="https://mind.ua/publications/20254126-shtuchnij-intelekt-dlya-biznesu-yaki-zavdannya-zdaten-virishuvati-ta-v-yakih-galuzyah-dopomagae"
    //         target="_blank"
    //       >
    //         Штучний інтелект для бізнесу: які завдання здатен вирішувати та в
    //         яких галузях допомагає
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://avada-media.ua/ua/services/ispolzovaniye-iskusstvennogo-intellekta-v-biznese/"
    //         target="_blank"
    //       >
    //         ВИКОРИСТАННЯ ШТУЧНОГО ІНТЕЛЕКТУ У БІЗНЕСІ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://jurliga.ligazakon.net/news/201367_personaln-dan-vikoristannya-zakhist--vdpovdalnst---shcho-potrbno-znati"
    //         target="_blank"
    //       >
    //         Персональні дані: використання, захист і відповідальність - що
    //         потрібно знати
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://inproject.org/vplyv-soczialnuh-merezh-na-suspilstvo-i-biznes/"
    //         target="_blank"
    //       >
    //         ЯК СОЦІАЛЬНІ МЕРЕЖІ ВПЛИВАЮТЬ НА СУСПІЛЬСТВО ТА БІЗНЕС
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://ela.kpi.ua/bitstream/123456789/48860/1/Kompiuterne_modeliuvannia.pdf"
    //         target="_blank"
    //       >
    //         КОМП’ЮТЕРНЕ МОДЕЛЮВАННЯ: СИСТЕМИ І ПРОЦЕСИ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://www.it.ua/knowledge-base/technology-innovation/big-data-bolshie-dannye"
    //         target="_blank"
    //       >
    //         Сучасні методи аналізу великих обсягів даних (Big Data).
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://aiconference.com.ua/uk/news/mashinnoe-obuchenie-i-analiz-bolshih-dannih-chto-eto-kak-rabotaet-i-dlya-chego-nugno-biznesu-98145"
    //         target="_blank"
    //       >
    //         МАШИННЕ НАВЧАННЯ ТА АНАЛІЗ ВЕЛИКИХ ДАНИХ: ЩО ЦЕ, ЯК ПРАЦЮЄ І ДЛЯ
    //         ЧОГО ПОТРІБНО БІЗНЕСУ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://klona.ua/uk/blog/artificial-intelligence-uk/bazy-danyh-ponyattya-subd"
    //         target="_blank"
    //       >
    //         БАЗИ ДАНИХ. ПОНЯТТЯ СУБД
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link href="https://dou.ua/forums/topic/43820/" target="_blank">
    //         Хмарні бази даних
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://edin.ua/shho-take-xmarni-texnologi%D1%97-i-navishho-voni-potribni/"
    //         target="_blank"
    //       >
    //         Що таке хмарні технології? Переваги та недоліки хмарних сервісів
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://osvita.ua/vnz/reports/management/15293/"
    //         target="_blank"
    //       >
    //         Бази даних: сутність та джерела формування.
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link href="https://umity.in.ua/topic/?id=778" target="_blank">
    //         Мультимедійні та гіпертекстові документи
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://naurok.com.ua/test/informaciyni-tehnologi-v-suspilstvi-12231.html"
    //         target="_blank"
    //       >
    //         Тест1
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://naurok.com.ua/test/10-klas-modeli-i-modelyuvannya-analiz-ta-vizualizaciya-danih-693997.html"
    //         target="_blank"
    //       >
    //         Тест2
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://naurok.com.ua/test/bazi-danih-sistemi-keruvannya-bazami-danih-788206.html"
    //         target="_blank"
    //       >
    //         Тест3
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://naurok.com.ua/test/kontrolna-robota-na-temu-multimediyni-ta-gipertekstovi-dokumenti-194655.html"
    //         target="_blank"
    //       >
    //         Тест4
    //       </Link>
    //     </Items>
    //   </List>
    //   <Btn type="button" onClick={() => onShowList(2)}>
    //     <Text>{'Графічний дизайн'}</Text>
    //   </Btn>
    //   <List className="hidden" id="2">
    //     <Items>
    //       <Link
    //         href="http://www.aphn-journal.in.ua/archive/44_2021/part_2/2.pdf"
    //         target="_blank"
    //       >
    //         РОЗВИТОК СУЧАСНИХ ТЕНДЕНЦІЙ ГРАФІЧНОГО ДИЗАЙНУ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://ela.kpi.ua/bitstream/123456789/42679/3/Avramenko_bakalavr.pdf"
    //         target="_blank"
    //       >
    //         Сучасні технології дизайну в рекламі
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://vand.com.ua/design/psykholohiya-dyzaynu-yak-vona-vplyvaye-na-povedinku-spozhyvachiv/"
    //         target="_blank"
    //       >
    //         Психологія дизайну: Як вона впливає на поведінку споживачів
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://sites.google.com/view/new-site-for-lesson1011/%D0%B3%D1%80%D0%B0%D1%84%D1%96%D1%87%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD"
    //         target="_blank"
    //       >
    //         Графічний дизайн як засіб візуальної комунікації
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://pns.hneu.edu.ua/pluginfile.php/107532/mod_resource/content/5/%D0%9E%D0%9A%D0%94.%20%D0%9F%D0%BE%D1%82%D1%80%D0%B0%D1%88%D0%BA%D0%BE%D0%B2%D0%B0.%20%D0%9F%D0%BE%D1%81%D1%96%D0%B1%D0%BD%D0%B8%D0%BA.pdf"
    //         target="_blank"
    //       >
    //         ОСНОВИ КОМПОЗИЦІЇ ТА ДИЗАЙНУ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://elib.lntu.edu.ua/sites/default/files/elib_upload/%D1%84%D0%B5%D0%B4%D1%96%D0%BA%202/page9.html"
    //         target="_blank"
    //       >
    //         Основні відомості про векторну графіку
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://winsoft.com.ua/windows/grafika/grafichni-redaktori"
    //         target="_blank"
    //       >
    //         25 графічних редакторів для комп'ютера
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link href="https://foxminded.ua/user-interface-tse/" target="_blank">
    //         User interface це не просто прикраса продукту
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://eds.ua/blog/article/grafichny-dyzayner-i-poligrafiya"
    //         target="_blank"
    //       >
    //         ГРАФІЧНИЙ ДИЗАЙНЕР ТА ПОЛІГРАФІЯ. ЩО ПОТРІБНО І ЯК ПРАЦЮЄ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://blog.depositphotos.com/ua/pravyla-typografiky.html"
    //         target="_blank"
    //       >
    //         Правила типографіки, які необхідно знати новачкам
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://www.creativosonline.org/uk/la-importancia-de-la-tipografia-en-el-diseno-recursos-diseno.html"
    //         target="_blank"
    //       >
    //         Значення типографіки в дизайні
    //       </Link>
    //     </Items>
    //   </List>
    //   <Btn type="button" onClick={() => onShowList(3)}>
    //     <Text>{'Комп’ютерна анімація'}</Text>
    //   </Btn>
    //   <List className="hidden" id="3">
    //     <Items>
    //       <Link
    //         href="https://dspace.nau.edu.ua/bitstream/NAU/57317/2/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC_%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%B8%20%D0%BA%D0%BE%D0%BC%D0%BF%27%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D1%96%CC%88%20%D0%B0%D0%BD%D1%96%D0%BC%D0%B0%D1%86%D1%96%D1%96%CC%88.pdf"
    //         target="_blank"
    //       >
    //         ОСНОВИ КОМП’ЮТЕРНОЇ АНІМАЦІЇ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://kotyash-vadim.jimdofree.com/%D1%96%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0-%D0%BF%D0%BE-19-1-2-9-%D0%B4%D0%BE-19-2-9/%D0%B0%D0%BD%D1%96%D0%BC%D0%B0%D1%86%D1%96%D1%8F-%D0%B2%D0%B8%D0%B4%D0%B8-%D0%B0%D0%BD%D1%96%D0%BC%D0%B0%D1%86%D1%96%D1%97-%D0%BA%D0%BE%D0%BC%D0%BF-%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%B0-%D0%B0%D0%BD%D1%96%D0%BC%D0%B0%D1%86%D1%96%D1%8F-%D0%BF%D0%BE%D1%80%D1%96%D0%B2%D0%BD%D1%8F%D0%BD%D0%BD%D1%8F-%D1%80%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D1%97-%D1%82%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%BE%D1%97-%D0%B0%D0%BD%D1%96%D0%BC%D0%B0%D1%86%D1%96%D1%97-%D1%82%D1%80%D0%B8%D0%B2%D0%B8%D0%BC%D1%96%D1%80%D0%BD%D0%B5-%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-%D1%96-%D0%B0%D0%BD%D1%96%D0%BC%D0%B0%D1%86%D1%96%D1%8F/"
    //         target="_blank"
    //       >
    //         Анімація. Види анімації. Комп'ютерна анімація.
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://sites.google.com/view/msfatjanova/%D0%B7%D0%B0%D0%B2%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F/%D1%82%D0%B5%D0%BC%D0%B0-12-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0-%D0%B0%D0%BD%D1%96%D0%BC%D0%B0%D1%86%D1%96%D1%8F"
    //         target="_blank"
    //       >
    //         ВЕКТОРНА АНІМАЦІЯ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="http://4ua.co.ua/marketing/xa3bc68b4d43a89421206c36_0.html"
    //         target="_blank"
    //       >
    //         Комп'ютерна графіка в рекламній діяльності
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="http://repository.hneu.edu.ua/bitstream/123456789/8294/1/%D0%9A%D0%9E%D0%9C%D0%9F%27%D0%AE%D0%A2%D0%95%D0%A0%D0%9D%D0%90%20%D0%90%D0%9D%D0%86%D0%9C%D0%90%D0%A6%D0%86%D0%AF.pdf"
    //         target="_blank"
    //       >
    //         КОМП'ЮТЕРНА АНІМАЦІЯ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://coi.ua/blog/DesignCo/web-animation-enhancing-interaction-and-improving-user-experience"
    //         target="_blank"
    //       >
    //         Веб-анімація
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://cloud.itstep.org/blog_3/top-8-programs-for-creating-animation?gclid=CjwKCAiAp5qsBhAPEiwAP0qeJsa4N3R0ifhceIPKpRX9Qc2o3aDpaSVvFeGJIoggXCyuQx_hVjrBTBoCxdkQAvD_BwE"
    //         target="_blank"
    //       >
    //         Топ-8 програм для створення анімації
    //       </Link>
    //     </Items>
    //   </List>
    //   <Btn type="button" onClick={() => onShowList(4)}>
    //     <Text>{'Математичні основи інформатики'}</Text>
    //   </Btn>
    //   <List className="hidden" id="4">
    //     <Items>
    //       <Link
    //         href="https://ela.kpi.ua/bitstream/123456789/21581/1/%D0%9C%D0%B0%D1%82_%D0%BB%D0%BE%D0%B3%D1%96%D0%BA%D0%B0_%D0%A2_%D0%B0%D0%BB%D0%B3_%D0%BB%D0%B5%D0%BA%D1%86%D1%96%D1%97_%D0%86%D0%9F%D0%A1%D0%90.pdf"
    //         target="_blank"
    //       >
    //         МАТЕМАТИЧНА ЛОГІКА ТА ТЕОРІЯ АЛГОРИТМІВ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://ela.kpi.ua/bitstream/123456789/35854/1/Teoriia_hrafiv.pdf"
    //         target="_blank"
    //       >
    //         Теорія графів
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://eprints.kname.edu.ua/56462/1/2020%2034%D0%9D%20%D0%BF%D0%B5%D1%87%20%D0%9C%D0%90%D0%A8%D0%98%D0%9D%D0%90%20%D0%A2%D1%8E%D1%80%D1%96%D0%BD%D0%B3%D0%B0%20%20%D0%BF%D0%BE%D1%81%20%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B0.pdf"
    //         target="_blank"
    //       >
    //         ДОСЛІДЖЕННЯ РОБОТИ МАШИНИ ТЮРІНГА
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://repository.kpi.kharkov.ua/server/api/core/bitstreams/5847efdd-6ff5-4f7f-9de8-6f6555ad4cc0/content"
    //         target="_blank"
    //       >
    //         ФОРМАЛЬНІ МОВИ, ГРАМАТИКИ ТА АВТОМАТИ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://buki.com.ua/news/teoriya-imovirnosti/"
    //         target="_blank"
    //       >
    //         ЩО ТАКЕ ТЕОРІЯ ЙМОВІРНОСТІ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="http://vnz-mpu.com.ua/images/pdf/%D0%9B%D0%B5%D0%BA%D1%86%D1%96%D1%97_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0_%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8/%D0%A2%D0%B5%D0%BE%D1%80%D1%96%D1%8F_%D0%B9%D0%BC%D0%BE%D0%B2%D1%96%D1%80%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9._%D0%9C%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D0%B0_%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0_%D1%82%D0%B0_%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D1%96_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B8_%D0%B2_%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%97/%D0%A2%D0%B5%D0%BC%D0%B0__1.pdf"
    //         target="_blank"
    //       >
    //         ТЕОРІЯ ЙМОВІРНОСТІ В ЖИТТІ ЛЮДИНИ
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link
    //         href="https://ela.kpi.ua/bitstream/123456789/27880/1/OTIK_konsp._Romaniuk_Savchenko.pdf"
    //         target="_blank"
    //       >
    //         ОСНОВИ ТЕОРІЇ ІНФОРМАЦІЇ ТА КОДУВАННЯ
    //       </Link>
    //     </Items>
    //   </List>
    //   {/*} <Btn type="button" onClick={() => onShowList(5)}>
    //     <Text>{'fdsfsdfsdfsdff'}</Text>
    //   </Btn>
    //   <List className="hidden" id="5">
    //     <Items>
    //       <Link href="" target="_blank">
    //         11111111111111111
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link href="" target="_blank">
    //         11111111111111111
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link href="" target="_blank">
    //         11111111111111111
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link href="" target="_blank">
    //         11111111111111111
    //       </Link>
    //     </Items>
    //     <Items>
    //       <Link href="" target="_blank">
    //         11111111111111111
    //       </Link>
    //     </Items>
    //   </List> */}
    // </SectionWrap>
  );
};

ThirdSection.propTypes = {
  title: PropTypes.string.isRequired,
};
