import { useContext } from 'react';
import { TaskContext } from './TaskContext';

export function useTaskcontext() {
  return useContext(TaskContext);
}
