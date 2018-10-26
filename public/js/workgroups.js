$('#submitWorkgroup').click(() => {
    var workgroup = {
        "title": $('#workgroup-title').val(),
        "penality": $('#workgroup-penality').val(),
        "deadline": $('#workgroup-deadline').val(),
    }

    $.post('workgroups', { "workgroup": workgroup }, (c) => {
        location.reload();
    });
  });