export const usePreventLeave = () => {
  /* создаем хук useState, который не будет содержать в себе параметры */
  const listener = (event) => {
    event.preventDefault();
    /* функция, которая отменяет защиту */
    event.returnValue = "";
    /* функция, которая возвращает значение для функции установления защиты */
  };

  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  /* функция, которая будет отменять защиту */
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  /* функция, которая будет разрешать защиту */
  return { enablePrevent, disablePrevent };
};
