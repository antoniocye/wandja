function change_css(){
    document.getElementById('result').style.cssText = 'padding:20px; background-color:#b2b2ff; color:#0c0800;       border:1px solid #0c0800; font-size:22px;';
};


function closeSignIn(){
    const targetDiv = document.getElementById("sign-in");
    targetDiv.style.display = "none";
    document.getElementById("overlay").style.display = "none";
	document.getElementById("overlay").style.zIndex = "2";

};         

