function subirInfo(){
    var nombre = document.getElementById("nomb").value;
    var matricula = document.getElementById("mat").value;
    var cal1 = parseInt(document.getElementById("cal1").value);
    var cal2 = parseInt(document.getElementById("cal2").value);
    var cal3 = parseInt(document.getElementById("cal3").value);
    var cal4 = parseInt(document.getElementById("cal4").value);
    var cal5 = parseInt(document.getElementById("cal5").value);
    var promedio = "";

    if ((cal1 >= 0 && cal1 <= 100) && (cal2 >= 0 && cal2 <= 100) && (cal3 >= 0 && cal3 <= 100) && (cal4 >= 0 && cal4 <= 100) && (cal5 >= 0 && cal5 <= 100)) {
        promedio = "" + (cal1 + cal2 + cal3 + cal4 + cal5) / 5;

        tabla.style.borderSpacing = '10px';  
        const trHead = document.createElement('tr');
        const thNombre = document.createElement('th');
        const thMatricula = document.createElement('th');
        const thMat = document.createElement('th');
        const thCal = document.createElement('th');
    
        thNombre.textContent = 'Nombre';
        thMatricula.textContent = 'Matricula';
        thMat.textContent = 'Materia';
        thCal.textContent = 'Calificacion';
    
        trHead.appendChild(thNombre);
        trHead.appendChild(thMatricula);
        trHead.appendChild(thMat);
        trHead.appendChild(thCal);
    
        tabla.appendChild(trHead);
    
        var calnum = "cal";
        let materias = ["Calculo", "Redes", "Programacion", "Bases de datos", "Investigacion"];
        const calif = [];
        calif.push(cal1);
        calif.push(cal2);
        calif.push(cal3);
        calif.push(cal4);
        calif.push(cal5);
        for (var i = 0; i < 5; i++) {
            const trBody = document.createElement('tr');
            const tdNombre = document.createElement('td');
            const tdMatricula = document.createElement('td');
            const tdMat = document.createElement('td');
            const tdCal = document.createElement('td');
            
            tdNombre.textContent = nombre;
            tdMatricula.textContent = matricula;
            tdMat.textContent = materias[i];
            tdCal.textContent = calif[i];
            trBody.appendChild(tdNombre);
            trBody.appendChild(tdMatricula);
            trBody.appendChild(tdMat);
            trBody.appendChild(tdCal);
            tabla.appendChild(trBody);
        }
        const trPro = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const tdPromedio = document.createElement('td');
        td1.textContent = "Promedio";
        td2.textContent = "";
        td3.textContent = "";
        
        tdPromedio.textContent = promedio;
        trPro.appendChild(td1);
        trPro.appendChild(td2);
        trPro.appendChild(td3);
        trPro.appendChild(tdPromedio);
        tabla.appendChild(trPro);
    
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("resultado").appendChild(tabla);
    
    }
}