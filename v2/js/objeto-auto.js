const m = new Audio;
      m.preload = true;
      m.volume = 1.0;

var miAuto = new Object();
    miAuto.sonidomotor = ['mp3/auto_arranca.mp3', 'mp3/auto_acelera.mp3'];
    miAuto.auto = ['images/autoocupado.gif', 'images/arrancar.gif', 'images/luces.gif', 'images/autovacio.gif'];
    miAuto.marca = "Jeep";
    miAuto.modelo = "Renegade";
    miAuto.anio = 2013;
    miAuto.creado = false;
    miAuto.arranco = false;
    miAuto.mesubi = false;
    miAuto.luces = false;

    miAuto.crear = function() { 
        if (!this.creado) {
            marca = prompt('Ingrese la marca del vehículo: ');
            modelo = prompt('Ingrese el modelo del vehículo: ');
            anio = prompt('Ingrese el año del vehículo: ');
            if (marca != '') {this.marca = marca}
            if (modelo != '') {this.modelo = modelo}
            if (anio != '') {this.anio = anio}
            miAuto.creado = true;
            imagen.src = this.auto[3];
        } else {
            alert('Ya tenes la Jeepeta ATR. Subite y ponela en marcha.');
        }
    }

    miAuto.arrancar = function() {
        if (!miAuto.mesubi) { alert('Para arrancarla primer tenes que estar arriba.'); }
        else {
            if (this.arranco) { alert('La jeepeta ya esta prendida.'); }
            else {
                m.src = this.sonidomotor[0];
                m.loop = false;
                m.play();
                this.arranco = true;
            }
        }
    }

    miAuto.acelerar = function() {
        if (this.arranco) {
            m.src = this.sonidomotor[1];
            m.loop = true;
            m.play();       
            imagen.src = this.auto[1];   
        } else { alert('Para acelerarla primero la tenes que prender.'); }
    }

    miAuto.frenar = function() {
        if (this.arranco) {
            imagen.src = this.auto[0];
            m.pause();
        }
    }

    miAuto.subirme = function() {
        if (!miAuto.creado) { alert('Para subirte primero la tenes que crear.'); }
        else {
            imagen.src = this.auto[0];
            miAuto.mesubi = true;
        }
    }

    miAuto.enciendeLuces = function() {
        if (this.arranco) {
            imagen.src = this.auto[2];
            this.luces = true;
        } else { alert('Para prender las luces primero prende la Jeepeta.'); }
    }

    miAuto.apagaLuces = function() {
        if (!this.mesubi) { alert('Para apagar las luces tenes que estar arriba.'); }
        else {
            imagen.src = this.auto[0];
            this.luces = false;
        }
    }

    miAuto.mostrarCredencial = function() {
        var credencial = this.marca + ' ' + this.modelo + '\n'
           credencial += this.anio
        alert(credencial);
    }