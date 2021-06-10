import React from 'react'

class CartNumber extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            cartNumberTotal:0        }
    }

    componentWillReceiveProps(nextprops){
        this.setState({
            cartNumberTotal:nextprops.cartValue
        })
        
    }

    updateCartValue = (value)=>{
        //this.props.updateValue();
    }
    render(){
        return(
        <span className='badge badge-warning' id='lblCartCount'> {this.state.cartNumberTotal} </span>
        )
    }
}

export default CartNumber 