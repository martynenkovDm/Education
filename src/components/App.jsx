import 'react-toastify/dist/ReactToastify.css';

// components
import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Materials from './materials';
import Test from './test';
import Curs from './curs';
import Login from './login';
import Register from './register';
import { useAuth } from './hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useEffect, lazy } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route index element={<Home />} />
      <Route path="/materials" element={<Materials />}></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/curs" element={<Curs />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>

    // <Layout>
    //   <Header />
    //   <FirstSection text="Ресурс довідкових матеріалів до навчaльної програми 11 класу з Інформатики (Рівень стандарту)" />
    //   <SecondSection
    //     title="Про сайт"
    //     text="Цей сайт створено для поглиблення знань учнів 11 класу. Тут зібрані посилання на додатковий матеріал до навчальної програми, а також є посилання на тести які ви можете поройти. Вчителі можуть скористатись посиланнями для збагачення або ж фільтрації інформації яку розкривають у темах. З моєї точки зору всі ці матеріали корисні, деякі будуть як поглиблення інформації яка наявна у темах, або ж як додаткова."
    //   />
    //   {<ThirdSection title="Матеріал" />}
    //   <Footer text="Сайт створив студент РДГУ Мартиненков Д.О КН-4 заочної форми навчання. Під керівництвом доц.Петренко С.В " />
    //   <ToastContainer />
    //   <GlobalStyle />
    // </Layout>
  );
};
