function dispAbt(){
			$('.box').removeClass('box-exp box-int');
			$('.box').addClass('box-abt');
			
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
			
		};
		
		function dispExp(){
			$('.box').removeClass('box-abt box-int');
			$('.box').addClass('box-exp');
			
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
		};
		
		function dispAwa(){
			$('.box').addClass('box-exp');
		
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
		};
		
		function dispSkill(){		
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
		};
		
		function dispInt(){
			$('.box').removeClass('box-abt box-exp');
			$('.box').addClass('box-int');
		
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
		};

