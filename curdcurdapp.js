
let btn=document.querySelector('.but')
let value=document.getElementById('name')
let counte=0;
let ramu=document.querySelector('.items');
btn.addEventListener('click',addingtocurdcurd)
window.addEventListener('DOMContentLoaded', (event) => {
    axios
    .get("https://crudcrud.com/api/2f4d01999b8e4c6480b7aadd471a18d4/practicedata").then((res)=>{
        for(let i=0;i<res.data.length;i++){
            displayyallusersfromcurdcurd(res.data[i])
        }
    })

});
function displayyallusersfromcurdcurd(user){
    let name=user.name;
    let newli=document.createElement('li')
    newli.className='it'
    newli.id='ibtnc'
    let textnode=document.createTextNode(name)
    newli.append(textnode)
    let newbutton=document.createElement('button')
    newbutton.append(document.createTextNode('x'))
    newbutton.className='ibtn';
    newli.append(newbutton)
    let existinglist=document.querySelector('.items')
    existinglist.appendChild(newli);


}

function addingtocurdcurd(e){
    e.preventDefault()
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phoneno=document.getElementById('phone').value;
    let obj={
        name:name,
        email:email,
        phone:phoneno
    }
    console.log("entered")
    axios
    .post("https://crudcrud.com/api/2f4d01999b8e4c6480b7aadd471a18d4/practicedata",obj)
    .then((err)=>{displayyallusersfromcurdcurd(err.data)})
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
