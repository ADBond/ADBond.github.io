let dynamicContent = document.createElement("p");
dynamicContent.innerHTML = "<em>hot</em> dynamic content";
dynamicContent.style.fontSize = "0.8em";

let mainBusiness = document.getElementById("exciting-content");
mainBusiness.appendChild(dynamicContent);
