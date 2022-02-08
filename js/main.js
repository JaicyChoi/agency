//main visual slide controll
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

main_visual.addEventListener('mouseenter', function(){
    clearInterval(move);
});
main_visual.addEventListener('mouseleave', function(){
    start();
});

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

start();

//content5 slide controll - error
const message_list = document.querySelector('.message_list');
const message_list_li = document.querySelectorAll('.message_list>li');
let message_index = 1;

let first_message = message_list_li[0].cloneNode(true);
let last_message = message_list_li[message_list_li.length - 1].cloneNode(true);

first_message.id = 'first_message';
last_message.id = 'last_message';

message_list.append(first_message);
message_list.prepend(last_message);

const get_message_list_li = document.querySelectorAll('.message_list>li');
const message_prev = document.querySelector('.message_list_left_btn');
const message_next = document.querySelector('.message_list_right_btn');

message_list.style.transform = `translateX(${-1170 * message_index}px)`;

message_list.addEventListener('transitionend', () => {
    if( get_message_list_li[message_index].id === first_message.id )
        message_index = 1;
    if( get_message_list_li[message_index].id === last_message.id )
        message_index = get_message_list_li.length - 2;

        message_list.style.transition = 'none';
        message_list.style.transform = `translateX(${-1170 * message_index}px)`;
});

message_prev.addEventListener('click', () => {
    move_message_prev();
});
message_next.addEventListener('click', () => {
    move_message_next();
});

function move_message_next(){
    if( message_index >= get_message_list_li.length - 1 ) return;
    message_index++;
    message_list.style.transition = 'all .7s ease-out';
    message_list.style.transform = `translateX(${-1170 * message_index}px)`;
}
function move_message_prev(){
    if( message_index <= 0 ) return;
    message_index--;
    message_list.style.transition = 'all .7s ease-out';
    message_list.style.transform = `translateX(${-1170 * message_index}px)`;
}
