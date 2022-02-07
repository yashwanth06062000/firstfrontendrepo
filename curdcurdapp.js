
let btn=document.querySelector('.but')
let value=document.getElementById('name')
let counte=0;
let ramu=document.querySelector('.items');
btn.addEventListener('click',addito)
btn.addEventListener('click',addingtocurdcurd)

function addingtocurdcurd(e){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phoneno=document.getElementById('phone').value;
    let obj={
        name:name,
        email:email,
        phone:phoneno
    }
    console.log(obj)
    axios.post("https://crudcrud.com/api/2f4d01999b8e4c6480b7aadd471a18d4/practicedata",obj)


}
function addito(e){
    e.preventDefault();
    let value=document.getElementById('name').value;
    let rp=document.createElement('li')
    rp.className='it'
    rp.id='ibtnc'
    let ttt=document.createTextNode(value)
    rp.append(ttt)
    let bty=document.createElement('button')
    bty.append(document.createTextNode('x'))
    bty.className='ibtn';
    rp.append(bty)
    let ull=document.querySelector('.items')
    ull.appendChild(rp);
}
let rem=document.querySelector('.items')

rem.addEventListener('click',remo)
function remo(e){
    if(e.target.className=='ibtn'){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            rem.removeChild(li);
          }
    }
}
