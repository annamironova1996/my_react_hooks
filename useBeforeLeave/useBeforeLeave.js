import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  /* создаем хук, который принимает в себя 1 параметр - колбэк функцию, которая будет выводить сообщение при уведении мыши со страницы */
  if (typeof onBefore !== "function") {
    return;
  }
  /*   делаем проверку, если onBefore не функция, тогда хук будет игнорироваться
   */
  const handler = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
    /*     создаем функцию, в которой мы будем вызывать onBefore только в том случае, если клиент уводит мышку вверх */
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, []);
  /* с помощью хука useEffect мы зададим команду странице, чтобы отслеживала изменения курсора */
};
