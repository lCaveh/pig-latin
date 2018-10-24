$(document).ready(function() {
  // var vowels = ["o","e","a","u","i","O","E","A","U","I"];
  // var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Y"];
  // $("#formOne").submit(function(event) {
  // event.preventDefault();
  //   var str = $("#sentence").val ();
  //   var words = str.split (' ');
  //   var chars = [];
  //   var resultWord='';
  //   var finalResult="";
  //   words.forEach(function(word){
  //     chars = word.split ('');
  //     var newWord= "";
  //     var num=0;
  //     vowels.forEach(function(vowel){
  //       if (chars[0]==vowel) {
  //         newWord=word+"way";
  //         finalResult+=newWord+" ";
  //       };
  //     });
  //     chars.forEach(function(char,index){
  //       if (ifConsonants(char,consonants) && index==num) {
  //         num++
  //       };
  //       if (index=1) {
  //         if (char=="u" && chars[0]=="q") {
  //           num++;
  //         };
  //       };
  //     });
  //     if (num>0) {
  //       newWord = word.substr(num) + word.substr(0, num);
  //       newWord+="ay";
  //       finalResult+=newWord+" ";
  //     };
  //   });
  //   $("#story").show();
  //   $("#story").append ("<p>"+finalResult+"</p>");
  // });
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var strInput = $("#sentence").val ();
    var words = strInput.split (' ');
    var resultWord='';
    var result="";
    words.forEach(function(word){
      result+=translateToPL(word);
    });
    $("#story").show();
    $("#story").append ("<p>"+result+"</p>");
  });
});
// function ifConsonants(str,consonants){
//   for(var i=0;i<consonants.length;i++){
//     if (str==consonants[i]) {
//       return true;
//       };
//     };
//   return false;
//   };
function translateToPL(str) {
    var pos = str.search(/[aeiou]/i);
    var quPos = str.search(/qu/i);
    if (quPos == 0){
      str = str.substr(1) + str.substr(0, 1)
    }
    if (pos == 0) {
      return str + "way ";
    } else if (pos > 0) {
        return str.slice(pos) + str.slice(0, pos) + "ay ";
    }
}
