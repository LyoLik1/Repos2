var db = firebase.firestore();
var url=document.getElementById("inp");
var f=random;
var name=("QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234")
var numb;
function random(){ 
    for( var i=0;i<4;i++){
    numb += name[Math.floor(Math.random() * name.length-1)]; 
    }
    return numb;
}
function saveUrl(){
if (document.getElementById('button').clicked == true){
 random();
}else
{
return false;

}
}
db.collection("url").doc(numb).set({
    URL:""
    
   

})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});






