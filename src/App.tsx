import './styles/theme.css';
import './styles/global.css';

import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';

export function App() {
  return (
    <div className='app'>
      <Heading />
      <main className='main container'>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
