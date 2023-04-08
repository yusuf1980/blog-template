const togglemenu = document.getElementById('toggle-menu');
	const sidebarmenu = document.getElementById('left-sidebar-menu');
	const menuBackdrop = document.getElementById('menuBackdrop');
	
	document.onclick = function(e) {
		if(e.target.id !== 'left-sidebar-menu' && e.target.id !== 'toggle-menu' ) {
			sidebarmenu.classList.remove('open');
			menuBackdrop.style.display = "none";
		}
	}
	
	togglemenu.onclick = function() {
		sidebarmenu.classList.toggle('open');
		menuBackdrop.style.display = "block";
	}