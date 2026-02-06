document.getElementById('special_btn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let sliderCoffee = document.querySelector('.new_our_products_coffee');
let forwardButton = document.querySelector('.forward_our_products_coffee_btn');
let backButton = document.querySelector('.back_our_products_coffee_btn')

forwardButton.addEventListener('click', () => {
    sliderCoffee.scrollBy({
        left: 130,
        behavior: 'smooth'
    });
});

backButton.addEventListener('click', () => {
    sliderCoffee.scrollBy({
        left: -130,
        behavior: 'smooth'
    });
});

document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('menu_form').classList.add('active_menu_form');
    document.getElementById('body').classList.add('active_form');
    document.getElementById('active_form_filter').classList.add('active_filter');
});

document.getElementById('close_button').addEventListener('click', () => {
    validation.refresh();
    document.getElementById('menu_form').classList.remove('active_menu_form');
    document.getElementById('body').classList.remove('active_form');
    document.getElementById('active_form_filter').classList.remove('active_filter');
});

const form = document.getElementById('dropdown_menu');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

let validation = new JustValidate('#dropdown_menu');

validation.addField('#name', [
    {
        rule: "required",
        errorMessage: "Enter name!"
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: "Minimum 2 value!"
    }
]).addField('#tel', [
    {
        rule: "required",
        errorMessage: "Enter phone!"
    },
    {
        rule: "minLength",
        value: 10,
        errorMessage: "Minimum 10 value!"
    }
]).addField("#msg", [
    {
    rule: "required",
    errorMessage: "Enter Message!"
    },
    {
    rule: "minLength",
    value: 10,
    errorMessage: "Minimum 10 value!"
    }
]).onSuccess(() => {
    form.reset();
    document.getElementById('menu_form').classList.remove('active_menu_form');
    document.getElementById('body').classList.remove('active_form');
    document.getElementById('active_form_filter').classList.remove('active_filter');
});