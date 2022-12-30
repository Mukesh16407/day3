const express = require('express');
const fs = require('fs')
const app = express();

app.use(express.json())



app.get('/',(req,res)=>{
    const data = fs.readFileSync('./db.json','utf-8');
    const parseData = JSON.parse(data)
    console.log(parseData);
    res.send(parseData)
   
});


app.post('/addData',(req,res)=>{
    const data = fs.readFileSync('./db.json','utf-8');
    console.log(data)
    const parseData = JSON.parse(data);
    parseData.todos.push(req.body)
    
    fs.writeFileSync('./db.json',JSON.stringify(parseData))
    res.send("yo successfully add student")
})

app.put('/updateTodo/:id',(req,res)=>{
    const data = fs.readFileSync('./db.json','utf-8');

    console.log(req.body);
    res.send("successfully update data")
})
app.delete('/deleteTodo/:id',(req,res)=>{
    const data = fs.readFileSync('./db.json','utf-8');
    
    const parseData = JSON.parse(data);

    
   parseData.todos.filter(element => {
    if(req.body.id !==element.id ){
      return  fs.writeFileSync('./db.json',JSON.stringify(parseData)) 
    }else{
        console.log("Error")
    }
   });
   res.send("you successfully delete item")
})


app.listen(2345,() =>{
    console.log("Listening on port 2345")
})