/*! HTML5 Shiv v3.6 stable | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
(function (l, f) {
  function m() { var a = e.elements; return "string" == typeof a ? a.split(" ") : a } function i(a) { var b = n[a[o]]; b || (b = {}, h++, a[o] = h, n[h] = b); return b } function p(a, b, c) { b || (b = f); if (g) return b.createElement(a); c || (c = i(b)); b = c.cache[a] ? c.cache[a].cloneNode() : r.test(a) ? (c.cache[a] = c.createElem(a)).cloneNode() : c.createElem(a); return b.canHaveChildren && !s.test(a) ? c.frag.appendChild(b) : b } function t(a, b) {
    if (!b.cache) b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag();
    a.createElement = function (c) { return !e.shivMethods ? b.createElem(c) : p(c, a, b) }; a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/\w+/g, function (a) { b.createElem(a); b.frag.createElement(a); return 'c("' + a + '")' }) + ");return n}")(e, b.frag)
  } function q(a) {
    a || (a = f); var b = i(a); if (e.shivCSS && !j && !b.hasCSS) {
      var c, d = a; c = d.createElement("p"); d = d.getElementsByTagName("head")[0] || d.documentElement; c.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
      c = d.insertBefore(c.lastChild, d.firstChild); b.hasCSS = !!c
    } g || t(a, b); return a
  } var k = l.html5 || {}, s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, r = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i, j, o = "_html5shiv", h = 0, n = {}, g; (function () {
    try {
      var a = f.createElement("a"); a.innerHTML = "<xyz></xyz>"; j = "hidden" in a; var b; if (!(b = 1 == a.childNodes.length)) {
        f.createElement("a");
        var c = f.createDocumentFragment(); b = "undefined" == typeof c.cloneNode || "undefined" == typeof c.createDocumentFragment || "undefined" == typeof c.createElement
      } g = b
    } catch (d) { g = j = !0 }
  })(); var e = {
    elements: k.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: !1 !== k.shivCSS, supportsUnknownElements: g, shivMethods: !1 !== k.shivMethods, type: "default", shivDocument: q, createElement: p, createDocumentFragment: function (a,
      b) { a || (a = f); if (g) return a.createDocumentFragment(); for (var b = b || i(a), c = b.frag.cloneNode(), d = 0, e = m(), h = e.length; d < h; d++)c.createElement(e[d]); return c }
  }; l.html5 = e; q(f)
})(this, document);





var NAMEerror = document.getElementById("name-error");
var EMAILerror = document.getElementById("email-error");
var SUBMITerror = document.getElementById("fill");
var PASSerror = document.getElementById("password1");
var CONFPASSerror = document.getElementById("confpass")

function NameValidation() {
  var name = document.getElementById("namechange").value;
  if (name.length == 0) {
    NAMEerror.innerHTML = "Name required";
    return false;
  }
  if (!name.match( /^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    NAMEerror.innerHTML = "Please enter full name";
    return false;
  }
  NAMEerror.innerHTML = '<i class="fas fa-check"></i> ';
  return true;
}

function EmailValidation() {
  var email = document.getElementById('emailchange').value;
  var validRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!email.match(validRegex)) {
    EMAILerror.innerHTML = "Please enter valid email";
    return false;
  }
  if (email.length == 0) {
    EMAILerror.innerHTML = "Email required";
    return false;
  }
  EMAILerror.innerHTML = '<i class="fas fa-check"></i>';
  return true;

}

function passwordValidation(){
  var pw = document.getElementById("password").value;
  var validpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  if(pw == "") {  
    document.getElementById("password1").innerHTML = "**Fill the password please!";  
    return false;  
 }  
 if(pw.length < 8) {  
  document.getElementById("password1").innerHTML = "**Password length must be atleast 8 characters";  
  return false;  
} 
if  (!pw.match(validpass)) {
  document.getElementById("password1").innerHTML = "**password should contain atleast one number and one special character";  
  return false;  

}
PASSerror.innerHTML = '<i class="fas fa-check"></i> ';
return true;

}

function ConfpassValidation(){
var p1=document.getElementById("password").value;
var p2=document.getElementById("confirm-password").value;
if(p1!=p2){
  document.getElementById("confpass").innerHTML = "**Please enter same password!";
}
else{
document.getElementById("confpass").innerHTML =   '<i class="fas fa-check"></i> ';
 return true;}
}


function OccupationValidation() {
  
  
    var getSelectedValue = document.querySelector(   
        'input[name="occupation-select"]:checked');   
        
    if(getSelectedValue != null) {   
        return true; 
    }   
    else {   
      document.getElementById("occupation_error").innerHTML="";
       return false; 
    }   
}  


function AgeValidation(){
  var getSelectedValue = document.querySelector(   
    'input[name="age-group-select"]:checked');   
    
if(getSelectedValue != null) {   
 
  return true;


}   
else {   
  if(document.getElementById('customCheck').checked)  
  {return true}
  else{ 
  return false; 
} }

}


function AreaValidation(){
  var getSelectedValue = document.getElementsByClassName("form-checkbox form-checkbox-areas");
  var count = 0;
  for (var i=0;i<getSelectedValue.length;i++){
    if(getSelectedValue[i].checked===true){
      count++;
    }  
  }if (count<2){
    document.getElementById("area_error").innerHTML="**Select minimum 2 group!";
    return false;
  }
  else { document.getElementById("area_error").innerHTML="";}
    return true;
}


function UserValidation(){
  var getSelectedValue = document.getElementsByClassName("form-checkbox form-checkbox-follow");
  var count = 0;
  for (var i=0;i<getSelectedValue.length;i++){
    if(getSelectedValue[i].checked===true){
      count++;}
      
   }if (count<3){
    document.getElementById("user_error").innerHTML="**Select minimum 3 user!";
    return false;
  } else { document.getElementById("user_error").innerHTML="";}
  return true;
    
}


function GroupValidation(){
  var getSelectedValue = document.getElementsByClassName("form-checkbox form-checkbox-groups");
  var count = 0;
  for (var i=0;i<getSelectedValue.length;i++){
    if(getSelectedValue[i].checked===true){
      count++;}
   
    }if (count<3){
      document.getElementById("group_error").innerHTML="**Select minimum 3 group!";
      return false;
    } else { document.getElementById("group_error").innerHTML="";}
    return true;
    
}

function WhatnextValidation(){
  var getSelectedValue = document.querySelector(   
    'input[name="what-to-do-select"]:checked');   
    
if(getSelectedValue != null) {   
    return true; 
}   
else {   
 
   return false; 
}

}






function SubmitValidation() {
  if (!NameValidation() ) {
    
    NAMEerror.innerHTML = "Name required";
 }
  if ( !EmailValidation()){
    EMAILerror.innerHTML = "Email required";
  }
  if (!OccupationValidation()){
    document.getElementById("occupation_error").innerHTML="**Select occupation!";

  }else{ document.getElementById("occupation_error").innerHTML="";}
  if(!AgeValidation()){
    document.getElementById("age_error").innerHTML="**Select age group!";
  }else{ document.getElementById("age_error").innerHTML="";}
  if(!AreaValidation()){
    document.getElementById("area_error").innerHTML="**Select area to follow!";
  }else{ document.getElementById("area_error").innerHTML="";}
  if(!UserValidation()){
    document.getElementById("user_error").innerHTML="**Select user to follow!";
  }else{ document.getElementById("user_error").innerHTML="";}
  if(!GroupValidation()){
    document.getElementById("group_error").innerHTML="**Select group to follow!";
  }else {document.getElementById("group_error").innerHTML="";}
  if(!WhatnextValidation()){
    document.getElementById("next_error").innerHTML="**Please choose!";
  }else{debugger
  
     let Registeration_data=[];
    //  var user_name
    //  element = document.getElementById("namechange")
    //  if ( element!= null) {
    //      user_name = element.value;
    //  }
    //  else {
    //  user_name = null;
    //  }
    //  var user_email
    //  element =  document.getElementById("emailchange")
    //  if ( element != null) {
    //   user_email = element.value;
    //  }
    //  else {
    //   user_email = null;
    //  }

 
     let data = {
       name:document.getElementById("namechange").value,
       email: document.getElementById("emailchange").value,
       occupation: document.querySelector('input[name="occupation-select"]:checked').id,
       age_group: document.querySelector('input[name="age-group-select"]:checked').id,
       follow_area: document.querySelector('input[class="form-checkbox form-checkbox-areas"]:checked').id,
       follow_user: document.querySelector('input[class="form-checkbox form-checkbox-follow"]:checked').id,
       follow_group: document.querySelector('input[class="form-checkbox form-checkbox-groups"]:checked').id,
       password:document.getElementById("password").value,
       next_step:  document.querySelector('input[name="what-to-do-select"]:checked').value,
      }
      
      // Registeration_data.push(data);
    
      Registeration_data.push(data);
      // var x= JSON.stringify (Registeration_data);
      localStorage.setItem("user_data",JSON.stringify(Registeration_data));  
      console.log( Registeration_data)
      window.location.href = "user_data.html";

  // window.location.href = "index.html";
  }
  }
  