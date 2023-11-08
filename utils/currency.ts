export const validCurrency = (value: number | undefined) => {
  return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0;
};
