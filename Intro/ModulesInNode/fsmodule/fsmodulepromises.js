const fs=require("fs");

const path=require("path");
const filename="data.txt1"
const filepath=path.join(__dirname,filename)


//writefile using promises approach
fs.promises.writeFile(filepath,"This is demo data !!","utf-8")
.then(()=>{
    console.log("Data written success !!");

})
.catch((err)=>{
    if(err) console.log(err)
})
//and so on ...now using async await

// asynchronous approach but nonbloacking way

const readfile=async ()=>{
    try{
        const data=await fs.promises.readFile("demo.txt","utf-8")
        console.log(data)


    }
    catch(err){
        console.log(err)

    }
}




readfile();