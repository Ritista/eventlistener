let a=document.getElementById("add");
let b=document.getElementById("sub");
let c=document.getElementById("number");
let d=document.getElementById("reset");
// let count=0;
// c.textContent=count;
// a.addEventListener("click",()=>{
//     count++;
//     c.textContent=count;
// })
// a.addEventListener("click",()=>{
//     count--;
//     c.textContent=count;
// })
let count=0;
a.addEventListener("click",()=>{
    if(count<10){
        count++;
        c.textContent=count;
    }
    else{
        alert("cannot go more than 10");
    }
})

b.addEventListener("click",()=>{
    if(count>0){
    count--;
    c.textContent=count;
    }
    else{
        alert("cannot go less than 0");
    }
})
d.addEventListener("click",()=>{
    c.textContent=0;
})

