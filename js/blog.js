const pagination = document.querySelector('.pagination');
let total_pages = 78;

function element(total_pages, page){
    let li = '';
    let active_li;
    let before_pages = page - 1;
    let after_pages = page + 1;

    li += `<li class="prev_btn" onclick="element(total_pages, ${page - 1})"></li>`;

    if( page <= 0 || page >= 79 ) return;

    // if( page > 1 ){
    //     li += `<li class="prev_btn" onclick="element(total_pages, ${page - 1})"></li>`;
    // }
    if( page > 2 ){
        li += `<li class="first_page num" onclick="element(total_pages, 1)">1</li>`;
        if( page > 3 ){
            li += `<li class="dots">...</li>`;
        }
    }

    if( page === total_pages ){
        before_pages -= 4;
    }
    else if( page === total_pages - 1 ){
        before_pages -= 3;
    }
    else if( page === total_pages - 2 ){
        before_pages -= 1;
    }
    // else if( page === total_pages ){
    //     before_pages -= 2;
    // }
    // else if( page === total_pages - 1 ){
    //     before_pages -= 1;
    // }

    if( page === 1 ){
        after_pages += 4;
    }
    // if( page >= 1 ){
    //     after_pages += 2;
    // }
    else if( page === 2 ){
        after_pages += 3;
    }
    else if( page >= 3 ){
        after_pages += 2;
    }

    for( let page_length = before_pages; page_length <= after_pages ; page_length++ ){
        if( page_length > total_pages ){
            continue;
        }
        if( page_length === 0 ){
            page_length += 1;
        }
        if( page === page_length ){
            active_li = 'active';;
        }
        else{
            active_li = '';
        }
        li += `<li class="num ${active_li}" onclick="element(total_pages, ${page_length})">${page_length}</li>`;
    }

    if( page < total_pages - 1 ){
        if( page < total_pages - 2 ){
            li += `<li class="dots">...</li>`;
        }
        li += `<li class="last_page num" onclick="element(total_pages, ${total_pages})">${total_pages}</li>`;
    }

    li += `<li class="next_btn" onclick="element(total_pages, ${page + 1})"></li>`;

    // if( page < total_pages ){
    //     li += `<li class="next_btn" onclick="element(total_pages, ${page + 1})"></li>`;
    // }

    pagination.innerHTML = li;
}
element(total_pages, 3);