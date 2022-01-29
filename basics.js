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
// let newDiv=document.createElement('div')
// newDiv.setAttribute('title','newdiv')
// newDiv.className='created';
// newDiv.id='createdid';
// newtextnode=document.createTextNode('Hello Dude1')
// newDiv.appendChild(newtextnode);
// let tt=document.querySelector('.formbox')
// console.log(tt)
// let ff=document.querySelector('.innerform')
// console.log(tt)
// tt.insertBefore(newDiv,ff)
// console.log(newDiv);
// let btn=document.querySelector('.but')
// let value=document.getElementById('Addingitems')
// btn.addEventListener('click',addito)
// function addito(e){
//     e.preventDefault();
//     let value2=document.getElementById('AddingItems').value;
//     let value1=document.getElementById('discription').value;
    
//     let pil=document.createElement('p')
//     pil.className='pt';
//     pil.append(document.createTextNode(value1))
//     let rp=document.createElement('li')
//     rp.className='it'
//     rp.id='ibtnc'
//     let ttt=document.createTextNode(value2)
//     rp.append(ttt)
//     rp.append(pil);
//     let bty=document.createElement('button')
//     bty.append(document.createTextNode('x'))
//     bty.className='ibtn';
//     rp.append(bty)
//     let ull=document.querySelector('.items')
//     ull.appendChild(rp);
// }
// //removing the added item in list
// let rem=document.querySelector('.items')

// rem.addEventListener('click',remo)
// function remo(e){
//     if(e.target.className=='ibtn'){
//         if(confirm('Are You Sure?')){
//             var li = e.target.parentElement;
//             rem.removeChild(li);
//           }
//     }
// }
// let search=document.getElementById('searchitems')
// let searchdis=document.getElementById('searchdiscription')

// search.addEventListener('keyup',ser)
// searchdis.addEventListener('keyup',ser1)
// let flag='hie';

// function ser(e){
    
// let tex=e.target.value.toLowerCase();

//     let r=rem.children;
//     Array.from(r).forEach(function(iu){
//         let rrr=iu.firstChild.textContent.toLowerCase();
//         if(rrr.indexOf(tex)!=-1){
//             flag.push(iu)
//             iu.style.display='block';
            
//         }
//         else{
//             iu.style.display='none';

//         }
//     })
// }
// function ser1(e){
//     console.log("2")
//     let tex=e.target.value.toLowerCase();
//     let r=rem.children;
//     Array.from(r).forEach(function(iu){
        
//         let rrr=iu.querySelector('.pt').textContent.toLowerCase();
//         if(rrr.indexOf(tex)!=-1){
//             let flag1=0;
//             for(let i=0;i<flag.length;i++){
//                 if(flag[i]==iu){
//                     flag1=1;
//                 }
//             }
//             if(flag1==1){
//             iu.style.display='block';}
//         }
//         else{
//             iu.style.display='none';
//         }
//     })
    
// }
let mydeserilizeobj=JSON.parse(localStorage.getItem('myobj'))
document.getElementById('name').value=mydeserilizeobj.name1;
document.getElementById('email').value=mydeserilizeobj.email;
document.getElementById('phone').value=mydeserilizeobj.phone;
document.getElementById('timeforcall').value=mydeserilizeobj.timeforcall;



let func=document.getElementById('but')
func.addEventListener('click',call);
function call(e){
e.preventDefault();

let myobj={
     name1:document.getElementById('name').value,
    email:document.getElementById('email').value,
    phone:document.getElementById('phone').value,
    date:document.getElementById('timeforcall').value
};
let myserializedobj=JSON.stringify(myobj);
localStorage.setItem('myobj',myserializedobj)
}
