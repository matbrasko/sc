import Home from './layouts/home';
import Type from './layouts/type';
import About from './layouts/about';
import EventLayout from './layouts/event';
import Header from './components/header';
import Footer from './components/footer';

import eventTypes from './event-types.json';
import events from './events.json';

import { slugify } from './utils/slugify';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const staticPath = '/sc/';
  events.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <BrowserRouter basename={staticPath}>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} exact />
        {eventTypes.map((type) => (
          <Route path={`/${slugify(type.name)}`} component={Type} exact />
        ))}
        <Route path='/:category/:name' component={EventLayout} />
      </Switch>
      <Footer staticPath={staticPath} />
    </BrowserRouter>
  );
}
export default App;
