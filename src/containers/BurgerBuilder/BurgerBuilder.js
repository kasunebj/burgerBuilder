import React,{Component} from 'react';
import Aux from '../../hoc/Aux2';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/BuildControlls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary';

const INGRDIENT_PRIZES = {
  salad:0.5,
  chease:0.4,
  meat:1.3,
  bacon:0.7
}

class BurgerBuilder extends Component{

  state ={
       ingredients:{
         salad:0,
         bacon:0,
         chease:0,
         meat:0
       },
       totalPrize :4,
       purchasable:false,
       purchasing:false
  }

  updatePurchaseState = (ingredients)=> {

          const sum =  Object.keys(ingredients)
                  .map( igKey => {return ingredients[igKey] ;} )
                  .reduce(
                    ( sum , el ) => {return sum + el ;}, 0
                  );
                  this.setState({purchasable: sum >0 });
  }

  addIngredientHandler = (type) => {
            const amount = this.state.ingredients[type];
            const newAmount = amount+1;
            const newIng = {
              ...this.state.ingredients
            };
            newIng[type] = newAmount;
            const incrementPrize = INGRDIENT_PRIZES[type];
            const oldPrize = this.state.totalPrize;
            const newPrize =  oldPrize+incrementPrize;

            this.setState({ingredients:newIng , totalPrize:newPrize});
            this.updatePurchaseState(newIng);

  }

  removeIngredientHandler = (type) => {
            const amount = this.state.ingredients[type];
            if(amount<=0){
              return;
            }
            const newAmount = amount-1;
            const newIng = {
              ...this.state.ingredients
            };
            newIng[type] = newAmount;
            const decrementPrice = INGRDIENT_PRIZES[type];
            const oldPrice =  this.state.totalPrize;
            const newPrice = oldPrice-decrementPrice;

            this.setState({ingredients:newIng, totalPrize:newPrice});
            this.updatePurchaseState(newIng);


  }

  purchasehandler =  () => {
        this.setState({ purchasing : true });
  }
  cancelPurchaseHandler = () => {
        this.setState({ purchasing : false });
  }

  render(){

    const disabledInfo ={
      ...this.state.ingredients
    };

    for (let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <=0;
    }

    return(
      <Aux>
            <Modal show = {this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
                    <BurgerSummary ingredients={this.state.ingredients}/>
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchasehandler}
                    prize={this.state.totalPrize}
            />
      </Aux>
    );
  }
}
export default BurgerBuilder;
