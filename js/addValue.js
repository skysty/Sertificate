import {countTags} from "../js/countTags.js"
addValue(countTags());
function addValue(num) {
    var s = 15*num;
    var obj = document.getElementsByClassName("textProg")[0].style.paddingTop = s + "px";  
    return obj;
}