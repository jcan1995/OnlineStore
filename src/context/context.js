import React, { Component } from 'react'

/* Contex API */
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        sidebarOpen: false,
        cartOpen:false,
        cartItems: 0,
        isAuth: false, 
        name: "Rob Zombie",
    };

    handleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }
    // Handle for the cart slider
    handleCart = () => {
        this.setState({ cartOpen: !this.state.sidebarOpen });
    }

    // close cart
    closeCart = () => {
        this.setState({ cartOpen: false });
    }

    // open cart
    openCart = () => {
        this.setState({ cartOpen: true });
    }

    // pass in state, components and functions here
    render() {
        return(
            <ProductContext.Provider 
            value={{
                sidebarOpen: this.state.sidebarOpen,
                cartOpen: this.state.cartOpen,
                cartItems: this.state.cartItems,
                isAuth: this.state.isAuth, 
                name: this.state.name,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart
            }}>
                { this.props.children }
            </ProductContext.Provider>
        );

    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};