$(document).ready(function () {


    var database = firebase.database();

    $("#add-employee").on("click", function () {
    
        var name = $("#name").val();
        var role = $("#role").val();
        var start_date = $("#start-date").val();
        var monthly_rate = $("#monthly-rate").val();
        database.ref().push({
            name: name,
            role: role,
            start_date: start_date, 
            monthly_rate: monthly_rate
        });
    });
});
