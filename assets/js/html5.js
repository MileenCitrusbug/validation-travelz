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







var PASSerror = document.getElementById("password1");
var CONFPASSerror = document.getElementById("confpass")


function NameValidation() {
  var name = document.getElementById("namechange").value;

  if (name.length == 0) {
    document.getElementById("name-error").innerHTML = "Name required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    var name = document.getElementById("name-error").innerHTML = "Please enter full name";
    return false;
  }
  var name = document.getElementById("name-error").innerHTML = '<i class="fas fa-check"></i> ';
  return true;
}

function EmailValidation() {
  var email = document.getElementById('emailchange').value;
  var validRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!email.match(validRegex)) {
    document.getElementById("email-error").innerHTML = "Please enter valid email";
    return false;
  }
  if (email.length == 0) {
    document.getElementById("email-error").innerHTML = "Email required";
    return false;
  }
  document.getElementById("email-error").innerHTML = '<i class="fas fa-check"></i>';
  return true;

}

function passwordValidation() {
  var pw = document.getElementById("password").value;
  var validpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  if (pw == "") {
    document.getElementById("password1").innerHTML = "**Fill the password please!";
    return false;
  }
  if (pw.length < 8) {
    document.getElementById("password1").innerHTML = "**Password length must be atleast 8 characters";
    return false;
  }
  if (!pw.match(validpass)) {
    document.getElementById("password1").innerHTML = "**password should contain atleast one number and one special character";
    return false;

  }else{
    document.getElementById("password1").innerHTML = "";
  PASSerror.innerHTML = '<i class="fas fa-check"></i> ';
  return true;
  }
}

function ConfpassValidation() {
  var p1 = document.getElementById("password").value;
  var p2 = document.getElementById("confirm-password").value;
  if (p1 != p2) {
    document.getElementById("confpass").innerHTML = "**Please enter same password!";
  }
  else {
    document.getElementById("confpass").innerHTML = '<i class="fas fa-check"></i> ';
    return true;
  }
}


function OccupationValidation() {


  var getSelectedValue = document.querySelector(
    'input[name="occupation-select"]:checked');

  if (getSelectedValue != null) {
    document.getElementById("occupation_error").innerHTML = "";
    return true;
  }
  else {
    document.getElementById("occupation_error").innerHTML = "**Select occupation!";
    return false;
  }
}


function AgeValidation() {
  var getSelectedValue = document.querySelector(
    'input[name="age-group-select"]:checked');

  if (getSelectedValue != null) {
    document.getElementById("age_error").innerHTML = "";

    return true;


  }
  else {
    if (document.getElementById('customCheck').checked) { return true }
    else {
      document.getElementById("age_error").innerHTML = "**Select age group!";
      return false;
    }
  }

}


function AreaValidation() {
  var getSelectedValue = document.getElementsByClassName("form-checkbox form-checkbox-areas");
  var count = 0;
  for (var i = 0; i < getSelectedValue.length; i++) {
    if (getSelectedValue[i].checked === true) {
      count++;
    }
  } if (count < 2) {
    document.getElementById("area_error").innerHTML = "**Select minimum 2 group!";
    return false;
  }
  else { document.getElementById("area_error").innerHTML = ""; }
  return true;
}


function UserValidation() {
  var getSelectedValue = document.getElementsByClassName("form-checkbox form-checkbox-follow");
  var count = 0;
  for (var i = 0; i < getSelectedValue.length; i++) {
    if (getSelectedValue[i].checked === true) {
      count++;
    }

  } if (count < 3) {
    document.getElementById("user_error").innerHTML = "**Select minimum 3 user!";
    return false;
  } else { document.getElementById("user_error").innerHTML = ""; }
  return true;

}


function GroupValidation() {
  var getSelectedValue = document.getElementsByClassName("form-checkbox form-checkbox-groups");
  var count = 0;
  for (var i = 0; i < getSelectedValue.length; i++) {
    if (getSelectedValue[i].checked === true) {
      count++;
    }

  } if (count < 3) {
    document.getElementById("group_error").innerHTML = "**Select minimum 3 group!";
    return false;
  } else { document.getElementById("group_error").innerHTML = ""; }
  return true;

}

