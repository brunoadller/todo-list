import {  useState } from 'react'
import {Item} from './types/Item'
import ListItem from './components/ListItem'
import AddArea from './components/AddArea'

const App = () => {
  const [checkDone, setCheckDone] = useState(false);
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar pão', done: false},
    {id: 2, name: 'Estudar programação', done: false},
    {id: 3, name: 'Jogar Bola', done: false},
  ]);

  const handleAddTask = (taskName: string) => {

    const newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: checkDone
    })

    setList(newList);
  
  }
 
  const handleDoneChecked = (checked: boolean) => {
    setCheckDone(checked)
  }
  const  handleClickDeleteObject = (id: number, checked: boolean) => {
    const newList: Item[] = []
   
    list.forEach(item => {
      if(item.id !== id || checked === false){
        newList.push({
          id: item.id,
          name:item.name,
          done: item.done
        })
      }
    })
    setList(newList)
  }
  
  return(
   <div className="bg-gray-900 text-gray-300 min-h-[100vh]">
      <div className="m-auto max-w-[980px] p-[10px]">
        <header>
          <h1 className="m-0 p-0 text-[40px]
           text-white text-center border-b
            border-gray-500 py-[20px]
            font-bold
            ">
              Lista de Tarefas
          </h1>
          <AddArea onEnter = {handleAddTask}/>
          {
              list.map((item, index) => {
                return (
                  <ListItem key={index} item = {item} done = {handleDoneChecked}
                    deleteObject={handleClickDeleteObject}
                 />
                )
              })
            }
        </header>
      </div>
   </div>
  )
}

export default App
