import React from 'react';
import Aux from '../../../hoc/Aux2';
import Button from '../../UI/Button/Button';

const summary = (props)=>{
      const ingredientSummary = Object.keys(props.ingredients)
                        .map(
                          (igkey)=> {return (
                            <li key={igkey}>
                                  <span style={{textTransform:"capitalize"}}> {igkey} </span>: {props.ingredients[igkey]}
                            </li>
                          );}
                        );
      return (
        <Aux>
          <h3>your order</h3>
          <p>A delicious burger with the followingingredients:</p>
            <ul>
              {ingredientSummary}
            </ul>
          <p> <strong>Total Prize :{ props.prize.toFixed(2)} </strong> </p>
          <p>continue to check out?</p>
          <Button btnType={"Success"} clicked={props.purchaseContitnue}>continue</Button>
          <Button btnType={"Danger"} clicked={props.purchaseCancel}>cancel</Button>
        </Aux>
      );
};
export default summary;
