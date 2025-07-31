import { Trash } from 'lucide-react';
import { SquareButton } from '../../components/SquareButton';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';

export function History() {
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
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 20 }).map((_, index) => {
                  return (
                    <tr key={index}>
                      <td>Estudar</td>
                      <td>25min</td>
                      <td>20/04/2025 08:00</td>
                      <td>Completa</td>
                      <td>Foco</td>
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
