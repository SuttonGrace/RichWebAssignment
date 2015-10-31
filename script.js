function dispAbt(){
			var element = document.getElementById('box');
			element.className = 'box box-abt';
			
			document.getElementById('abt-txt').style.display='block';
			$('.abt-img').show();
			
			document.getElementById('exp-txt').style.display='none';
			$('.exp-img').hide();
			
			document.getElementById('awa-txt').style.display='none';
			$('.awa-img').hide();
			
			document.getElementById('skill-txt').style.display='none';
			$('.skill-img').hide();
			
			document.getElementById('int-txt').style.display='none';
			$('.int-img').hide();
			
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
			
			document.getElementById('skill-txt').style.display='none';
			$('.skill-img').hide();
			
			document.getElementById('int-txt').style.display='none';
			$('.int-img').hide();
			
			var elements = document.getElementsByClassName('btn'), i;
			for (var i=0; i < elements.length; i++){
				elements[i].className = 'btn btn-awa animated fadeIn';
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
			
			document.getElementById('skill-txt').style.display='none';
			$('.skill-img').hide();
			
			document.getElementById('int-txt').style.display='block';
			$('.int-img').show();
			
			var elements = document.getElementsByClassName('btn'), i;
			for (var i=0; i < elements.length; i++){
				elements[i].className = 'btn btn-int animated fadeIn';
			}
		};


