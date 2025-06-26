import { Heading } from './components/Heading';

import { TimerIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('oi');

  return (
    <>
      <Heading>
        Olá, mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis
        voluptatum maiores ducimus molestiae tempora fuga adipisci soluta enim,
        velit quod a deleniti suscipit non nihil eaque. Quis, adipisci
        similique!
      </p>
    </>
  );
}
