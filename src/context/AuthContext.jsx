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
            setUsers((prevUsers) => [...prevUsers, newUser]);
        }
    };

    const logout = () => {
        setAuthUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('authUser');
        localStorage.setItem('isLoggedIn', false);
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
    }

    return (
        <AuthContext.Provider value={value}> {props.children} </AuthContext.Provider>
    )
}