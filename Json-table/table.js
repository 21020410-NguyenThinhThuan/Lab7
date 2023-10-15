function getXmlHttpObject()  {
    var xmlhttp = null; 
  try { xmlhttp = new XMLHttpRequest(); }  
  catch (e) {
      try  { xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); } 
          catch (e) {
          try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
          catch (e)  { console.log("AJAX!"); }
      }
  }
  return xmlhttp;
}

document.getElementById("btn1").onclick = function() {
    this.disabled = true;
    var table = getXmlHttpObject();
    table.onreadystatechange = function() {
        if (this.readyState == 4) {    
            if (this.status == 200) {
                var obj = JSON.parse(this.responseText);
                for (var i = 0; i < obj.length; i++) {
                    var r = document.createElement("tr");
                    var c1 = document.createElement("td");
                    var c2 = document.createElement("td");
                    var c3 = document.createElement("td");
                    c1.innerHTML = obj[i].name;
                    c2.innerHTML = obj[i].age;
                    c3.innerHTML = obj[i].cars.length;
                    for (var j = 0; j < obj[i].cars.length; j++)
                        c3.innerHTML += "<br>" + obj[i].cars[j].name + " - " + obj[i].cars[j].models;
                    r.appendChild(c1);
                    r.appendChild(c2);
                    r.appendChild(c3);
                    document.querySelector("#tbl1 tbody").appendChild(r);
                    
                }
            }
        }
    };
    table.open("GET", "data", true);
    table.send(null);
}
