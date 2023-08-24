import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {
  /* хук useTabs принимает в себя два параметра:
    1 - текущая владка (initialTab)
    2 - все вкладки, которые есть на странице (allTabs) */
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
    /* делаем проверку, потому что нам нужно убедиться, что массив является массивом, если он не будет массивом, тогда функция просто не выполнится */
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  /* с помощью встроенного хука useState зададим два состояния:
  1 - начальное состояние currentIndex, которое будет initialTab
  2 - измененное  состояние setCurrentIndex */
  return {
    currentItem: allTabs[currentIndex],
    /* возвращаем в нашем хуке useTabs currentItem, который будет равен всем вкладкам, из которых мы достаем изначальное состояние currentIndex */
    changeItem: setCurrentIndex,
    /* возвращаем функцию, которая будет изменять состояние нашего элемента */
  };
};
