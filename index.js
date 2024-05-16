import axios from "axios";
import express from "express";
const app=express();
const port=3000;
//const url=""
const args=process.argv.slice(0);
const portN=args.find( arg=> arg.startsWith('port='));
if(portN){
    port=portN.split('='.at(1));
}
else{
    console.log('running on default port number')
}
app.listen(port,()=>{
    console.log(`App started  on http://localhost:${port}`);
    //console.log(args);
    console.log(portN);
});
app.get('/',(request,response)=>{
    console.log(`hello`);
    response.send(`hello wold`);
});
app.get('/contact',(request,response)=>{
    console.log(`contact`);
    response.send(`please contact us`);
});
app.get('/about',(request,response)=>{
    console.log(`about`);
    response.send(`about our company`);
});


//console.log(process);

// console.log(`node project`);
// const url=`http://localhost:8000/emp/get-all-emps`;
// import axios from 'axios';
// axios.get(url)
// .then(res=>console.log(res))
// .catch(err=>console.log(err));