"use strict"

/** @jsx m */

var StoriesExpandida = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .evento {background-image: url("img/imagem-evento-2.png");width: 100%; height: 250px; background-size: cover; display: table;  background-position: center center; position: relative;}
            .evento-2 {background-image: url("img/imagem-evento-3.png");width: 100%; height: 250px; background-size: cover; display: table;  background-position: center center; border-radius: 10px; position: relative;}
            #grad {
                pointer-events: none;   /* isto faz com que o clique "passe" adiante */  
                min-height:60px;       /* Aqui voce define o tamanho do degrade */
                width:100%;
                position:absolute;
                bottom:-1px;
                left: 0;
                background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 80%);
            }
            .info {margin-top: -20px;}
            .lista .titulo-evento {font-family: 'Montserrat'; font-weight: 700; font-size: 18px; margin-bottom: 20px; float: left}
            .cidade, .data, .horario {font-family: 'Montserrat'; font-weight: 400; font-size: 9px; color: #797979}
            .info .icone-pequeno{width: 9px;}
            .tipo-evento {text-transform: uppercase; color: #ffffff; background-color: #068ebf; border-radius: 5px; text-align: center; width: 50px; font-family: 'Montserrat'; font-weight: 400; font-size: 9px;}
            .tipo-evento-2 {background-color: #bf5406;}
            .pessoas-rounded {float: right; margin-top: 10px}
            .pessoas-rounded img, .local-famoso img{ width: 18px;  margin-right:2px; }
            .quantidade {border-radius: 50%; margin-top: 2px; float: right; background-color: #ececec; width: 18px; height: 18px; font-family: 'Montserrat'; font-weight: 700; color: #000; text-align: center; color: #2f2f2f; font-size: 12px;}
            .check {width: 25px; height: 25px; margin: 10px; float: left;}

            .numero-top {position: relative; border-radius: 50%; color: #fff; width: 30px; height: 30px; margin: 10px; float: right; text-align: center; font-family: 'Open Sans'; font-weight: 400; background: rgba(248,65,26,1); background: -moz-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(248,65,26,1)), color-stop(28%, rgba(248,65,26,1)), color-stop(57%, rgba(239,34,75,1)), color-stop(100%, rgba(239,34,75,1))); background: -webkit-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -o-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -ms-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8411a', endColorstr='#ef224b', GradientType=1 );}
            .check {position: relative;}
            .check img {width: 70%;}
            .varias-fotos {width: 40px;}
            .numero-top p, .check img, .varias-fotos{position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%) }

            .local-famoso {color: #17a359; font-family: 'Montserrat'; font-weight: 700; font-size: 9px;}
            .evento-tudo {margin-bottom: 20px}
            .column {overflow-x: scroll; overflow-y: hidden; white-space: nowrap;}
            .column img {width: 80px;}

            .informacoes h4 {font-family: 'Montserrat'; font-weight: 700; font-size: 14px;}
            .informacoes .pessoa {font-family: 'Montserrat'; font-weight: 700; font-size: 14px; color: #797979;}
            .criador img, .posts img{ width: 25px;  margin-right:2px; float: left; }
            .criador p {margin: 0;}
            .criador .cargo {color: #089d4e;font-family: 'Montserrat'; font-size: 9px;}
            .infos .descricao {font-family: 'Montserrat'; font-size: 13px; margin-top: 10px;}
            .infos img {width: 20px;  margin-right:15px; float: left; margin-top: 5px;}
            .lista {margin-bottom: 50px;}
            .infos {margin-bottom: 40px;}
            .gmap3{
                width: 100%;
                height: 150px;
                border-radius: 10px;
            }
            .ok {border-radius: 20px; background-color: #089d4e; width: 60%; border: none; margin: 0 auto; display: block;margin-top: 20px;}
            .ok img {width: 15%; padding: 5px;}   
            .margem {border-bottom: 1px solid #cccccc; padding-top: 20px;}
            .posts {padding-bottom: 20px;}  
            .posts .autor-post, .posts .comentario-post{font-family: 'Montserrat'; font-weight: 400; color: #797979; float: left;}
            .posts .autor-post {margin-left: 5px;}
            .comentario-post {margin-left: 32px; font-size: 13px;}
            .excluir {float: right !important; width: 14px !important;}
            .reply img {width: 14px !important; margin-top: 5px;}
            .reply span {font-size: 14px; color: #797979; font-family: 'Montserrat'; font-weight: 400;}
            .respostas {margin-top: 15px; padding-right: 0;}
            .autor-coment {width: 20px !important;}
            .comentario-com-imagem {width: 100% !important;}
            .story {padding: 0;}
        `;
    },
    oncreate: function(vnode) {      
        vnode.dom.addEventListener(animationEnd, () => {
            vnode.dom.classList.remove("animated");
        });

        $('#gmap')
            .gmap3({
                address: "R. Prof. Pedro Viriato Parigot de Souza, 3901 - Sala 158, Campina do Siqueira, Curitiba - PR, CEP: 81280-330",
                zoom: 15,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
                key: 'AIzaSyCGiX4v9JJcFLQYjqwoZ-81guAdbnsrqZo'
            })
            .marker(function (map) {
                return {
                    position: map.getCenter()//,
                    //icon: 'http://maps.google.com/mapfiles/marker_red.png'
                };
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
            <Layout animeteEffect="fadeIn" hideHeader="y" hideFooter="y" hidePerfilFooter="y" hidePublicarHeader="y">
                <style>{this.stylesheet}</style>
                <section class="lista">
                    <div class="container">
                        <div class="row evento-tudo">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 story">
                                <div class="evento">
                                    <div class="check"  onclick={() => navigateRoute(vnode.attrs.routeBack)}><img src="img/voltar.png"/></div>
                                    <div class="numero-top"><p>82</p></div>                 
                                    <div id="grad"></div>
                                </div>              
                            </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 info story">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div class="tipo-evento">Parties</div>
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            <h4 class="titulo-evento">Pool Party <img src="img/icon-cadeado.png" class="icone-pequeno"/></h4>
                                            <div class="pessoas-rounded">
                                                <img src="img/pessoa-1.png"/>
                                                <img src="img/pessoa-2.png"/>
                                                <img src="img/pessoa-3.png"/>
                                                <div class="quantidade">+5</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            <span class="cidade"><img src="img/icon-map.png" class="icone-pequeno"/>&nbsp;São Paulo/SP&nbsp;</span>
                                            <span class="data"><img src="img/icon-relogio.png" class="icone-pequeno"/>&nbsp;12/11/2017</span>
                                            <span class="horario">| 20:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="image-grid">
                            <div class="column">
                                <div class="row"> 
                                    <img src="img/stories-1.png"/>
                                    <img src="img/stories-2.png"/>
                                    <img src="img/stories-3.png"/>
                                    <img src="img/stories-4.png"/>
                                    <img src="img/stories-5.png"/>
                                </div>
                                <div class="row"> 
                                    <img src="img/stories-5.png"/>
                                    <img src="img/stories-1.png"/>
                                    <img src="img/stories-3.png"/>
                                    <img src="img/stories-2.png"/>
                                    <img src="img/stories-4.png"/>
                                </div>
                            </div>
                        </div>
                        <div class="row evento-tudo">
                            <div class="informacoes">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 criador">
                                    <h4>Informações</h4>
                                    <img src="img/pessoa-1.png"/>
                                    <div class="pessoa">
                                        <p>Mary Anne</p>
                                        <p class="cargo"> ADMIN</p>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 infos">
                                    <p class="descricao">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p><p class="descricao">Anascetur ridiculus mus.</p>
                                    <img src="img/icon-wifi.png"/>
                                    <img src="img/icon-banheiro.png"/>
                                    <img src="img/icon-bebida.png"/>
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 mapa">                      
                                    <div id="gmap" class="gmap3"></div>
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 botao">
                                    <button class="ok"><img src="img/ok.png"/></button>
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <h4>Posts</h4>
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 posts">
                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 comentario">
                                        <img src="img/anna-pegova.png"/>
                                        <div class="pessoa-post">
                                            <p class="autor-post">Anna Pegova</p>
                                            <img class="excluir" src="img/x.png"/>
                                            <p class="comentario-post">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 reply"> 
                                                <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4">
                                                    <img src="img/arrow-up.png"/>
                                                    <span>&nbsp;&nbsp;&nbsp;13</span>
                                                </div>
                                                <div class="col-md-4 col-lg-4 col-sm-4 col-xs-6">
                                                    <img src="img/reply.png"/>
                                                    <span>&nbsp;&nbsp;&nbsp;Reply</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 respostas">
                                            <img src="img/jon-monroe.png" class="autor-coment"/>
                                            <div class="pessoa-post">
                                                <p class="autor-post">Jon Monroe</p>
                                                <img class="excluir" src="img/x.png"/>
                                                <p class="comentario-post">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                                <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 reply"> 
                                                    <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4">
                                                        <img src="img/arrow-up.png"/>
                                                        <span>&nbsp;&nbsp;&nbsp;13</span>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4 col-sm-4 col-xs-6">
                                                        <img src="img/reply.png"/>
                                                        <span>&nbsp;&nbsp;&nbsp;Reply</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 margem"></div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 posts">
                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 comentario">
                                        <img src="img/jon-monroe.png"/>
                                        <div class="pessoa-post">
                                            <p class="autor-post">Jon Monroe</p>
                                            <img class="excluir" src="img/x.png"/>
                                            <p class="comentario-post">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                            <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 reply"> 
                                                <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4">
                                                    <img src="img/arrow-up.png"/>
                                                    <span>&nbsp;&nbsp;&nbsp;13</span>
                                                </div>
                                                <div class="col-md-4 col-lg-4 col-sm-4 col-xs-6">
                                                    <img src="img/reply.png"/>
                                                    <span>&nbsp;&nbsp;&nbsp;Reply</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 respostas">
                                            <img src="img/jon-monroe.png" class="autor-coment" />
                                            <div class="pessoa-post">
                                                <p class="autor-post">Jon Monroe</p>
                                                <img class="excluir" src="img/x.png"/>
                                                <img class="comentario-com-imagem" src="img/imagem-comentario.png"/>
                                            </div>
                                            <div class="reply"> 
                                                <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4">
                                                    <img src="img/arrow-up.png"/>
                                                    <span>&nbsp;&nbsp;&nbsp;13</span>
                                                </div>
                                                <div class="col-md-4 col-lg-4 col-sm-4 col-xs-6">
                                                    <img src="img/reply.png" />
                                                    <span>&nbsp;&nbsp;&nbsp;Reply</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}