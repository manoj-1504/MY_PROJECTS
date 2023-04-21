const hamBar = document.querySelector('.hamberger-bars');
const lists = document.querySelector('.un-ordered-list');
const links = document.querySelector('.un-ordered-list').querySelectorAll('a');

//-------------------Adding click Event to each navigation links----------------------- 

links.forEach(el =>{
    el.addEventListener('click', function () {
        links.forEach( link => link.classList.remove('active'))
        this.classList.add('active')
    })
});

// -------------------Adding toggle Event for hamberger icon----------------------- 

hamBar.addEventListener('click', () => {
    lists.classList.toggle('active');
    hamBar.classList.toggle('active');
});

//-------------------Adding toggle Event to list items-----------------------------

lists.addEventListener('click', () => {
    lists.classList.toggle('active');
    hamBar.classList.toggle('active');
});



