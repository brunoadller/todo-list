import React, {useEffect, useState} from 'react'
import { Item } from '../../types/Item'
import {BsTrashFill} from 'react-icons/bs'

type ItemProps = {
  item: Item;
  done: (checked: boolean) => void;
  deleteObject: (id:number, checked:boolean) => void;
}

const ListItem = ({item, done,deleteObject}:ItemProps) => {
  const [isChecked, setIsChecked] = useState(item.done)

  useEffect(() => {
    item.done = isChecked
    done(item.done)
    console.log(isChecked)
  }, [isChecked]);

  

  
  return (
    <div className="flex items-center justify-between p-[10px] bg-slate-800 rounded-[10px] mb-[10px]">
      <div className="flex items-center gap-1">
        <input
          className="w-[25px] h-[25px] mr-[5px]  "
          checked = {isChecked}
          onChange={e => setIsChecked(e.target.checked)}
          type="checkbox" />
        <label
        className={
          `text-gray-400
          ${isChecked?"line-through":"initial"}`
        }
        >{item.name}</label>
      </div>

      <BsTrashFill
        onClick = {() => deleteObject(item.id,item.done)} 
        className="cursor-pointer hover:text-zinc-500 hover:text-x hover:bg-opacity-5"
        size={25} />
    </div>
  )
}

export default ListItem