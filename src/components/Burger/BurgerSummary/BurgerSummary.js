import React from 'react';
import Aux from '../../../hoc/Aux2';

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
          <p>continue to check out?</p>
          <button>continue</button>
          <button>cancel</button>
        </Aux>
      );
};
export default summary;
