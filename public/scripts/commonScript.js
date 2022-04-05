const targetDiv = document.getElementById("sign-in");
         const btn = document.getElementById("profile");
		 const btnT = document.getElementById("profileT");
		 const btnThird = document.getElementById("profileThird");
         if (targetDiv.style.display == "grid") {
                 targetDiv.style.display = "grid";
                 
             } else {
                 targetDiv.style.display = "none";
             }
         btn.onclick = function () {
             if (targetDiv.style.display == "none") {
                 targetDiv.style.display = "grid";
                 document.getElementById("overlay").style.display = "block";
                 
             } else {
                 targetDiv.style.display = "none";
             }
             
         };


		   btnT.onclick = function () {
             if (targetDiv.style.display == "none") {
                 targetDiv.style.display = "grid";
                 document.getElementById("overlay").style.display = "block";
                 
             } else {
                 targetDiv.style.display = "none";
             }
             
         };		
		 
		 btnThird.onclick = function () {
		 			var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

            		if(vw<=900){
                          btnT.onclick();
						  
            		}
            		else{
            			  btn.onclick();
					}
					var elmnt = document.getElementById("sign-in");
                      elmnt.scrollIntoView({behavior: "smooth"});
		 }
		 
		  
					function toggleDropdownContent() {
                      					var target = document.getElementById("dropdownMobile");

                      if (target.style.display == "none") {
                           target.style.display = "block";
						   document.getElementById("dropbtnMobile").style.backgroundColor="#304D6D";
						   document.getElementById("imgDropbtn").style.filter="invert(0%) sepia(1%) saturate(5%) hue-rotate(304deg) brightness(100%) contrast(102%)";
                           
                       } else {
                           target.style.display = "none";
						   document.getElementById("dropbtnMobile").style.background="black";
						   document.getElementById("imgDropbtn").style.filter="invert(66%) sepia(97%) saturate(1476%) hue-rotate(181deg) brightness(93%) contrast(103%)";
                       }		 
                    }	