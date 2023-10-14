const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const QuoteSchema=new Schema({
 title:{
    type:String,
    required: true
 },
 quote:{
    type:String,
    required: true
 },
 name:{
    type:String,
    required: true
 }
},{timestamps:true});
const Quote=mongoose.model('Quote',QuoteSchema)
module.exports=Quote;