document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.loader').style.display = 'none';
});

Inputmask({ "mask": "+7 (999) 999-9999" }).mask('[type=tel]');