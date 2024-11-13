import './styles/main.scss';
import { startTimer } from './modules/timer';
import { setupButtonHandlers } from './modules/buttonHandler';

document.addEventListener('DOMContentLoaded', () => {
  const timeCount = 30 * 1000; // 30 секунд

  const timerElement = document.querySelector('#timer') as HTMLElement;
  const offerButtonElement = document.querySelector(
    '#offer-button',
  ) as HTMLButtonElement;
  const selectButtons = document.querySelectorAll(
    '.select-button',
  ) as NodeListOf<HTMLButtonElement>;

  if (timerElement && offerButtonElement) {
    startTimer({ timerElement, offerButtonElement, duration: timeCount });
  }

  if (selectButtons) {
    setupButtonHandlers(selectButtons);
  }
});
