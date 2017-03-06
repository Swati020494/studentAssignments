import React from 'react';
import {connect} from "react-redux";
import Header from '../components/header.jsx'
import {getDataFoodGroup,getDataFoodItem,setDataFoodGroupId} from '../actions/getData.jsx'
import {addToCart,deleteFromCart,addToQuantity} from '../actions/userActions.jsx'
import OptionTab from '../components/tabs.jsx'
import Icons from '../components/icons.jsx'
class App extends React.Component {
    componentWillMount() {
        this.props.getDataFoodGroup("http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodGroup");
        this.props.getDataFoodItem("http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodItem");
        
    }
    componentDidMount() {
      console.log("in mount: ",this.props.data.jsondataAllfoodGroup);  
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        console.log("new props-->", nextProps);
    }

    render() {
        console.log('-------------', this.props.data);
      return (
         <div>
         <Header cart={this.props.user.foodInCart} count={this.props.user.count} delete={this.props.deleteFromCart} increase={this.props.addToQuantity}/>
         <OptionTab groups={this.props.data.jsondataAllfoodGroup} select={(key)=>this.props.setDataFoodGroupId(key)} selectedId={this.props.data.selectedTab}/> 
         <Icons selectedId={this.props.data.selectedTab}  groups={this.props.data.jsondataAllfoodGroup} items={this.props.data.jsondataAllfoodItem}  addToCart={(item)=>this.props.addToCart(item)} /> 
         </div>
      )
   }}
const mapStateToProps=(state)=>{
    return{
        user: state.user,
        data:state.data
    };
};
const mapDispatchToProps=(dispatch)=>{
    return{
        getDataFoodGroup:(url)=>{
            dispatch(getDataFoodGroup(url));
        },
        getDataFoodItem:(url)=>{
            dispatch(getDataFoodItem(url));
        },
        setDataFoodGroupId:(key)=>{
          dispatch(setDataFoodGroupId(key));
        },
        addToCart:(item)=>{
            dispatch(addToCart(item));
        },
        deleteFromCart:(id)=>{
            dispatch(deleteFromCart(id));
        },
        addToQuantity:(id)=>{
            dispatch(addToQuantity(id));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App)