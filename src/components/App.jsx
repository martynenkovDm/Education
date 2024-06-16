// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { FirstSection } from './FirstSection/FirstSection';
import { SecondSection } from './SecondSection/SecondSection';
import { ThirdSection } from './ThirdSection/ThirdSection';
import { Footer } from './Footer/Footer';
export const App = () => {
  return (
    <Layout>
      <Header />
      <FirstSection text="Ресурс довідкових матеріалів до навчaльної програми 11 класу з Інформатики (Рівень стандарту)" />
      <SecondSection
        title="Про сайт"
        text="Цей сайт створено для поглиблення знань учнів 11 класу. Тут зібрані посилання на додатковий матеріал до навчальної програми, а також є посилання на тести які ви можете поройти. Вчителі можуть скористатись посиланнями для збагачення або ж фільтрації інформації яку розкривають у темах. З моєї точки зору всі ці матеріали корисні, деякі будуть як поглиблення інформації яка наявна у темах, або ж як додаткова."
      />
      {<ThirdSection title="Матеріал" />}
      <Footer text="Сайт створив студент РДГУ Мартиненков Д.О КН-4 заочної форми навчання. Під керівництвом доц.Петренко С.В " />
      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
};
