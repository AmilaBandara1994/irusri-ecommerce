# E-Commerce Application

This is an E-commerce site where users can browse products and add them to their cart.

### Table of Contents
* Features
* Technologies
* Prerequisites
*  Cloning the Repository Started
*  Running the Application

### Features

* User registration and authentication
* Product browsing with categories for sales and recent products
* Cart functionality to add, view, and remove products
* Total value calculation for the cart
* Responsive design using Ant Design


### Technologies

* React.js 
* Ant Design
* Context Api
* LocalStorage

### Prerequisites
* Node 16 or higher installed on your machine.
* An IDE  (VScode).

**Cloning the Repository**
To clone the repository, run the following commands:
```bash
git clone https://github.com/AmilaBandara1994/irusri-ecommerce.git
cd irusri-ecommerce
```

## Running the Application
1. Install Necessary Dependencies
Run the following command to install all the required dependencies:
```bash
 npm install
```
2. Run the Application
Use the following command to run the application:

```bash
npm run dev
```
The application will be available at http://localhost:5173/


### User Flow
1. Registration
First, you need to register for the system. When you try to access the site, you will be redirected to the login page if you have already registered.

If you have not registered, use the link provided for new registrations. Upon successful registration, you will be redirected to the login page.

2. Login
After successful login, you will be redirected to the home page, where you can see all the products categorized accordingly (sales and recent products). You can add any product to the cart.

3. Cart
You can view all products in your cart by navigating to the cart using the top bar cart icon button. There you can see all the products, remove products, and view the total value on the right-hand side.