function WhatnextValidation() {
  var getSelectedValue = document.querySelector(
    'input[name="what-to-do-select"]:checked');

  if (getSelectedValue != null) {
    return true;
  }
  else {

    return false;
  }

}
window.addEventListener('scroll',( )=>{

  
  const scrolled=window.scrollY;
  console.log(scrolled);
  if(!NameValidation() || !EmailValidation()){
    document.getElementById("ocphide").style.display = "none";
    
  }else{
   
    document.getElementById("ocphide").style.display = "initial";
  }

  if(!OccupationValidation()){
    document.getElementById("agehide").style.display = "none";
    
  }else{
   
    document.getElementById("agehide").style.display = "initial";
  }

  if(!AgeValidation()){
    document.getElementById("areahide").style.display = "none";
    
  }else{
   
    document.getElementById("areahide").style.display = "initial";
  }

  if(!AreaValidation()){
    document.getElementById("userhide").style.display = "none";
    
  }else{
   
    document.getElementById("userhide").style.display = "initial";
  }

  if(!UserValidation()){
    document.getElementById("grouphide").style.display = "none";
    
  }else{
   
    document.getElementById("grouphide").style.display = "initial";
  }

  if(!GroupValidation()){
    document.getElementById("passhide").style.display = "none";
    
  }else{
   
    document.getElementById("passhide").style.display = "initial";
  }
debugger
  if(!passwordValidation() || !ConfpassValidation()){
    // alert("pass")
    console.log( document.getElementById("nexthide"))
    document.getElementById("nexthide").style.display = "none";
    
  }else{
   
    document.getElementById("nexthide").style.display = "initial";}
})


// function SubmitValidation() {
//   if (!NameValidation()) {

//     NAMEerror.innerHTML = "Name required";
//   }
//   if (!EmailValidation()) {
//     EMAILerror.innerHTML = "Email required";
//   }
//   if (!OccupationValidation()) {
//     document.getElementById("occupation_error").innerHTML = "**Select occupation!";

//   } else { document.getElementById("occupation_error").innerHTML = ""; }
//   if (!AgeValidation()) {
//     document.getElementById("age_error").innerHTML = "**Select age group!";
//   } else { document.getElementById("age_error").innerHTML = ""; }
//   if (!AreaValidation()) {
//     document.getElementById("area_error").innerHTML = "**Select area to follow!";
//   } else { document.getElementById("area_error").innerHTML = ""; }
//   if (!UserValidation()) {
//     document.getElementById("user_error").innerHTML = "**Select user to follow!";
//   } else { document.getElementById("user_error").innerHTML = ""; }
//   if (!GroupValidation()) {
//     document.getElementById("group_error").innerHTML = "**Select group to follow!";
//   } else { document.getElementById("group_error").innerHTML = ""; }
//   if (!WhatnextValidation()) {
//     document.getElementById("next_error").innerHTML = "**Please choose!";
//   } else {


//     let Registeration_data = [];
//     let data = {
//       name: document.getElementById("namechange").value,
//       email: document.getElementById("emailchange").value,
//       occupation: document.querySelector('input[name="occupation-select"]:checked').id,
//       age_group: document.querySelector('input[name="age-group-select"]:checked').id,
//       follow_area: document.querySelector('input[class="form-checkbox form-checkbox-areas"]:checked').id,
//       follow_user: document.querySelector('input[class="form-checkbox form-checkbox-follow"]:checked').id,
//       follow_group: document.querySelector('input[class="form-checkbox form-checkbox-groups"]:checked').id,
//       password: document.getElementById("password").value,
//       next_step: document.querySelector('input[name="what-to-do-select"]:checked').value,
//     }

//     Registeration_data.push(data);
//     localStorage.setItem("user_data", JSON.stringify(Registeration_data));
//     console.log(Registeration_data)
//     window.location.href = "user_data.html";


//   }
// }

// window.addEventListener('scroll',( )=>{

// const tscroll=document.documentElement.scrollHeight - window.innerHeight;
// const scrolled=window.scrollY;
// console.log(scrolled);


//   if(!NameValidation() || !EmailValidation()){
//   // alert("Please!! fill the Name and Email field first ")
//   window.scrollTo({
//     top: 10,
//     left:0,
//     behavior: 'instant'
//     });

//   }


//     if(!OccupationValidation()){

//     window.scrollTo({
//       top: 700,
//       left:0,
//       behavior: 'instant'
//       });



//     }

    
//       if(!AgeValidation()){
//       // alert("Please!! fill the Name and Email field first ")
//       window.scrollTo({
//         top: 1500,
//         left:0,
//         behavior: 'instant'
//         });

//       }

    
//         if(!AreaValidation()){
//         // alert("Please!! fill the Name and Email field first ")
//         window.scrollTo({
//           top: 2600,
//           left:0,
//           behavior: 'instant'
//           });

//         }

     
//           if(!UserValidation()){
//           // alert("Please!! fill the Name and Email field first ")
//           window.scrollTo({
//             top: 3500,
//             left:0,
//             behavior: 'instant'
//             });

//           }

          
//             if(!GroupValidation()){
//             // alert("Please!! fill the Name and Email field first ")
//             window.scrollTo({
//               top: 4600,
//               left:0,
//               behavior: 'instant'
//               });

//             }


//               if(!passwordValidation() || !ConfpassValidation()){
//               // alert("Please!! fill the Name and Email field first ")
//               window.scrollTo({
//                 top: 5400,
//                 left:0,
//                 behavior: 'instant'
//                 });

