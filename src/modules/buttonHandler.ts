export function setupButtonHandlers(
  selectButtons: NodeListOf<HTMLButtonElement>,
) {
  selectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log(button.dataset.tariffName);
    });
  });
}
