import { Trash } from 'lucide-react';
import { SquareButton } from '../../components/SquareButton';
import { MainTemplate } from '../../templates/MainTemplate';
import { useTaskcontext } from '../../contexts/TaskContext/useTaskContext';

import styles from './styles.module.css';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { getTaskType } from '../../utils/getTaskType';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { useEffect, useState } from 'react';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function History() {
  const { state, dispatch } = useTaskcontext();
  const hasTask = state.tasks.length > 0;

  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  useEffect(() => {
    setSortTasksOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

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

  function handleResetHistory() {
    if (!confirm('Tem certeza?')) return;

    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  return (
    <MainTemplate>
      <div className={styles['main__content']}>
        <div className={styles['heading']}>
          <h1>Histórico</h1>
          {!!hasTask && (
            <span className={styles['trash-button']}>
              <SquareButton
                aria-label='Apagar todo o histórico'
                title='Apagar todo o histórico'
                onClick={handleResetHistory}
              >
                <Trash color='var(--gray-200)' size={20} />
              </SquareButton>
            </span>
          )}
        </div>
        {!!hasTask && (
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
        )}
        {!hasTask && (
          <div>
            <strong>Ainda não existem tarefas criadas</strong>
          </div>
        )}
      </div>
    </MainTemplate>
  );
}
