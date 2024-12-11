import React from 'react';
import ReactDom from 'react-dom/client';

// const pizzaData = [
//     {
//         name: "Focaccia",
//         ingredients: "Bread with italian olive oil and rosemary",
//         price: 6,
//         photoName: "pizzas/focaccia.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Margherita",
//         ingredients: "Tomato and mozarella",
//         price: 10,
//         photoName: "pizzas/margherita.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Spinaci",
//         ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//         price: 12,
//         photoName: "pizzas/spinaci.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Funghi",
//         ingredients: "Tomato, mozarella, mushrooms, and onion",
//         price: 12,
//         photoName: "pizzas/funghi.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Salamino",
//         ingredients: "Tomato, mozarella, and pepperoni",
//         price: 15,
//         photoName: "pizzas/salamino.jpg",
//         soldOut: true,
//     },
//     {
//         name: "Pizza Prosciutto",
//         ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//         price: 18,
//         photoName: "pizzas/prosciutto.jpg",
//         soldOut: false,
//     },
// ];

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const Header = () => <h1>Fast React Pizza Co.</h1>
const Footer = function (){
    // const hour = new Date().getHours()
    // const openHour = 8
    // const closeHour = 22
    // const isOpen = hour >= openHour && hour <= closeHour
    // if(isOpen) alert('We are currently open')
    // else alert('We are closed')
    return<footer>{new Date().toLocaleTimeString()} We are currently open</footer>
    // return React.createElement('footer', null, "We are currently open")
}
function Menu (){
return (<div>
    <h2>Our Menu: </h2>
    <Pizza/>
    <Pizza/>
    <Pizza/>
</div>)
}
function Pizza() {
    return(
    <div>
        <img src="pizzas/spinaci.jpg" alt="spinaci"/>
        <h1>Pizza Spinaci</h1>
        <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>)

}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);