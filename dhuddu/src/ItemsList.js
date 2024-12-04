
import { FaTrashAlt } from "react-icons/fa";

const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
    {items.map((item) =>(
       <li className="item" key ={item.id}> 
           <input
              type = 'checkbox'
              onChange={() => handleCheck(item.id)}
              checked = {item.checked}
                        
           />
           <label
               style={(item.checked) ?{ textDecoration: "line-through"}: null}
               onDoubleClick={() => handleCheck(item.id)}
           >{item.item}</label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
            />
        </li>
    ))}
   
    </ul>
  )
}
export default ItemsList