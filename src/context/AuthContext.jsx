import React, { useState, useContext, useEffect } from 'react'
// import {  useNavigate } from 'react-router-dom';
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){
    // const navigate = useNavigate();

    const [users,setUsers] = useState(JSON.parse(localStorage.getItem('users') || "[]"));
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')) || null);
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false);

   
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        localStorage.setItem('authUser', JSON.stringify(authUser));
    }, [authUser]);

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const login = (email, password) => {
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
            setAuthUser(user);
            setIsLoggedIn(true);
            window.location.href = '/home';
            
        } else {
            alert('Invalid email or password');
        }
    };

    const register = (newUser) => {
        if (users.some((user) => user.email === newUser.email)) {
            alert('User with this email already exists!');
        } else {
            setUsers((prevUsers) => [...prevUsers, { ...newUser, cart: [] }]);
        }
    };

    const logout = () => {
        setAuthUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('authUser');
        localStorage.setItem('isLoggedIn', false);
    };

    // const addToCart = (product) => {
    //     if (!authUser) {
    //         alert('You need to log in to add items to the cart!');
    //         return;
    //     }
    //     // const productIndex = authUser.cart.findIndex((item) => item.key === product.key);
    //     const updatedCart = [...authUser.cart, product];
    //     setAuthUser({ ...authUser, cart: updatedCart });

    //     setUsers((prevUsers) =>
    //         prevUsers.map((user) =>
    //             user.email === authUser.email ? { ...user, cart: updatedCart } : user
    //         )
    //     );
    // };

    const addToCart = (product) => {
        if (!authUser) {
            alert('You need to log in to add items to the cart!');
            return;
        }
        const productIndex = authUser.cart.findIndex((item) => item.key === product.key);
        let updatedCart;
        if (productIndex > -1) {
            updatedCart = authUser.cart.map((item, index) =>
                index === productIndex ? { ...item, count: (item.count || 1) + 1 } : item
            );
        } else {
            updatedCart = [...authUser.cart, { ...product, count: 1 }];
        }
        setAuthUser({ ...authUser, cart: updatedCart });
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.email === authUser.email ? { ...user, cart: updatedCart } : user
            )
        );
    };

    const removeFromCart = (productKey) => {
        if (!authUser) {
            alert('You need to log in to manage your cart!');
            return;
        }
    
        const updatedCart = authUser.cart.map((item) => {
            if (item.key === productKey) {
                return item.count > 1 ? { ...item, count: item.count - 1 } : null;
            }
            return item;
        }).filter((item) => item !== null);
    
        setAuthUser({ ...authUser, cart: updatedCart });
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.email === authUser.email ? { ...user, cart: updatedCart } : user
            )
        );
    };
    

    const value = {
        users,
        setUsers,
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        login,
        register,
        logout,
        addToCart,
        removeFromCart
    }

    return (
        <AuthContext.Provider value={value}> {props.children} </AuthContext.Provider>
    )
}