$('#createWorkgroup').click(() => {
    var workgroup = {
        "title": $('#workgroupTitle').val(),
        "penality": $('#challengeTitle').val(),
    }

    $.post('/workgroups', { "workgroup": workgroup }, (c) => {
        location.reload();
    });
  });