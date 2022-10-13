import { GlobalStyle } from './global-style';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './components';
import { Hero, Search, Pricing, Badges } from './pages';

/* TODO:  Fix booking bug */
/** FIXME: */
const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <Search />
      <Badges />
      <Pricing />
    </>
  );
};

export default App;
