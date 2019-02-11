$('#submitBtn').on('click', function() {
    if ($("#formEntorpecentes").valid()) {
        $('#confirm-submit').modal('toggle');

    }

 })

$('#reset-btn').click(function() {
	$("#formEntorpecentes")[0].reset();
 });
