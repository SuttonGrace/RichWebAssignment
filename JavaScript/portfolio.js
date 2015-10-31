/*Fired when the 'About' button is clicked, also on page load*/
function dispAbt(){
			/*Gets the element with box id and adds specific classes to it.
			Used to hide/show divs and add colour variations*/
			var element = document.getElementById('box');
			element.className = 'box box-abt';
			
			document.getElementById('abt-txt').style.display='block';
			$('.abt-img').show();
			
			document.getElementById('exp-txt').style.display='none';
			$('.exp-img').hide();
			
			document.getElementById('awa-txt').style.display='none';
			$('.awa-img').hide();
			
			document.getElementById('edu-txt').style.display='none';
			$('.edu-img').hide();
			
			document.getElementById('skill-txt').style.display='none';
			$('.skill-img').hide();
			
			document.getElementById('int-txt').style.display='none';
			$('.int-img').hide();
			
			/*Gets all the elements with .btn class, ie: all the buttons and adds specific classes to them.
			Allows colour variations*/
			var elements = document.getElementsByClassName('btn'), i;
			for (var i=0; i < elements.length; i++){
				elements[i].className = 'btn btn-abt animated fadeIn';
			}
			
		};
		
		function dispExp(){
			var element = document.getElementById('box');
			element.className = 'box box-exp';
			
			document.getElementById('abt-txt').style.display='none';
			$('.abt-img').hide();
			
			document.getElementById('exp-txt').style.display='block';
			$('.exp-img').show();
			
			document.getElementById('awa-txt').style.display='none';
			$('.awa-img').hide();
			
			document.getElementById('edu-txt').style.display='none';
			$('.edu-img').hide();
			
			document.getElementById('skill-txt').style.display='none';
			$('.skill-img').hide();
			
			document.getElementById('int-txt').style.display='none';
			$('.int-img').hide();
			
			var elements = document.getElementsByClassName('btn'), i;
			for (var i=0; i < elements.length; i++){
				elements[i].className = 'btn btn-exp animated fadeIn';
			}
			
		};
		
		function dispAwa(){
			var element = document.getElementById('box');
			element.className = 'box box-awa';
		
			document.getElementById('abt-txt').style.display='none';
			$('.abt-img').hide();
			
			document.getElementById('exp-txt').style.display='none';
			$('.exp-img').hide();
			
			document.getElementById('awa-txt').style.display='block';
			$('.awa-img').show();
			
			document.getElementById('edu-txt').style.display='none';
			$('.edu-img').hide();
			
			document.getElementById('skill-txt').style.display='none';
			$('.skill-img').hide();
			
			document.getElementById('int-txt').style.display='none';
			$('.int-img').hide();
			
			var elements = document.getElementsByClassName('btn'), i;
			for (var i=0; i < elements.length; i++){
				elements[i].className = 'btn btn-awa animated fadeIn';
			}
		};
		
		function dispEdu(){
			var element = document.getElementById('box');
			element.className = 'box box-edu';
		
			document.getElementById('abt-txt').style.display='none';
			$('.abt-img').hide();
			
			document.getElementById('exp-txt').style.display='none';
			$('.exp-img').hide();
			
			document.getElementById('awa-txt').style.display='none';
			$('.awa-img').hide();
			
			document.getElementById('edu-txt').style.display='block';
			$('.edu-img').show();
			
			document.getElementById('skill-txt').style.display='none';
			$('.skill-img').hide();
			
			document.getElementById('int-txt').style.display='none';
			$('.int-img').hide();
			
			var elements = document.getElementsByClassName('btn'), i;
			for (var i=0; i < elements.length; i++){
				elements[i].className = 'btn btn-edu animated fadeIn';
			}
		};
		
		function dispSkill(){
			var element = document.getElementById('box');
			element.className = 'box box-skill';	
			
			document.getElementById('abt-txt').style.display='none';
			$('.abt-img').hide();
			
			document.getElementById('exp-txt').style.display='none';
			$('.exp-img').hide();
			
			document.getElementById('awa-txt').style.display='none';
			$('.awa-img').hide();
			
			document.getElementById('edu-txt').style.display='none';
			$('.edu-img').hide();
			
			document.getElementById('skill-txt').style.display='block';
			$('.skill-img').show();
			
			document.getElementById('int-txt').style.display='none';
			$('.int-img').hide();
			
			var elements = document.getElementsByClassName('btn'), i;
			for (var i=0; i < elements.length; i++){
				elements[i].className = 'btn btn-skill animated fadeIn';
			}
		};
		
		function dispInt(){
			var element = document.getElementById('box');
			element.className = 'box box-int';
		
			document.getElementById('abt-txt').style.display='none';
			$('.abt-img').hide();
			
			document.getElementById('exp-txt').style.display='none';
			$('.exp-img').hide();
			
			document.getElementById('awa-txt').style.display='none';
			$('.awa-img').hide();
			
			document.getElementById('edu-txt').style.display='none';
			$('.edu-img').hide();
			
			document.getElementById('skill-txt').style.display='none';
			$('.skill-img').hide();
			
			document.getElementById('int-txt').style.display='block';
			$('.int-img').show();
			
			var elements = document.getElementsByClassName('btn'), i;
			for (var i=0; i < elements.length; i++){
				elements[i].className = 'btn btn-int animated fadeIn';
			}
		};


