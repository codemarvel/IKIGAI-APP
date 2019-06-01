const mongoose=require('mongoose');

var purposeSchema=new mongoose.Schema({
   fullName:
   {
     type:String
   },
   passionate:
   {
     type:String
   },
   good:
   {
      type: String
   },
   earnmoney:
   {
     type:String
   },
   worldneeds:
   {
     type: String
   }

});
/*purposeSchema.path('email').validate((val) => {
   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   return emailRegex.test(val); // Assuming email has a text attribute
}, 'invalid e-mail.');*/
mongoose.model('purpose',purposeSchema);
