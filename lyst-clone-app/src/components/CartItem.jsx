import React, {useEffect} from 'react'
import { Flex, CartImage, ItemInfo ,Counter, ItemCount, Remove, ItemSpec, ImageDiv, ValueDiv} from './cartStyled'
import { deleteItem } from '../redux/action'
import { useDispatch } from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';



export default function CartItem({ title, id, desc, img, price,qty }) {

  const dispatch = useDispatch();

  const removeItem = (id) =>{
    deleteItem(dispatch, id);
    

  }
  
  const decrement = (id,qty) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,qty
    });
  };
 
  const increment = (id,qty) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,qty
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL",payload: id });
    
  }, []);

  return (
    <>
        <Flex  key={id}>
          <ImageDiv>
                <CartImage src={img} alt={title} />
          </ImageDiv>
        
        <ItemInfo>
            <ItemSpec>
            <h2>{title}</h2>
            <h4>{desc}</h4>
            </ItemSpec>
            

           

        

        
        <Remove>
              <DeleteIcon onClick={() =>removeItem({id})}></DeleteIcon>
             {/* <button onClick={() =>removeItem({id})}>Remove</button>*/}
        </Remove>

        <ValueDiv>

        <p>{price}</p>

        <Counter>
          
        <RemoveIcon onClick={() =>decrement({id})}/>

        <ItemCount type="text"   placeholder={qty}   
        />
      
        <AddIcon onClick={() =>increment({id},{qty})}/>
      
      </Counter>

      <p>{price*qty}</p>
      
      </ValueDiv>
      </ItemInfo>
      </Flex>
    </>
  )
}