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

$(document).on("focus keyup", "input.autocomplete", function () {
    // Cache useful selectors
    var $input = $(this);
    var $dropdown = $input.next("ul.dropdown-menu");

    // Create the no matches entry if it does not exists yet
    if (!$dropdown.data("containsNoMatchesEntry")) {
        $("input.autocomplete + ul.dropdown-menu").append('<li class="no-matches hidden"><a>No matches</a></li>');
        $dropdown.data("containsNoMatchesEntry", true);
    }

    // Show only matching values
    $dropdown.find("li:not(.no-matches)").each(function (key, li) {
        var $li = $(li);
        $li[new RegExp($input.val(), "i").exec($li.text()) ? "removeClass" : "addClass"]("hidden");
    });

    // Show a specific entry if we have no matches
    $dropdown.find("li.no-matches")[$dropdown.find("li:not(.no-matches):not(.hidden)").length > 0 ? "addClass" : "removeClass"]("hidden");
});
$(document).on("click", "input.autocomplete + ul.dropdown-menu li", function (e) {
    // Prevent any action on the window location
    e.preventDefault();

    // Cache useful selectors
    $li = $(this);
    $input = $li.parent("ul").prev("input");

    // Update input text with selected entry
    if (!$li.is(".no-matches")) {
        $input.val($li.text());
    }
});