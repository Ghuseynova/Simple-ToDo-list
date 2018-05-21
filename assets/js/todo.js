

	$("ul").on("click", ".fa-check-circle", function(){
		$(this).toggleClass("fas");
	});

	$("ul").on("click", ".fa-trash-alt", function(){
		$(this).parent().parent().fadeOut(300, function(){
			$(this).remove();
		});
	});

	$("input[type='text'").keypress(function(event){

		if(event.which === 13){
			var newToDo = $(this).val();			
			$("ul").append("<li>" + newToDo + "<span><i class='fas fa-trash-alt'></i><i class='far fa-check-circle'></i></span></li>")
			newToDo = $(this).val('');

		}

	});

