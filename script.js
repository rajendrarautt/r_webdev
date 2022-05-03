$(document).ready(function () {
    $('#submit').click(function(){
        let username = $("#uname").val();
        let password = $("password").val();
        if(username == "rajan" && password == "rajan")
        {
            alert("Succesfully Logged in");
        }
    });

    // $('#container_heading').click(function () {
    //     $(this).hide();
    //     $('#container_heading').Show();
    // });
    // $("h3").click(function(){
    //     $(".container_head").fadeOut(3300);
    // });


});

// $(document).ready(function(){
//     $('#home').click(function(){
//
// });
function createTableforABC() {
    let b = "";
    for (let a = 1; a <= 8; a++) {
        b += "ancb djjdjkd " + a + "<br>";
        document.getElementById("container_heading").innerHTML = b;
        
    }
    function submitBtn()
    {
        if($('#uname').val() == "rajan" && $('#password').val()== "rajan")
        alert("Successfully submitted");
        else

        {
            let txt = "Cannot be submitted";
            document.getElementById("submit").innerHTML = txt;
        }
    }
    function checkSubmit()
    {
        var username = $('#uname').val();
        var password = $('#password').val();
        alert(uname +" and" +password);
        console.log(uname);
        console.log(password);
    }
   
}