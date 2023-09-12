import React, {useState, KeyboardEvent} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

type onEnterProps = {
  onEnter: (taskName:string) => void;
}
//COMO A FUNÇÃO QUE ESTÁ VINDO NÃO ESTÁ DEFINIDO O TIPO DELA PARA ESTA FUNÇÃO
//ADDAREA DO ARQUIVO É NECESSÁRIO CRIAR O TIPO ONENTERPROPS
const AddArea = ({onEnter} : onEnterProps ) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== ''){
      onEnter(inputText);
      setInputText("")
    }
   
  }
  const handleClick = () => {
    if(inputText !== ''){
      onEnter(inputText)
      setInputText("")
    }
  }
  return (
    <div className="flex items-center gap-[5px]
    border border-gray-500 rounded-[15px] my-[20px] p-[10px] ">
      <AiOutlinePlus
        onClick = {() => handleClick()}
        className="cursor-pointer"
        size={25}
      />
      <input type="text"
        className={`border-none bg-transparent outline-none text-white text-[18px] flex-1`}
        placeholder='Adicione uma Tarefa'
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}

      />
    </div>
  )
}

export default AddArea