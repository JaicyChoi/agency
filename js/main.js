const main_visual = document.querySelector('.main_visual');
const main_visual_list = document.querySelector('.main_visual_list');
const main_visual_list_li = document.querySelectorAll('.main_visual_list>li');
let index = 1;
let interval = 2000;
let move;

let first_clone = main_visual_list_li[0].cloneNode(true);
let last_clone = main_visual_list_li[2].cloneNode(true);

first_clone.id = 'first';
last_clone.id = 'last';

main_visual_list.append(first_clone);
main_visual_list.prepend(last_clone);

const get_main_visual_list_li = document.querySelectorAll('.main_visual_list>li');

prev_btn = document.querySelector('.main_visual_left_arrow');
next_btn = document.querySelector('.main_visual_right_arrow');

main_visual_list.style.transform = `translateX(${-100 * index}%)`;

main_visual_list.addEventListener('transitionend', function(){
    if( get_main_visual_list_li[index].id === first_clone.id ) index = 1;
    if( get_main_visual_list_li[index].id === last_clone.id ) index = 3;

    main_visual_list.style.transition = 'none';
    main_visual_list.style.transform = `translateX(${-100 * index}%)`;
});

// main_visual.addEventListener('mouseenter', function(){
//     clearInterval(move);
// });
// main_visual.addEventListener('mouseleave', function(){
//     start();
// });

prev_btn.addEventListener('click', function(){
    move_prev();
});
next_btn.addEventListener('click', function(){
    move_next();
});

function start(){
    move = setInterval(function(){ move_next(); }, interval);
}

function move_next(){
    if( index >= get_main_visual_list_li.length - 1 ) return;
    index++;
    main_visual_list.style.transition = 'all .7s ease-out';
    main_visual_list.style.transform = `translateX(${-100 * index}%)`;
}
function move_prev(){
    if( index <= 0 ) return;
    index--;
    main_visual_list.style.transition = 'all .7s ease-out';
    main_visual_list.style.transform = `translateX(${-100 * index}%)`;
}

// start();