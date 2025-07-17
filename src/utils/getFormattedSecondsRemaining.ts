export function getFormattedSecondsRemaining(secondsRemaining: number) {
  const minutes = String(Math.floor(secondsRemaining / 60)).padStart(2, '0');
  const seconds = String(secondsRemaining % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
}
