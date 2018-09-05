document.addEventListener("deviceready", () => {
    console.log(device);

    StatusBar.overlaysWebView( false );
    StatusBar.backgroundColorByHexString('#000000');
    StatusBar.styleDefault();

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

// var urlAPI = 'https://sinam.com.br/api';
//var urlAPI = 'http://192.168.15.5/meaple-api/api';

function onBackKeyDown() {
    history.go(-1);
    // navigator.app.backHistory();
}

function navigateRoute(route) {
    m.route.set(route)
}

FastClick.attach(document.body);

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

function enableMaskCPF() {
    $('.cpf').keydown(function (event){
        fMasc( this, mCPF );
    })
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

var Store = new _StorageJS();

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

var Logger = new LoggerJS();

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
