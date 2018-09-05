"use strict"

/** @jsx m */

var Notificacoes = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .concluir, .inicio p {display: none;}
            .inicio:after{content: 'Perfil';}
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
            .card .titulo-grande-card {font-weight: 700; font-size: 4.5vw;}
            .card .titulo-medio-card {font-weight: 700; font-size: 3vw; margin-bottom: 0px; margin-top: 0px;}
            .card .span-grande {font-size: 12px; line-height: 1.5;}
            .card .span-medio {font-size: 7px; margin-bottom: 5px}
            .card .comentario {font-size: 10px; margin-bottom: 5px; margin-top: 20px;}
            .card-verde {background-color: #089d4e;}
            .card-rosa {background-color: #f12484;}
            .card-azul {background-color: #1787fb}
            .card-vermelho {background-color: #f32e37}
            .card-cinza {background-color: #e7edf2; color: #000 !important;}
            .esquerda {padding-right: 5px;}
            .direita {padding-left: 0;}

            .img-perfil-curtida {width: 20%; float: left; margin-right: 3px;}
            .imagem-full {width: 100%; height: 150px;background-size: cover; display: table;  background-position: top center; border-radius: 10px; position: relative;}
            .new-features {background-image: url("img/new-features.png");}
            .upvotes {background-image: url("img/upvotes.png");}
            .promotion {background-image: url("img/promotion.png");}
            .texto-centralizado-card {text-align: center; position: absolute; top: 50%; transform: translateY(-50%);}
            .bottom {position: absolute;bottom: 0;}
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
            <Layout animeteEffect="fadeIn" hideHeader="y" hidePublicarHeader="y" hidePerfilFooter="y" hideComentarFooter="y" hideFooter="y">
                <style>{this.stylesheet}</style>
                <Cabecalho title="Login" routeCheck="/home"></Cabecalho>                
                <section class="perfil">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <h4>Notificações</h4>               
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-7 col-lg-7 col-sm-7 col-xs-7 esquerda">  
                                <div class="card card-verde">
                                    <p class="titulo-grande-card">Vamos nos conhecer melhor?</p>
                                    <p class="span-grande">Complete suas informações em seu perfil e nos ajude a entender melhor seus gostos</p>
                                </div>
                                <div class="card imagem-full new-features">
                                    <p class="titulo-grande-card texto-centralizado-card">New features in Meaple</p>
                                </div>
                                <div class="card card-rosa">
                                    <img src="img/rebecca-alwin.png" class="img-perfil-curtida"/>
                                    <p class="titulo-medio-card">Rebecca Alwin</p>
                                    <p class="span-grande">follow you</p>
                                </div>  
                            </div>
                            <div class="col-md-5 col-lg-5 col-sm-5 col-xs-5 direita">
                                <div class="card card-azul">
                                    <img src="img/chris-noel.png" class="img-perfil-curtida"/>
                                    <p class="titulo-medio-card">Chris Noel</p>
                                    <p class="span-medio">Curtiu seu post</p>
                                </div>
                                <div class="card imagem-full upvotes">
                                    <p class="span-grande bottom">26 new upvotes in your storie.</p>
                                </div>
                                <div class="card card-cinza">
                                    <img src="img/sarah-jones.png" class="img-perfil-curtida"/>
                                    <p class="titulo-medio-card">Sarah Jones</p>
                                    <p class="span-medio">reply your comment</p>
                                    <p class="comentario">Lorem ipsum dolor sit amet, consectetuer adispicing elit. Aenean commodo ligula eget. Aenean commodo ligula eget. </p>
                                </div>          
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5 col-lg-5 col-sm-5 col-xs-5 esquerda">
                                <div class="card card-cinza">
                                    <img src="img/sarah-jones.png" class="img-perfil-curtida"/>
                                    <p class="titulo-medio-card">Sarah Jones</p>
                                    <p class="span-medio">reply your comment</p>
                                    <p class="comentario">Lorem ipsum dolor sit amet, consectetuer adispicing elit. Aenean commodo ligula eget. Aenean commodo ligula eget. </p>
                                </div>
                            </div>
                            <div class="col-md-7 col-lg-7 col-sm-7 col-xs-7 direita">           
                                <div class="card imagem-full promotion">
                                    <p class="titulo-grande-card texto-centralizado-card">Promotion Latam+Meaple</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        )
    }
}