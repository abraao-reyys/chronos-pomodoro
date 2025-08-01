import { Trash } from 'lucide-react';
import { SquareButton } from '../../components/SquareButton';
import { MainTemplate } from '../../templates/MainTemplate';
import { useTaskcontext } from '../../contexts/TaskContext/useTaskContext';

import styles from './styles.module.css';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { getTaskType } from '../../utils/getTaskType';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { useState } from 'react';

export function History() {
  const { state } = useTaskcontext();
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';
    setSortTasksOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  return (
    <MainTemplate>
      <div className={styles['main__content']}>
        <div className={styles['heading']}>
          <h1>Histórico</h1>
          <span className={styles['trash-button']}>
            <SquareButton
              aria-label='Apagar todo o histórico'
              title='Apagar todo o histórico'
            >
              <Trash color='var(--gray-200)' size={20} />
            </SquareButton>
          </span>
        </div>
        <div className={styles['wrapper']}>
          <div className={styles['responsive-table']}>
            <table>
              <thead>
                <tr>
                  <th
                    onClick={() => handleSortTasks({ field: 'name' })}
                    className={styles['th-sort']}
                  >
                    Tarefa ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'duration' })}
                    className={styles['th-sort']}
                  >
                    Duração ↕
                  </th>
                  <th
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                    className={styles['th-sort']}
                  >
                    Data ↕
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortTasksOptions.tasks.map(task => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{getTaskType(task)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}
