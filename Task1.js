$(document) .ready(function() {
    $("#field1, #field2").click(function () {
        alert("Clicked on " + $(this).val());
    });
    var txt1 = "<p>This is a click Event</p>";
    var txt2 = "<p>This is a double-click Event</p>";
    var DELAY = 500, clicks = 0, timer = null;
    $("p").on("click", function (e) {
        clicks++;
        if (clicks === 1) {
            timer = setTimeout(function () {
                $("body").append(txt1);
                clicks = 0;
            }, DELAY);
        } else {
            clearTimeout(timer);
            $("body").append(txt2);
            clicks = 0;
        }
    })
        .on("dblclick", function (e) {
            e.preventDefault();
        });
});
$(document).ready(function() {
    $("#task2").on('click', function (e) {
        alert(""+ e.target.tagName);
    });
});
