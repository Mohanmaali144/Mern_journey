
const first = (n)=>{

    setTimeout(()=>{
        console.log(n);
    },1000);
}

const second = (n)=>{

    setTimeout(()=>{
        second("second");
        console.log(n);
    },1000);
}



const third = (n)=>{

    setTimeout(()=>{
        console.log(n);
        third("third");
    },700);
}

first("first");
