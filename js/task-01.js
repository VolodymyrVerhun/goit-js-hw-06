
const numOfCateg = document.querySelectorAll('.item');
console.log('Number of categories:', numOfCateg.length);

numOfCateg.forEach(element => {
    console.log('Category: ', element.querySelector('h2').textContent);
    console.log('Element: ', element.querySelectorAll('li').length);
});

