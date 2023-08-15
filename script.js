var inputtxt = document.getElementById("txt");
var inputtxt_1 = document.getElementById("txt_1");
function substract(){
    window.alert("რიცხვების სხვაობა:" +(Number(inputtxt.value) - Number(inputtxt_1.value)));
}
function add(){
    window.alert("რიცხვების ჯამი:" + (Number(inputtxt.value) + Number(inputtxt_1.value)));
}

function multiply(){
    window.alert("რიცხვების ნამრავლი:" + (Number(inputtxt.value) * Number(inputtxt_1.value)));
}

function divide(){
    window.alert("რიცხვების განაყოფი:"+ (Number(inputtxt.value) / Number(inputtxt_1.value)));
}