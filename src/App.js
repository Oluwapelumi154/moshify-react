import { GlobalStyle } from './global-style';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './components';
import { Hero, Search, Pricing } from './pages';

/* TODO:  Fix booking bug */
/** FIXME: */
const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <Search />
      <Pricing />
    </>
  );
};

export default App;
