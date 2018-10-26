$(document).ready(() => {
    $('#createTask').click(() => {
        var task = {
            "libelle": $('#taskTitle').val(),
            "description": $('#taskDescription').val(),
            "deadline": $('#taskDeadline').val(),
            "workgroup": args.workgroup._id,
            "user": "5bd243929ef18c132cd73580"
        }
    
        $.post('/tasks', { "task": task }, (t) => {
            location.reload();
        });
      });
    $('.add-judge').click(() => {
        console.log($(this));
        /*$.post('/judge', { "task": task }, (t) => {
            location.reload();
        });*/
    });
});

