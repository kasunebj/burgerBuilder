import React,{Component} from 'react';
import Aux from '../../hoc/Aux2';
import Burger from '../../components/Burger/Burger.js';

class BurgerBuilder extends Component{

  state ={
       ingredients:{
         salad:1,
         bacon:1,
         chease:2,
         meat:2
       }

  }

  render(){
    return(
      <Aux>
      <Burger ingredients={this.state.ingredients}/>
      <div>burger controls</div>
      </Aux>
    );
  }
}
export default BurgerBuilder;
