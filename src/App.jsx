import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';

const App = () => {
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      console.log(res);
    });
  };
  return <div className="App">Hey World</div>;
};

export default App;
