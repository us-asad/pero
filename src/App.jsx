import { Footer, Header } from 'components';
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { Blogs, Home, Product, Products, TermsOfUse, TopProducts } from 'pages'
import About from 'pages/About';
import { initReactI18next } from 'react-i18next';
import { Routes, Route } from "react-router-dom";
import HttpApi from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['ru', 'uz', 'en'],
    fallbackLng: "ru",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

export default function App() {
  return (
    <div className='font-rubik'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/top-products" element={<TopProducts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}
