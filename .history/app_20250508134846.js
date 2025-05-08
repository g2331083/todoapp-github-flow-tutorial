$("addTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todoList".append("<li><input tyoe='checkbox'>" + inputTodo + "</li>");)
});