$(document).ready(function(){
    
	
	//empty text from input field		  
	$('#todo').focus(function(){
	if($(this).val()==='add item' || $(this).val()==='add new item'){
		$(this).val('');
		}
	}); 

	//replace placeholder text on blur if no text has been entered
	$('#todo').blur(function(){
		if($(this).val() === ''){
			$(this).val('add item');
			}			
	});
	
	//add value of input to list when add button is clicked
	$('#submit').click(function(){
		 var toAdd = $('input[name=todo]').val();
		  $('#list').append('<p class="item">~ ' + toAdd + '</p>');
		  $('#todo').val('add new item');
		  $('#todo').css('font-style','italic');
		  $('#todo').css('color','#ccc');
	});

	$('#submit').mouseenter(function(){
		 $(this).css('box-shadow', '0 0 8px #FF00FF');
	});

	$('#submit').mouseleave(function(){
		 $(this).css('box-shadow', 'none');
	});

	//click add button when enter is pressed on keyboard
	 $('#todo').keypress(function(e) {
        if(e.which == 13) {        	
            jQuery('#submit').focus().click();
        }
    });

	 //toggles items as completed of pending
	 $(document).on('click','.item',function(){
	 	//if "completed", mark pending
		if($(this).is(".completed")){
					$(this).fadeTo('fast',1);
					$(this).css('text-decoration','none');
					$(this).css('font-style','normal');
					$(this).removeClass("completed");
				}
		//otherwise mark completed
		else{
       		$(this).fadeTo('fast',0.75);
			$(this).css('text-decoration','line-through');
			$(this).css('font-style','italic');
			$(this).addClass("completed");
		}
		
    });	

	 //delete item on doubleclick
	$(document).on('dblclick','.item',function(){
       $(this).remove();
    });	


    
	
	//autocomplete input field
	//$( "#todo" ).autocomplete({ source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ] });

	//toggle slide down
	 $('.pull').click(function(){
        $('.panel').slideToggle('fast');
        });	  		  
			  
})