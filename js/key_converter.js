// tormahiri 2014 09-26
$("document").ready(function(){
    window.addEventListener("load",function(e){
$(".val").val($(".val").val().replace(/D/ig,"")+"ژ")

    },false);

         
    
    $("#kimmat").keyup(function(e){
       var keys=[];
       keys[e.keyCode] = true;


 
        // "/" balgisi
     if(keys[191]){
        var hamza="/";
        $(this).val($(this).val().replace("/","")+"ئ")

  
         
     }
       if(keys[66]){
        $(this).val($(this).val().replace(/b/g,"")+"ب")
     }

     //f
       if(keys[70]){
        $(this).val($(this).val().replace(/f/g,"")+"ا")
     }
   
       if(keys[71]){
        $(this).val($(this).val().replace(/g/g,"")+"ە")
     }
      if(keys[16]){
        $(this).val($(this).val().replace(/h/i,"")+"ى")
     }
 

//q
 if(keys[81]){

        $(this).val($(this).val().replace(/q/g,"")+"چ");
     }
//w
 if(keys[87]){

        $(this).val($(this).val().replace(/w/g,"")+"ۋ");
     }

//e
 if(keys[69]){

        $(this).val($(this).val().replace(/e/g,"")+"ې");
     }
//t
 if(keys[84]){

        $(this).val($(this).val().replace(/t/g,"")+"ت");
     }

//l
if(keys[76]){

        $(this).val($(this).val().replace(/l/g,"")+"ل");
     }
     // h
if(keys[72]){

        $(this).val($(this).val().replace(/h/g,"")+"ى");
     }

//m
if(keys[77]){

        $(this).val($(this).val().replace(/m/g,"")+"م");
     }

//ر
if(keys[82]){

        $(this).val($(this).val().replace(/r/g,"")+"ر");
     }
//ي
if(keys[89] ){

        
        $(this).val($(this).val().toLowerCase().replace(/Y/ig,"")+"ي");

     }
    
//ق
if(keys[74] ){

        
        $(this).val($(this).val().toLowerCase().replace(/j/g,"")+"ق");

     }
    //س
if(keys[83] ){

        
        $(this).val($(this).val().toLowerCase().replace(/s/g,"")+"س");

     }
//d =68
if(keys[68] ){

    $(this).val($(this).val().replace(/d/g,"")+"د");
    
}


});

})
