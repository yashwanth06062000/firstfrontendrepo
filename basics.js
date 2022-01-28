// console.log(document.forms);
// console.log(document.all);
// console.log(document.head);
// console.log(document.body.style.backgroundColor='red');
// console.log(document.getElementById('book'));
// let h=document.getElementById('book')
// h.style.borderBottom='3px solid black';
// h.style.color='green';
// let ite=document.getElementsByClassName('it');
// ite[2].style.backgroundColor='green';
// for(let i =0;i<ite.length;i++)
// {
//     ite[i].style.backgroundColor='#f4f4f4';
// }
// let iy=document.getElementsByTagName('li')
// for(let i =0;i<iy.length;i++)
// {
//     iy[i].style.backgroundColor='#f4f4f4';
// }
// let seconditem=document.querySelector('li:nth-child(2)');
// seconditem.style.backgroundColor='green';
// let thirditem=document.querySelector('li:nth-child(3)');
// thirditem.style.display='none';
let items=document.querySelectorAll('.it');
items[1].style.color='green';
let odd=document.querySelectorAll('li:nth-child(odd)');
console.log(odd)
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

