let p1 = Promise.resolve(5);
let p2 = Promise.resolve(10);
let p3 = Promise.resolve(15);
let p4 = Promise.resolve(20);

p1.then((res1)=>{ return p2.then((res2)=>res1+res2)}).then((res2)=>{ return p3.then((res3)=>res2+res3)}).then((res3)=>{ return p4.then((res4)=>res3+res4)}).then((res)=>{console.log(res)});