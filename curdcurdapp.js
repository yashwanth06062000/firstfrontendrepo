
let btn=document.querySelector('.but')
let value=document.getElementById('name')
let counte=0;
let ramu=document.querySelector('.items');
btn.addEventListener('click',addingtocurdcurd)
window.addEventListener('DOMContentLoaded', (event) => {
    axios
    .get("https://crudcrud.com/api/37b45a1cb197453889bd823b3d28f830/practicedata").then((res)=>{
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
function deletetheuser(user){
    axios
    .delete(`https://crudcrud.com/api/37b45a1cb197453889bd823b3d28f830/practicedata/${user}`)
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
   axios
    .post("https://crudcrud.com/api/37b45a1cb197453889bd823b3d28f830/practicedata",obj)
    .then((err)=>{displayyallusersfromcurdcurd(err.data)})
}
let ulitems=document.querySelector('.items')

ulitems.addEventListener('click',removeuser)
function removeuser(e){
    if(e.target.className=='ibtn'){
        if(confirm('Are You Sure?')){
            var lx = e.target.parentElement;
            let name1=lx.firstChild.textContent;
            axios
            .get("https://crudcrud.com/api/37b45a1cb197453889bd823b3d28f830/practicedata").then((res)=>{
                for(let i=0;i<res.data.length;i++){
                    if(res.data[i].name.localeCompare(name1)==0){
                        axios
                    .delete(`https://crudcrud.com/api/37b45a1cb197453889bd823b3d28f830/practicedata/${res.data[i]._id}`)
                    .then(()=>{ulitems.removeChild(lx);})
                    .catch(err=>console.log(err))
                    }
                }
            })
            
            
          }
    }
}
