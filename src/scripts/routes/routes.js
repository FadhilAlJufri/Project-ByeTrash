import homeWebsite from '../views/pages/home';
import aboutWebsite from '../views/pages/about';
import serviceWebsite from '../views/pages/service';

const routes = {
  '/': homeWebsite, // default pages
  '/homepage': homeWebsite,
  '/aboutpage': aboutWebsite,
  '/servicepage': serviceWebsite,
};

export default routes;
