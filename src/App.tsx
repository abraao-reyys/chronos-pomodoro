import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

export function App() {
  return (
    <div className='app'>
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
    </div>
  );
}