//               }

// });

// var griding = document.getElementsByClassName("addarea");
// console.log(griding)
// fetch("area.json")
//   .then(res => res.json())
//   .then(json => addArea(griding, json));
// //  .then(json=>console.log(json));

// function addArea(appendin, value) {
//   let div = document.createElement('div');
//   div.className = "row get-row mr-minus-8 addarea";
//   // console.log(div)

//   let { lable, image, title } = value;
//   console.log("sdv"+lable, image, title)

//   div.innerHTML = `
//   <div class="col-lg-3 col-md-3 grid-20 plr-8 areabox">
//   <div class="img-checkbox-card-box area-card-box">
//           <label for="${lable}" class="label-box">
//               <div class="check-box-position">
//                   <button class="checkbox-round-div">
//                       <i class="fe fe-check fe-custom"></i>
//                   </button>
//               </div>
//               <div class="img-banner">
//                   <img src="${image}"
//                       class="img-fluid img-responsive" alt="area" />
//               </div>
//               <div class="check-title-row">
//                   <h4 class="area1">${title}</h4>
//               </div>
//           </label>
//           <input type="checkbox"
//               class="form-checkbox form-checkbox-areas"
//               id=""${lable}" onclick="AreaValidation()" />
//       </div>
//   </div>
//    `
//    console.log(div)
//   appendin.appendChild(div);


// }





async function search_area() {
  {let searchbox = document.getElementById("area_name").value.toUpperCase();

  console.log(searchbox)
  const respo = await fetch ('area.json');
  const data = await respo.json();
  // console.log(data)

  let op1 = ""
  for (i of data){
  areas=i.title.toUpperCase();
  // console.log(areas)
  if (areas.indexOf(searchbox) > -1){
    op1+= `
   
      <div class="img-checkbox-card-box area-card-box">
              <label for="${i.lable}" class="label-box">
                  <div class="check-box-position">
                      <button class="checkbox-round-div">
                          <i class="fe fe-check fe-custom"></i>
                      </button>
                  </div>
                  <div class="img-banner">
                      <img src="${i.image}"
                          class="img-fluid img-responsive" alt="area" />
                  </div>
                  <div class="check-title-row">
                      <h4 class="area1">${i.title}</h4>
                  </div>
              </label>
              <input type="checkbox"
                  class="form-checkbox form-checkbox-areas"
                  id="${i.lable}" onclick="AreaValidation()" />
          </div>
      
    `
    
  }
//   else{ document.getElementById("addarea").innerHTML = "";
//  }

document.getElementById("addarea").innerHTML = ""
document.getElementById("addarea").innerHTML = op1;


  }}}



// function search_user() {
//   {
//     const searchbox = document.getElementById("user_name").value.toUpperCase();
//     console.log(searchbox)
//     const searcharea = document.getElementsByClassName("areabox");
//     // console.log("sarea"+searcharea)

//     const area1 = document.getElementsByClassName("area1");
//     // console.log(area1)

//     // const areaname = searcharea.getElementsByTagName("h4");
//     // debugger
//     for (let i = 0; i < area1.length; i++) {
//       // console.log(i)
//       let span = area1[i].innerHTML.toUpperCase();
//       // console.log(span)
//       if (span.indexOf(searchbox) > -1) {
//         // console.log("match")
//         searcharea[i].style.display = "initial";

//       } else {
//         // console.log("dont match")
//         searcharea[i].style.display = "none";
//       }
//     }




//   }
// }



let https = new XMLHttpRequest();
https.open('get', 'area.json', true);
https.send();

https.onload = function () {


  
  if (this.readyState == 4 && this.status == 200) {
    let area = JSON.parse(this.responseText)
    // .filter(({title}) => title === 'australia');;
    // console.log(area)
    let op = "";

    for (let i of area) {

        // console.log(i)


          op+= `
      <div class="col-lg-3 col-md-3 grid-20 plr-8 areabox">
        <div class="img-checkbox-card-box area-card-box">
                <label for="${i.lable}" class="label-box">
                    <div class="check-box-position">
                        <button class="checkbox-round-div">
                            <i class="fe fe-check fe-custom"></i>
                        </button>
                    </div>
                    <div class="img-banner">
                        <img src="${i.image}"
                            class="img-fluid img-responsive" alt="area" />
                    </div>
                    <div class="check-title-row">
                        <h4 class="area1">${i.title}</h4>
                    </div>
                </label>
                <input type="checkbox"
                    class="form-checkbox form-checkbox-areas"
                    id="${i.lable}" onclick="AreaValidation()" />
            </div>
        </div>
      `
        }
        // console.log(op)
        document.getElementById("addarea").innerHTML = op;

      }
    }