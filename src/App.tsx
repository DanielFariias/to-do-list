import { useState } from 'react';
import * as C from './App.styles';
import AddArea from './components/AddArea';
import ListItem from './components/ListItem';
import { Item } from './types/item';

const App: React.FC = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão na padaria', done: true },
    { id: 2, name: 'Comprar Bolo', done: false },
  ])

  const AddItem = (taskName: string) => {
    setList([...list, { id: list.length + 1, done: false, name: taskName }])
  }
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={AddItem} />

        {list.map((item, index) => {
          return (
            <ListItem key={`${index}-${item.id}`} item={item} onChange={handleTaskChange} />
          )
        })}

      </C.Area>
    </C.Container>
  )
}

export default App;