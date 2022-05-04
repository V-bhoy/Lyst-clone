import React, {useEffect} from 'react'
import { Flex, CartImage, ItemInfo ,Counter, Increment, Decrement, ItemCount} from './styled'
import { deleteItem } from '../redux/action'
import { useDispatch } from 'react-redux'



export default function CartItem({ title, id, brand, img, price,quantity }) {
 
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
    // console.log("Awesome");
  }, [id]);

  return (
    <>
        <Flex  key={id}>
        <CartImage src={img} alt={title} />
        <ItemInfo>
            
            <h2>{brand}</h2>
            <h4>{title}</h4>
            <p>Price:{price}</p>
            

           

        </ItemInfo>
        <Counter>
          
        <i class="fa-light fa-plus"></i>
        <ItemCount type="text" placeholder={quantity} disabled />
        <i class="fa-light fa-minus"></i>
   
      </Counter>

      <button onClick={() =>removeItem({id})}>Remove</button>

      </Flex>
    </>
  )
}