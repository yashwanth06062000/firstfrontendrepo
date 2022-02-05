const posts=[{title:"post1",body:"post1 body",createdat:new Date().getTime()},
{title:"post2",body:"post2 body",createdat:new Date().getTime()}];

let managing=async()=>{
    // let deletepost=new Promise((resolve,reject)=>{
    //     console.log(posts.length)
    //     if(posts.length>0){
    //         console.log("entererd resolve")
    //         setTimeout(() => {
    //             resolve()
    //             console.log("entered delete");}, 1000);}
            
    //      else{
    //         console.log("entererd reject")

    //         reject("Array is empty now");
    //     }


    // }); 
    let printposts=()=>{
        setInterval(() => {
            setTimeout(()=>{
            let outpost="";
            posts.forEach((post)=>{
                outpost+=`<li>${post.body} last updated:${(new Date().getTime()-post.createdat)/1000} sec ago</li>`;});
                document.body.innerHTML=outpost;
               
            },0)}, 1000);

    }
    let createpost   =(post)=>{return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdat:new Date().getTime()})
            console.log("entered")
            const error=false;
            if(!error){
                resolve();
               console.log("called the printposts")
            }
            else{
                reject("Error:Something went wrong")
            }
            
        },3000);}); }
        await createpost({title:"post3",body:"post3 body",}).then(printposts).catch(err=>console.log(err));

}
managing()

// function printposts(){
//     const timerid=setInterval(() => {
//     setTimeout(()=>{
//     let outpost="";
//     posts.forEach((post)=>{
//         outpost+=`<li>${post.body} last updated:${(new Date().getTime()-post.createdat)/1000} sec ago</li>`;});
//         document.body.innerHTML=outpost;
       
//     },0)}, 1000);
// }



// function createpost(post){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         posts.push({...post,createdat:new Date().getTime()})
//         const error=false;
//         if(!error){
//             resolve();

//         }
//         else{
//             reject("Error:Something went wrong")
//         }
        
//     },0);});
// }

// createpost({title:"post3",body:"post3 body",});

// function createpost4(post,callback1){
//     setTimeout(()=>{posts.push({...post,createdat:new Date().getTime()})},2500);
//     callback1({title:"post3",body:"post3 body",}).then(printposts).catch(err=>console.log(err));
    
// }

// function deletepost(){
//     return new Promise((resolve,reject)=>{
//         console.log(posts.length)
//         if(posts.length>0){
//             console.log("entererd resolve")
//             setTimeout(() => {
//                 resolve()
//                 console.log(posts.length);}, 1000);}
            
//          else{
//             console.log("entererd reject")

//             reject("Array is empty now");
//         }


//     }); 
// }
// setTimeout(() => {
//     deletepost().then(delt).catch(err=>console.log(err))
// }, 2000);
// setTimeout(() => {
//     deletepost().then(delt).catch(err=>console.log(err))
// }, 3000);
// setTimeout(() => {
//     deletepost().then(delt).catch(err=>console.log(err))
// }, 4000);
// setTimeout(() => {
//     deletepost().then(delt).catch(err=>console.log(err))
// }, 5000);
// setTimeout(() => {
//     deletepost().then(delt).catch(err=>console.log(err))
// }, 6000);

// function delt(){
//     posts.pop();
// }
// let promise1=Promise.resolve("hello");
// let promise2=10;
// let promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,"goodbye"));
// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))
// // let updatelastactivitytime=
// var lastupdatedtime=new Date().getHours()
// function printl(){
//     lastupdatedtime=new Date().getHours()
// document.body.innerHTML=`<li>${lastupdatedtime}</li>`;
// }
console.log("person1:shows ticket and goes in")
console.log("person2:shows ticket and goes in")
console.log("person3:shows ticket and goes in")
function waitforwife(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ticket")
            

        },3000)
    })
}
var hungry=waitforwife().then((m)=>{return new Promise((resolve,reject)=>{
    resolve(m+"i am hungry")
})})
var i_wantpopcorn=hungry.then((m)=>{return new Promise((resolve,reject)=>{resolve(m+" popcorn")})})
var iwantbutteronpopcorn=i_wantpopcorn.then((m)=>{return new Promise((resolve,reject)=>{resolve(m+" butter")})})
var Getcooldrinks=iwantbutteronpopcorn.then((m)=>{return new Promise((resolve,reject)=>{resolve(m+" colldrinks")})})
Getcooldrinks.then((m)=>{console.log(m)})

console.log("person4:shows ticket and goes in")




var premovie=async ()=>{
   const wait=  new Promise((resolve,reject)=>{setTimeout(()=>{resolve("ticket")},3000)})
   const ticket=await wait;
   const hungry=new Promise((resolve,reject)=>{resolve(" popcorn")})
   const butter=new Promise((resolve,reject)=>{resolve(" butter")})
   const getcooldrink=new Promise((resolve,reject)=>{resolve(" Coco cola")})
//    const iamhungry=await hungry;
//    console.log(iamhungry)
   
//    const addbutter=await butter;
//    console.log(addbutter)
//    const pleasegetcooldrink=await getcooldrink;
//    console.log(pleasegetcooldrink)
 let[iamhugry,addbutter,pleasegetcooldrink]=await Promise.all([hungry,butter,getcooldrink])
 console.log(iamhugry,addbutter,pleasegetcooldrink)
   
   return ticket




}
premovie().then((m)=>{console.log(m)})






