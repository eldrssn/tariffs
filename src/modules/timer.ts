type StartTimerType = {
  timerElement: HTMLElement;
  offerButtonElement: HTMLButtonElement;
  duration: number;
};

export function startTimer({
  timerElement,
  offerButtonElement,
  duration,
}: StartTimerType) {
  let endTime = new Date(Date.now() + duration);

  function updateTimer() {
    const now = new Date();
    const timeRemaining = endTime.getTime() - now.getTime();

    if (timeRemaining <= 0) {
      timerElement.textContent = '00:00:00';
      offerButtonElement.disabled = true;
      return;
    }

    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  setInterval(updateTimer, 1000);
}
