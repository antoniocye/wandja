const targetDiv = document.getElementById("sign-in");
         const btn = document.getElementById("profile");
		 const btnT = document.getElementById("profileT");
		 
         if (targetDiv.style.display == "grid") {
                 targetDiv.style.display = "grid";
                 
             } else {
                 targetDiv.style.display = "none";
             }
         btn.onclick = function () {
             if (targetDiv.style.display == "none") {
                 targetDiv.style.display = "grid";
                 
             } else {
                 targetDiv.style.display = "none";
             }
             
         };


		   btnT.onclick = function () {
             if (targetDiv.style.display == "none") {
                 targetDiv.style.display = "grid";
                 
             } else {
                targetDiv.style.display = "none";
             }
             
         };		
		
