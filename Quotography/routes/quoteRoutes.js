const express=require('express');
const router=express.Router();
const Quote=require('../models/quotes');

router.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
});

router.get('/create',(req,res)=>{
    res.render('create',{title:'Create Quote'});
})
router.get('/quotes',(req,res)=>{
    Quote.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'All Quotes', quotes : result})
    })
    .catch((err)=>{
        console.log(err)
    })
})
router.post('/quotes',(req,res)=>{
   const quotes=new Quote(req.body)
   quotes.save()
   .then((result)=>{
    res.redirect('/quotes');
   })
   .catch((err)=>{
    console.log(err);
   })
})


router.get('/quotes/:id', (req, res) => {
    const encodedId = req.params.id.trim();
    const id = decodeURIComponent(encodedId);
  
    Quote.findById(id)
      .then(result => {
        if (!result) {
          // Handle the case where no result is found
          return res.status(404).send('Quote not found');
        }
        res.render('details', { quote: result, title: 'Quote Details' });
      })
      .catch(err => {
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
      });
  });
  router.delete('/quotes/:id', (req, res) => {
    const id = req.params.id;
    
    Quote.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/quotes' });
      })
      .catch(err => {
        console.log(err);
      });
  });
  module.exports=router;