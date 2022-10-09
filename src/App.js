import { GlobalStyle } from './global-style';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './components';

/* TODO:  Fix booking bug */
/** FIXME: */
const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
};

export default App;
