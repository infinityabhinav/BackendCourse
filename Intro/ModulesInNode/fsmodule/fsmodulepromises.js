const fs=require("fs");

const path=require("path");
const filename="data.txt"
const filepath=path.join(__dirname,filename)


//writefile using promises approach
fs.promises.writeFile(filepath,"This is demo data !!","utf-8")
.then(()=>{
    console.log("Data written success !!");

})
.catch((err)=>{
    if(err) console.log(err)
})
//and so on