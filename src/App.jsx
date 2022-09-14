import { Footer, Header } from 'components';
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { Blog, Blogs, Home, Product, Products, TermsOfUse, TopProducts, About } from 'pages';
import { initReactI18next } from 'react-i18next';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import HttpApi from 'i18next-http-backend';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['ru', 'uz', 'en'],
    fallbackLng: 'ru',
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

export default function App() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
      });
    } else {
      navigate(pathname + hash)
    }
  }, [pathname, hash, navigate]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className='font-rubik'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/top-products" element={<TopProducts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}
