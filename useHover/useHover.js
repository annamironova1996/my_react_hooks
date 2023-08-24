import { useRef, useEffect } from "react";

export const useHover = (onClick) => {
  /* создаем хук useClick, который принимает 1 параметр - onHover */
  if (typeof onHover !== "function") {
    return;
  }
  /* делаем проверку, если onHover будет функцией, тогда хук прорендерится, если нет, то функция просто проигнорируется */
  const element = useRef();
  /* создаем элемент, который с помощью хука useRef сможет найти элемент в документе */
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    /* сделаем проверку, если элемент найдется, тогда применим к нему параметр onHover */
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
    /* после того, как объект размонтируется с помощью useEffect мы удалим функцию onHover  с элемента */
  }, []);
  /* добавляем пустой массив, чтобы функция срабатывала только при загрузке страницы */
  return element;
  /* наш хук будет возвращать элемент, который пройдет через useRef, а затем через useEffect */
};
