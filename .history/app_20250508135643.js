$("#addTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val("");
});

$(document).on("change", "input[type=checkbox", function () {

})