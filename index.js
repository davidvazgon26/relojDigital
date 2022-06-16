(function(){
    let actualizarHora = function(){
        let fecha = new Date();
        let hora = fecha.getHours();
        let ampm = hora >= 12 ? 'PM' : 'AM';
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        let diaSemana = fecha.getDay();
        let dia = fecha.getDate();
        let mes = fecha.getMonth();
        let year = fecha.getFullYear();

        let pHoras = document.getElementById('horas');
        let pAMPM = document.getElementById('ampm');
        let pMinutos = document.getElementById('minutos');
        let pSegundos = document.getElementById('segundos');
        let pDiaSemana = document.getElementById('diaSemana');
        let pDia = document.getElementById('dia');
        let pMes = document.getElementById('mes');
        let pYear = document.getElementById('year');

        let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pDiaSemana.textContent = semana[diaSemana];
     
        pDia.textContent = dia;
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if(hora>=12){
            hora = hora - 12;
            ampm = 'PM';
        }else{
            ampm = 'AM';
        }
        if(hora == 0){
            hora = 12;
        }

        pHoras.textContent = hora;
        pAMPM.textContent = ampm;

        if(minutos < 10){
            minutos = '0' + minutos;
        }

        pMinutos.textContent = minutos;

        if(segundos < 10){
            segundos = '0' + segundos;
        }
        
        pSegundos.textContent = segundos; 
    }

    actualizarHora();
    let intervalo = setInterval(actualizarHora, 1000);
}())