const express= require('express');
var router=express.Router();
const mongoose=require('mongoose');
const Purpose=mongoose.model('purpose');
router.get('/',(req,res) =>{
  res.render("purpose/addOrEdit",{
    viewTitle:"Insert data"
  });
});
router.post('/purpose/',(req,res) =>{
 if(req.body._id =="")
  insertRecord(req,res);
  else {
    updateRecord(req,res);
  }
});
function insertRecord(req,res){
  var purpose=new Purpose();
  purpose.fullName=req.body.fullName;
  purpose.passionate=req.body.passionate;
  purpose.good=req.body.good;
  purpose.earnmoney=req.body.earnmoney;
  purpose.worldneeds=req.body.worldneeds;
  purpose.save((err,doc) => {
    if(!err)
    res.redirect("/list");
    else {
        console.log("error"+err);
    }
  });
}
function updateRecord(req,res){
  Purpose.findOneAndUpdate({ _id: req.body._id},req.body,{new: true},(err,doc)=>{
    if(!err)
    { res.redirect('/purpose/_id');}
    else {
      console.log("error");
    }
  });
}
router.get("/list",(req,res) =>{

  Purpose.find((err,docs) =>{
    if(!err){
      res.render("purpose/list",{
        list :docs
      });
    }
    else {

        console.log("error in retreiving data from the list:"+err);

    }
  });
});
/*function handleValidationError(err,body)
{
  for(field err.errors
}*/
router.get('/purpose/:id',(req,res) =>{
  Purpose.findById(req.params.id,(err,doc)=>{
    if(!err)
    {
      res.render("purpose/addOrEdit",{
        viewTitle:"Update Purpose",
        purpose: doc
      });
    }
  });
});
router.get('/purpose/delete/:id',(req,res)=>{
  Purpose.findByIdAndRemove(req.params.id,(err,doc) =>{
    if(!err){
      res.redirect('/list');
    }
    else {
      console.log("error");
    }
  });
});
module.exports =router;
