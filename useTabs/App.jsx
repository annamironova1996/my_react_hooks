import { useTabs } from "./useTabs";
import content from "./content";

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  /* используя наш хук useTabs:
  1 - начальное состояние currentItem = 0
  2 - функция, которая изменят состояние
   */
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
        /* при клике вызываем функцию changeItem и в качестве аргумента будет текущий индекс элемента, тк у 1 кнопки - индекс 0, а у 2 кнопки - индекс 1 */
      ))}
      <div>{currentItem.content}</div>
      {/* если мы поставим в хуке useTabs(1), то по умолчанию будем забирать контект из второго раздела */}
    </div>
  );
}
