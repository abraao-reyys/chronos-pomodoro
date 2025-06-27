import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

export function App() {
  console.log('oi');

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
