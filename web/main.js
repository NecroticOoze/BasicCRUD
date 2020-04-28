$("#addTodo").click(function() {
    $item = $("#todoItem").val();
    $("#todoItem").val("");
    $("#tbody").append(`
    <tr>
        <td id="userItem">${$item}</td>
        <td><button class="btn btn-success" onclick="editRow(this)">Edit</button></td>
        <td><button class="btn btn-danger" onclick="delRow(this)">Delete</td>
    </tr>
    `)
});

function delRow(that) {
    $(that).closest("tr").remove();
}

function editRow(that) {
    $(that).html("Save");
    $(that).attr("onclick","saveRow(this)");
    let str = $(that).parent().parent().children("#userItem").html();
    $(that).parent().parent().children("#userItem").html(`<input type="text" value="${str}">`);
    //`<input type="text" value="${str}">`
}

function saveRow(that) {
    $(that).html("Edit");
    $(that).attr("onclick","editRow(this)");
    let str = $(that).parent().parent().children("#userItem").children().val();
    $(that).parent().parent().children("#userItem").html(`${str}`);
}