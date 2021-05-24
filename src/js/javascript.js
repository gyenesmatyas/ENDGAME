

// lange versie
$(document).ready(function(){
});

const burger = document.getElementById('burger');
const navigation = document.getElementById('navigation');

burger.addEventListener('click', () => {
    navigation.classList.toggle('show');
    burger.classList.toggle("change");
})
