import React, {useEffect} from 'react'
import { Flex, CartImage, ItemInfo ,Counter, ItemCount, Remove, ItemSpec, ImageDiv, ValueDiv} from './styled'
import { deleteItem } from '../redux/action'
import { useDispatch } from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';



export default function CartItem({ title, id, description, img, price,quantity }) {
 
  const dispatch = useDispatch();

  const removeItem = (id) =>{
    deleteItem(dispatch, id)
  }
  
  const decrement = (id,quantity) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,quantity
    });
  };
 
  const increment = (id,quantity) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,quantity
    });
  };

  

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    
  }, [id]);

  return (
    <>
        <Flex  key={id}>
          <ImageDiv>
                <CartImage src={img} alt={title} />
          </ImageDiv>
        
        <ItemInfo>
            <ItemSpec>
            <h2>{title}</h2>
            <h4>{description}</h4>
            </ItemSpec>
            

           

        

        
        <Remove>
              <DeleteIcon onClick={() =>removeItem({id})}></DeleteIcon>
             {/* <button onClick={() =>removeItem({id})}>Remove</button>*/}
        </Remove>

        <ValueDiv>

        <p>{price}</p>

        <Counter>
          
        <RemoveIcon onClick={() =>decrement({id})}/>

        <ItemCount type="text"   placeholder={quantity}   
        />
      
        <AddIcon onClick={() =>increment({id})}/>
      
      </Counter>

      <p>{price*quantity}</p>
      
      </ValueDiv>
      </ItemInfo>
      </Flex>
    </>
  )
}