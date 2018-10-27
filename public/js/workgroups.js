$('#createWorkgroup').click(() => {
    var workgroup = {
        "title": $('#workgroupTitle').val(),
        "penality": $('#challengeTitle').val(),
        "users": ["5bd243929ef18c132cd73580"]
    }
    $.post('/workgroups', { "workgroup": workgroup }, (c) => {
        location.reload();
    });
  });