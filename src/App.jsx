import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';
import Home from './pages/home';
import DetailPage from './pages/details';
import SearchResult from './pages/searchResult';
import ExplorePage from './pages/explore';
import PageNotFound from './pages/404';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + 'original',
        poster: res.images.secure_base_url + 'original',
        profile: res.images.secure_base_url + 'original',
      };
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<DetailPage />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<ExplorePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
