'use strict';

const count = document.querySelector('.number');
const btns = document.querySelectorAll('.btn');

//set initial count
let num = 0;
count.textContent = num;


/* The below elements can also used to perfom the logic but above one is more efficient will use less code  */
// const decrease = document.querySelector('.decrase');
// const reset = document.querySelector('.reset');
// const increase = document.querySelector('.increase');


btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        const item = e.currentTarget.classList;
        if (item.contains('decrease')) {
            num--
        } else if (item.contains('increase')) {
           num++
        } else if (item.contains('reset')) {
           num = 0
        }
        count.textContent = num;

        //Changing color of the count
        if (count.textContent > 0) {
            count.style.color = 'green'
        } else if (count.textContent < 0) {
            count.style.color = 'red'
        } else if (count.textContent == 0) {
            count.style.color = 'black'
        }

    })
})

