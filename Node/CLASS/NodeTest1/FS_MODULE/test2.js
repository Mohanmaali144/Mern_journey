import fs from "fs";
fs.writeFileSync("./input2.txt","hello modulex",(err)=>{
    if(err)
    {
        console.log(err)
    }
});

console.log("continue...")