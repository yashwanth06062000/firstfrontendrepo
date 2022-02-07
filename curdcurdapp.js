
let btn=document.querySelector('.but')
let value=document.getElementById('name')
let counte=0;
let ramu=document.querySelector('.items');
var flag=0;
var gid=123;
btn.addEventListener('click',addingtocurdcurd)
window.addEventListener('DOMContentLoaded', (event) => {
    axios
    .get("https://crudcrud.com/api/17b12ba5ea324d1ba99cce55f48da744/practicedata").then((res)=>{
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
    let editbutton=document.createElement('button')
    editbutton.append(document.createTextNode('edit'))
    newbutton.append(document.createTextNode('delete'))
    newbutton.className='ibtn';
    editbutton.className='editbtn';
    newli.append(newbutton)
    newli.append(editbutton)
    let existinglist=document.querySelector('.items')
    existinglist.appendChild(newli);


}
// function deletetheuser(user){
//     axios
//     .delete(`https://crudcrud.com/api/37b45a1cb197453889bd823b3d28f830/practicedata/${user}`)
// }
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
    if(flag==0){
   axios
    .post("https://crudcrud.com/api/17b12ba5ea324d1ba99cce55f48da744/practicedata",obj)
    .then((err)=>{displayyallusersfromcurdcurd(err.data)})}
    else{
        axios
        .put(`https://crudcrud.com/api/17b12ba5ea324d1ba99cce55f48da744/practicedata/${gid}`,obj)
        .then((err)=>{document. location. reload(); flag=0;})}
    }

let ulitems=document.querySelector('.items')

ulitems.addEventListener('click',removeuser)
ulitems.addEventListener('click',edituser)

function edituser(e){
    if(e.target.className=='editbtn'){
        if(confirm('please edit the details in the populated area')){
            flag=1
            var lx = e.target.parentElement;
            let name1=lx.firstChild.textContent;
            axios
            .get("https://crudcrud.com/api/17b12ba5ea324d1ba99cce55f48da744/practicedata").then((res)=>{
                for(let i=0;i<res.data.length;i++){
                    if(res.data[i].name.localeCompare(name1)==0){
                        console.log("entered")
                        document.getElementById('name').value=res.data[i].name
                        document.getElementById('email').value=res.data[i].email
                        document.getElementById('phone').value=res.data[i].phone
                        gid=res.data[i]._id;
                    //     axios
                    // .delete(`https://crudcrud.com/api/17b12ba5ea324d1ba99cce55f48da744/practicedata/${res.data[i]._id}`)
                    // .then(()=>{ulitems.removeChild(lx);})
                    // .catch(err=>console.log(err))
                    }
                }
            })
            
            
        }
    }
}

function removeuser(e){
    if(e.target.className=='ibtn'){
        if(confirm('Are You Sure?')){
            var lx = e.target.parentElement;
            let name1=lx.firstChild.textContent;
            axios
            .get("https://crudcrud.com/api/17b12ba5ea324d1ba99cce55f48da744/practicedata").then((res)=>{
                for(let i=0;i<res.data.length;i++){
                    if(res.data[i].name.localeCompare(name1)==0){
                        axios
                    .delete(`https://crudcrud.com/api/17b12ba5ea324d1ba99cce55f48da744/practicedata/${res.data[i]._id}`)
                    .then(()=>{ulitems.removeChild(lx);})
                    .catch(err=>console.log(err))
                    }
                }
            })
            
            
          }
    }
}
