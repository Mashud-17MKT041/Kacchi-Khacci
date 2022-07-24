// for sweet alertconst manuclick = document.querySelector('.manuIcon');

$('.proceed-to-check').on({
	click: function () {
    const cpassword = document.getElementById('for-using-if');
    const emailVal = cpassword.value;

    if(emailVal =='1') {
      swal("Thank You ! " , "Your Order Confirm, Please wait 30 Minutes for Delivery!", "success");
    }else{
      return false
    };
    

	},
	// mouseover: function () {
	// 	// $(".service-wrap").css({"opacity": "0", "transition": ".4s","visibility": "hidden"});
	// 	console.log('hi')
	// },
	
});