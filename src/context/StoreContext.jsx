import React, { useEffect } from 'react'
import './StoreContext.css'
import axios from 'axios'

export const StoreContext = React.createContext(null)

const StoreContextProvider = (props) => {

    const url = process.env.REACT_APP_API_URL || "https://chore-hero-backend.onrender.com";
    
    const [token, setToken] = React.useState("");

    const [servicesList, setServicesList] = React.useState([]);
    const [cartItems, setCartItems] = React.useState({});
    const [selectedDate, setSelectedDate] = React.useState('');
    const [selectedTime, setSelectedTime] = React.useState('');

    const [showAddedMessage, setShowAddedMessage] = React.useState("");

    // const addToCart = (serviceName, description, date, time) => {

    //     // if (!cartItems[serviceName]) {
    //     //     setCartItems((prev) => ({ ...prev, [serviceName]: 1 }))

    //     //     setShowAddedMessage("added");
    //     //     setTimeout(() => {
    //     //         setShowAddedMessage("");
    //     //     }, 3000); // Hide the message after 3 seconds
    //     // }
    //     // else {
    //     //     setShowAddedMessage("not-added");
    //     //     setTimeout(() => {
    //     //         setShowAddedMessage("");
    //     //     }, 3000); // Hide the message after 3 seconds
    //     // }

    //     if (token) {
    //         axios.post(
    //             url + "/api/cart/add",
    //             { itemId: servicesList.find(service => service.name === serviceName && service.cost !== null)._id },
    //             { headers: { token } }
    //         )
    //     }

    //     setServicesList((prevServices) =>
    //         prevServices.map((service) =>
    //             service.name === serviceName
    //                 ? { ...service, description: description, date: date, time: time }
    //                 : service
    //         )
    //     );
    // };

    const addToCart = async (serviceName, description, date, time) => {
        try {
            const service = servicesList.find(service => service.name === serviceName && service.cost !== null);

            if (!service) {
                setShowAddedMessage("not-added");
                setTimeout(() => {
                    setShowAddedMessage("");
                }, 3000); // Hide the message after 3 seconds
                return;
            }

            const itemId = service._id;

            if (token) {
                const response = await axios.post(
                    url + "/api/cart/add",
                    {
                        itemId,
                        description,
                        date,
                        time
                    },
                    {
                        headers: { token }
                    }
                );

                if (response.data.success) {
                    setShowAddedMessage("added");
                    setTimeout(() => {
                        setShowAddedMessage("");
                    }, 3000); // Hide the message after 3 seconds
                } else {
                    setShowAddedMessage("not-added");
                    setTimeout(() => {
                        setShowAddedMessage("");
                    }, 3000); // Hide the message after 3 seconds
                }

                await loadCartData(token);
            }

            // console.log(cartItems["666083b02a0a9ab47e83b462"].quantity);

            setServicesList((prevServices) =>
                prevServices.map((service) =>
                    service.name === serviceName
                        ? { ...service, description: description, date: date, time: time }
                        : service
                )
            );

        } catch (error) {
            console.error("Error adding to cart:", error);
            setShowAddedMessage("not-added");
            setTimeout(() => {
                setShowAddedMessage("");
            }, 3000); // Hide the message after 3 seconds
        }

    };


    // const removeFromCart = async (serviceName) => {
    //     if (token) {
    //         await axios.post(url + "/api/cart/remove",
    //             { itemId: servicesList.find(service => service.name === serviceName && service.cost !== null)._id },
    //             { headers: { token } });
    //         await loadCartData(token);
    //     }
    //     else {
    //         setCartItems((prev) => ({ ...prev, [serviceName]: prev[serviceName] - 1 }))
    //     }
    // }

    const removeFromCart = async (serviceName) => {
        const service = servicesList.find(service => service.name === serviceName && service.cost !== null);

        if (token) {
            await axios.post(url + "/api/cart/remove",
                {
                    itemId: service._id,
                    description: service.description,
                    date: service.date,
                    time: service.time
                },
                { headers: { token } }
            );
            await loadCartData(token);
        } else {
            setCartItems((prev) => {
                const updatedCartItems = { ...prev };
                if (updatedCartItems[serviceName]) {
                    updatedCartItems[serviceName].quantity -= 1;
                    if (updatedCartItems[serviceName].quantity <= 0) {
                        delete updatedCartItems[serviceName];
                    }
                }
                return updatedCartItems;
            });
        }
    }

    const getCartTotal = () => {
        let total = 0;

        if (token) {
            Object.entries(cartItems)
                .filter(([key, item]) => item.quantity > 0)
                .forEach(([key, item]) => {
                    const service = servicesList.find(service => service._id === key && service.cost !== null);
                    if (service) {
                        total += item.quantity * service.cost;
                    }
                });
        }

        return total;
    };

    const fetchServicesList = async () => {
        const response = await axios.get(url + "/api/service/list");
        setServicesList(response.data.data);
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            await fetchServicesList();
            if (localStorage.getItem('token')) {
                setToken(localStorage.getItem('token'));
                await loadCartData(localStorage.getItem('token'));
            }
        }
        loadData();
    }, []);


    const contextValue = {
        cartItems, setCartItems, addToCart, removeFromCart, getCartTotal, url, token, setToken, servicesList, loadCartData
    }

    // useEffect(() => {
    //     console.log("Updated cartItems:", cartItems);
    // }, [cartItems]);

    // return (
    //     <StoreContext.Provider value={contextValue}>
    //         {props.children}
    //     </StoreContext.Provider>
    // )

    return (
        <StoreContext.Provider value={contextValue}>
            {showAddedMessage === "added" ?
                <div className="added-to-cart-message">Added to cart</div> :
                showAddedMessage === "not-added" && <div className="not-added-to-cart-message">Already in cart</div>}
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider

// 1:07:00
// 1:39:00