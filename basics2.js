const posts=[{title:"post1",body:"post1 body",createdat:new Date().getTime()},
{title:"post2",body:"post2 body",createdat:new Date().getTime()}];
function printposts(){
    const timerid=setInterval(() => {
    setTimeout(()=>{
    let outpost="";
    posts.forEach((post)=>{
        outpost+=`<li>${post.body} last updated:${(new Date().getTime()-post.createdat)/1000} sec ago</li>`;});
        document.body.innerHTML=outpost;
       
    },0)}, 1000);
}


function createpost(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push({...post,createdat:new Date().getTime()})
        const error=false;
        if(!error){
            resolve();

        }
        else{
            reject("Error:Something went wrong")
        }
        
    },0);});
}
createpost({title:"post3",body:"post3 body",}).then(printposts).catch(err=>console.log(err));
// createpost({title:"post3",body:"post3 body",});

// function createpost4(post,callback1){
//     setTimeout(()=>{posts.push({...post,createdat:new Date().getTime()})},2500);
//     callback1({title:"post3",body:"post3 body",}).then(printposts).catch(err=>console.log(err));
    
// }

function deletepost(){
    return new Promise((resolve,reject)=>{
        console.log(posts.length)
        if(posts.length>0){
            console.log("entererd resolve")
            setTimeout(() => {
                resolve()
                console.log(posts.length);}, 1000);}
            
         else{
            console.log("entererd reject")

            reject("Array is empty now");
        }


    }); 
}
setTimeout(() => {
    deletepost().then(delt).catch(err=>console.log(err))
}, 2000);
setTimeout(() => {
    deletepost().then(delt).catch(err=>console.log(err))
}, 3000);
setTimeout(() => {
    deletepost().then(delt).catch(err=>console.log(err))
}, 4000);
setTimeout(() => {
    deletepost().then(delt).catch(err=>console.log(err))
}, 5000);
setTimeout(() => {
    deletepost().then(delt).catch(err=>console.log(err))
}, 6000);

function delt(){
    posts.pop();
}
let promise1=Promise.resolve("hello");
let promise2=10;
let promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,"goodbye"));
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))
let updatelastactivitytime=












