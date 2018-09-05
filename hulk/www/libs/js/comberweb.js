String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function formatDate(dt) {
    var dtJoin = dt.split('-');
    return dtJoin[2] + '/' + dtJoin[1] + '/' + dtJoin[0];
}

var _StorageJS = function() {
    this.set = function (key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }

    this.get = function (key) {
        return JSON.parse(localStorage.getItem(key));
    }
    
    this.destroy = function (key) {
        return localStorage.removeItem(key);
    }
}

var LoggerJS = function() {
    this.log = function(err_title, err_data) {
        var formData = new FormData();

        formData.append("phone_data", JSON.stringify(device));
        formData.append("error_title", err_title);
        if (typeof err_data === 'object') {
            formData.append("error_data", JSON.stringify(err_data));
        } else {
            formData.append("error_data", err_data);
        }
        

        m.request({
            method: "POST",
            url: "http://comberweb.com.br/projetos/logger/index.php?action=log",
            data: formData,
            config: function(xhr) {
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
            }
        })
        .then(function(result) {
            console.log(result)
        })       
    }
}

function checkNextPage(chk, page, fn) {
    if (Store.get(chk) != null) {
        navigateRoute(page);
    } else {
        fn();
    }
}

function setEnvironment(type) {
    if (type.toLowerCase() == 'p') {
        window.allowConsole = false;
        console.log('%c Ambiente de Produção', 'background: red; color: #fff');
    } else if (type.toLowerCase() == 'd') {
        window.allowConsole = true;
        console.log('%c Ambiente de Desenvolvimento', 'background: blue; color: #fff');
    }

    (function(cl){
        console.log = function(){
            if( window.allowConsole )
                cl(...arguments); 
        }
    })(console.log)
}

function setStatusBarColor(hex) {
    document.addEventListener("deviceready", function() {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString(hex);
        StatusBar.styleDefault();
    }, false);
}

document.addEventListener("deviceready", function() {
    if (navigator.notification) { // Override default HTML alert with native dialog
        window.alert = function (title, message) {
            navigator.notification.alert(
                message,    // message
                null,       // callback
                title, // title
                'OK'        // buttonName
            );
        };
    }
}, false);

// Máscara de Inputs

function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}
function fMascEx() {
    obj.value=masc(obj.value)
}
function mTel(tel) {
    tel=tel.replace(/\D/g,"")
    tel=tel.replace(/^(\d)/,"($1")
    tel=tel.replace(/(.{3})(\d)/,"$1)$2")
    if(tel.length == 9) {
        tel=tel.replace(/(.{1})$/,"-$1")
    } else if (tel.length == 10) {
        tel=tel.replace(/(.{2})$/,"-$1")
    } else if (tel.length == 11) {
        tel=tel.replace(/(.{3})$/,"-$1")
    } else if (tel.length == 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    } else if (tel.length > 12) {
        tel=tel.replace(/(.{4})$/,"-$1")
    }
    return tel;
}
function mCNPJ(cnpj){
    cnpj=cnpj.replace(/\D/g,"")
    cnpj=cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
    cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
    cnpj=cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
    cnpj=cnpj.replace(/(\d{4})(\d)/,"$1-$2")
    return cnpj
}
function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}
function mCEP(cep){
    cep=cep.replace(/\D/g,"")
    cep=cep.replace(/^(\d{2})(\d)/,"$1.$2")
    cep=cep.replace(/\.(\d{3})(\d)/,".$1-$2")
    return cep
}
function mNum(num){
    num=num.replace(/\D/g,"")
    return num
}

// Framework

var animationEnd = (function(el) {
    var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
    };
  
    for (var t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
})(document.createElement('div'));

// load script by ondemand
function load(file, name) {
    return m.request({
        method: "GET",
        url: file,
        extract: function(xhr) {
            return new Function(Babel.transform(xhr.responseText, {presets: ['react', 'es2015']}).code + "return " + name + ";")
        }
    })
}