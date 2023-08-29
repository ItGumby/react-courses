export const counterButtonClicked = amount =>({
  type: 'COUNTER_BUTTON_CLICKED',
  // convention of capital-snake-case
  payload: { amount },
});