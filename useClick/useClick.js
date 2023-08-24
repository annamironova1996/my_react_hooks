import { useRef, useEffect } from "react";

export const useClick = (onClick) => {
  /* создаем хук useClick, который принимает 1 параметр - onClick */
  if (typeof onClick !== "function") {
    return;
  }
  /* делаем проверку, если onClick будет функцией, тогда хук прорендерится, если нет, то функция просто проигнорируется */
  const element = useRef();
  /* создаем элемент, который с помощью хука useRef сможет найти элемент в документе */
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    /* сделаем проверку, если элемент найдется, тогда применим к нему параметр onClick */
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
    /* после того, как объект размонтируется с помощью useEffect мы удалим функцию onClick  с элемента */
  }, []);
  /* добавляем пустой массив, чтобы функция срабатывала только при загрузке страницы */
  return element;
  /* наш хук будет возвращать элемент, который пройдет через useRef, а затем через useEffect */
};
