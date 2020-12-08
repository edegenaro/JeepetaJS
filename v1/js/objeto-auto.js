const m = new Audio;
      m.preload = true;
      m.volume = 1.0;

var miAuto = new Object();
    miAuto.sonidomotor = ['mp3/auto_arranca.mp3', 'mp3/auto_acelera.mp3'];
    miAuto.auto = ['images/autoocupado.gif', 'images/arrancar.gif', 'images/luces.gif', 'images/autovacio.gif'];
    miAuto.marca = "Kia";
    miAuto.modelo = "Picanto";
    miAuto.anio = 2013;
    miAuto.titular = "Fernando O.";
    miAuto.patente = "MKM001";
    miAuto.creado = false;
    miAuto.arranco = false;
    miAuto.mesubi = false;
    miAuto.luces = false;

    miAuto.crear = function() { 
        if (!this.creado) {
            marca = prompt('Ingrese la marca del vehículo: ');
            modelo = prompt('Ingrese el modelo del vehículo: ');
            anio = prompt('Ingrese el año del vehículo: ');
            titular = prompt('Ingrese el nombre del titular: ');
            patente = prompt('Ingrese la patente del vehículo: ');
            if (marca != '') {this.marca = marca}
            if (modelo != '') {this.modelo = modelo}
            if (anio != '') {this.anio = anio}
            if (titular != '') {this.titular = titular}
            if (patente != '') {this.patente = patente}
            miAuto.creado = true;
            imagen.src = this.auto[3];
        } else {
            console.warn('El auto ya está creado. Puede subirse y utilizarlo sin problema.');
        }
    }

    miAuto.arrancar = function() {
        if (!miAuto.mesubi) { console.error('Primero debe subirse al auto.'); }
        else {
            if (this.arranco) { console.warn('El auto ya está en marcha.'); }
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
        } else { console.error('Primero debe arrancar el auto;'); }
    }

    miAuto.frenar = function() {
        if (this.arranco) {
            imagen.src = this.auto[0];
            m.pause();
        }
    }

    miAuto.subirme = function() {
        if (!miAuto.creado) { console.error('Primero debe crear, o comprar, un auto.'); }
        else {
            imagen.src = this.auto[0];
            miAuto.mesubi = true;
        }
    }

    miAuto.enciendeLuces = function() {
        if (this.arranco) {
            imagen.src = this.auto[2];
            this.luces = true;
        } else { console.warn('Primero debe arrancar el auto.'); }
    }

    miAuto.apagaLuces = function() {
        if (!this.mesubi) { console.warn('Todavía no se ha subido al vehículo.'); }
        else {
            imagen.src = this.auto[0];
            this.luces = false;
        }
    }

    miAuto.mostrarCredencial = function() {
        var credencial = this.marca + ' ' + this.modelo + '\n'
           credencial += this.patente + ' ' + this.anio + '\n'
           credencial += this.titular;
        alert(credencial);
    }