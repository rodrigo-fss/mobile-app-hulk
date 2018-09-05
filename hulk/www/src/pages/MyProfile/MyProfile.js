"use strict"

/** @jsx m */

var MyProfile = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .perfil {margin-bottom: 40px;}
            .concluir, .inicio p {display: none;}
            .perfil .info-principal {text-align: center; margin-bottom: 20px;}
            .perfil h4 {font-family: 'Open Sans'; font-weight: 700; font-size: 6vw;}
            .foto-perfil {margin-top: -15px; padding-bottom: 10px; width: 50%; margin: 0 auto; display: block;}
            .info-principal p {font-family: 'Montserrat'; font-size: 2.5vw;}
            .perfil .private {font-weight: 700;}
            .situacao-participante p {font-family: 'Montserrat'; font-size: 3vw; font-weight: 300; text-transform: uppercase; text-align: center;}
            .situacao-participante p:hover {font-weight: 700;}
            .situacao-participante .primeira { border-right: 1px solid #ccc}

            .evento {background-image: url("img/imagem-evento-2.png");width: 100%; height: 115px; background-size: cover; display: table;  background-position: top center; border-radius: 10px; position: relative;}
            
            .titulo-evento {font-family: 'Montserrat'; font-weight: 700; font-size: 14px; margin-bottom: 0; float: left; color: #ffffff}
            .cidade{font-family: 'Montserrat'; font-weight: 400; font-size: 9px; color: #ffffff}
            .info .icone-pequeno{width: 9px;}
            .tipo-evento {text-transform: uppercase; color: #ffffff; background-color: #068ebf; border-radius: 5px; text-align: center; width: 50px; font-family: 'Montserrat'; font-weight: 400; font-size: 9px;}
            
            
            .numero-top {position: relative; border-radius: 5px; color: #2f2f2f; width: 30px; height: 30px; margin-top: -15px; float: right; text-align: center; font-family: 'Open Sans';background-color: #fff }

            .numero-top p{ font-size: 10px; line-height: 0.5; font-family: 'Montserrat'; margin-top: 5px; font-weight: 700;}
            .numero-top .hora {font-weight: 400; font-size: 7px;}

            .local-famoso {color: #fff; font-family: 'Montserrat'; font-weight: 700; font-size: 9px;}
            .evento-tudo {margin-bottom: 5px}

            .info {position:absolute; bottom:0px;}
            #grad {
                pointer-events: none;   /* isto faz com que o clique "passe" adiante */  
                min-height:60px;       /* Aqui voce define o tamanho do degrade */
                width:100%;
                position:absolute;
                bottom:-1px;
                left: 0;
                background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgb(40,40,40) 80%);
                border-radius: 10px;
            }
            .card {color: #fff; font-family: 'Montserrat'; font-weight: 400; padding: 10px; margin-bottom: 5px; border-radius: 10px;}
            .card p {font-weight: 700; font-size: 3.2vw;}
            .card span {font-size: 7px;}
            .card-verde {background-color: #089d4e;}
            .card-rosa {background-color: #c44470;}
            .card-azul {background-color: #1787fb}
            .card-vermelho {background-color: #f32e37}
            .esquerda {padding-right: 5px;}
            .direita {padding-left: 0;}
        `;
    },
    oncreate: function(vnode) {      
        vnode.dom.addEventListener(animationEnd, () => {
            vnode.dom.classList.remove("animated");
        });
    },
    onbeforeremove: function(vnode) {
        vnode.dom.classList.add("fadeOut");
        vnode.dom.classList.add("animated");
        return new Promise(function(resolve) {
            setTimeout(resolve, 1)
        })
    },
    view: function() {
        return (
             <Layout animeteEffect="fadeIn" hideHeader="y" hideFooter="y" hidePublicarHeader="y" hidePerfilFooter="y" hideComentarFooter="y">
                <style>{this.stylesheet}</style>
                <Cabecalho title="Login" routeCheck="/preferencias"></Cabecalho>
                <section class="perfil">
                    <div class="container">
                        <div class="row info-principal">
                            <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2"></div>
                            <div class="col-md-8 col-lg-8 col-sm-8 col-xs-8">
                                <img src="img/perfil-foto-menu.png" class="foto-perfil"/>
                                <h4>John Thomas</h4>
                                <p class="legenda">Lorem ipsum dolors sit amet, consectetuer adispicing elit. Aenean commodo</p>
                            </div>                      
                            <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2"></div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 situacao-participante">
                                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6 primeira">
                                    <p>Descobrir</p>
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                    <p>Perfil</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8 col-lg-8 col-sm-8 col-xs-8 esquerda">  
                                <div class=" evento-tudo">
                                        <div class="evento">
                                            <div id="grad"></div>
                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 info">
                                                <div class="tipo-evento">Parties</div>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <h4 class="titulo-evento">Pool Party <img src="img/icon-cadeado.png" class="icone-pequeno"/></h4>                                     
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <span class="cidade"><img src="img/icon-map.png" class="icone-pequeno"/>&nbsp;São Paulo/SP&nbsp;</span>   
                                                        <div class="numero-top">
                                                            <p class="data">26/11</p>
                                                            <p class="hora">10:30</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>              
                                </div>
                                <div class="card card-azul">
                                    <p>Ative sua localização para ter buscas mais precisas.</p>
                                </div>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 direita">
                                <div class="card card-verde">
                                    <p>Qual seu número de telefone?</p>
                                    <p>&nbsp;</p>
                                </div>
                                <div class="card card-rosa">
                                    <span>Você criou o evento</span>
                                    <p>Uma noite no museu</p>
                                </div>
                            </div>
                            <div class="col-md-5 col-lg-5 col-sm-5 col-xs-5 esquerda">
                                <div class="card card-rosa">
                                    <span>Você criou o evento</span>
                                    <p>Summer Alok 18</p>
                                </div>
                            </div>
                            <div class="col-md-7 col-lg-7 col-sm-7 col-xs-7 direita">           
                                <div class="card card-vermelho">
                                    <span>Você criou a elist</span>
                                    <p>Lugares em São Paulo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}