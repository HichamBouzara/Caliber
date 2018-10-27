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
    $("#participantsList").on('input', function () {
        var val = this.value;
        var memberInList = $('#membersList').find('option').filter(function(){
            return this.value.toUpperCase() === val.toUpperCase();        
        })
        var d = {
            "user_id": memberInList.attr('id'),
            "workgroup_id": args.workgroup._id
        }
        if(memberInList.length) {
            $.post('/addMember', { "d": d }, (u) => {
                location.reload();
            });
        }
    });
});
function addJudge(user_id)  {
    var d = {
        "user_id": user_id,
        "workgroup_id": args.workgroup._id
    }
    $.post('/addJudge', { "d": d }, (u) => {
        location.reload();
    });
}