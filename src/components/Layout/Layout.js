import React,{Component} from 'react';
import Aux from '../../hoc/Aux2';
import classes from './Layout.css'
import Toolbar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends Component{

  state={
    showSideDrawer : true
  }

  sideDrawerCloseHandler= () =>{
    this.setState({showSideDrawer:false});
  }

sideDrawerToggleHandler = ()=>{
  this.setState((prevState)=>{
        return {showSideDrawer : !prevState.showSideDrawer};
  });
}
  render(){
    return(
      <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer
                  open={this.state.showSideDrawer}
                  closed={this.sideDrawerCloseHandler}/>
            <main className ={classes.Content}>
                  {this.props.children}
            </main>
        </Aux>

    );
  }
}

export default layout;
