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
// let items=document.querySelectorAll('.it');
// items[1].style.color='green';
// let odd=document.querySelectorAll('li:nth-child(odd)');
// console.log(odd)
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }
// let play=document.querySelector('.it')
// console.log(play.parentElement.setAttribute('title','uilist'))

// console.log(play.parentNode)
// let play=document.querySelector('.formbox')
// console.log(play.childNodes)
// console.log(play.children)
// console.log(play.firstChild)
// console.log(play.firstElementChild)
// console.log(play.lastChild)
// console.log(play.lastElementChild)
// let play=document.querySelector('.innerform')
// console.log(play.nextSibling)
// console.log(play.nextElementSibling)
// console.log(play.previousSibling)
// console.log(play.previousElementSibling)
let newDiv=document.createElement('div')
newDiv.setAttribute('title','newdiv')
newDiv.className='created';
newDiv.id='createdid';
newtextnode=document.createTextNode('Hello Dude1')
newDiv.appendChild(newtextnode);
let tt=document.querySelector('.formbox')
console.log(tt)
let ff=document.querySelector('.innerform')
console.log(tt)
tt.insertBefore(newDiv,ff)
console.log(newDiv);



