
var count = 0
$("#number").val(count)
$(".edit-btn").click(()=>{
    var person = prompt("Please enter number", "1");
    person = parseInt(person, 10)
    if (person > 0) {
        $("#number").val(person)
        count = person;
    }
})
$("body").on("keydown", function(e) {
    console.log(e, e.key);
    $("#number").val(count);
    var sel = $("#select").val();
    var selInt = parseInt(sel, 10);
    if(e.key == "ArrowUp"){
        count +=selInt;
    }
    else if(e.key == "ArrowDown"){
        if (!(count ==0)) {
            count -=selInt;
        }
    }
    else{
        count;
    }
})

$(".ArrowUp").on("click", function(e){
    console.log(e.target);
    $("#number").val(count);
    var sel = $("#select").val();
    var selInt = parseInt(sel, 10)
    count +=selInt;
})
$(".lower").on("click", function(e){
    console.log(e.target);
    $("#number").val(count);
    var sel = $("#select").val();
    var selInt = parseInt(sel, 10)
    if(!(count == 0)){
        count -=selInt;
    }
})

$(".reset-btn").click(()=>{
    var con = confirm("Do you want to reset it: ")
    if (con) {
        count = 0;
        $("#number").val(count);
    }
})