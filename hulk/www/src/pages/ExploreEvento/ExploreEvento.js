"use strict"

/** @jsx m */

var ExploreEvento = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .concluir, .inicio p {display: none;}
            .inicio:after{content: 'Início';}
            .explore-evento h4, .explore-evento h5 {font-family: 'Open Sans'; font-weight: 700}

            .search { position: relative; margin-bottom: 20px;}
            .search input { text-indent: 30px; background-color: #292929 !important; font-family: 'Montserrat'; color: #fff !important; border-radius: 4px;}
            .search input::placeholder {color: #fff !important;}
            .search img { position: absolute;  width: 15px; top: 50%; transform: translate(0, -50%); margin-left: 10px;}
            
            .pad {padding-bottom: 10px;}

            .lista {padding-top: 10px; background: rgba(250,250,250,1); 
                background: -moz-linear-gradient(top, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);
                background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(250,250,250,1)), color-stop(100%, rgba(255,255,255,1)));
                background: -webkit-linear-gradient(top, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);
                background: -o-linear-gradient(top, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);
                background: -ms-linear-gradient(top, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);
                background: linear-gradient(to bottom, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fafafa', endColorstr='#ffffff', GradientType=0 );}
            
            .evento {background-image: url("img/imagem-evento-2.png");width: 100%; height: 120px; background-size: cover; display: table;  background-position: top center; border-radius: 10px; position: relative;}
            .evento-2 {background-image: url("img/imagem-evento-3.png");width: 100%; height: 120px; background-size: cover; display: table;  background-position: top center; border-radius: 10px; position: relative;}
            .evento-3 {background-image: url("img/imagem-evento-4.png");width: 100%; height: 120px; background-size: cover; display: table;  background-position: top center; border-radius: 10px; position: relative;}
            .evento-4 {background-image: url("img/imagem-evento-5.png");width: 100%; height: 120px; background-size: cover; display: table;  background-position: top center; border-radius: 10px; position: relative;}
            .evento-5 {background-image: url("img/imagem-evento-6.png");width: 100%; height: 120px; background-size: cover; display: table;  background-position: top center; border-radius: 10px; position: relative;}
            #grad {
                pointer-events: none;   /* isto faz com que o clique "passe" adiante */  
                min-height:60px;       /* Aqui voce define o tamanho do degrade */
                width:100%;
                position:absolute;
                bottom:-1px;
                left: 0;
                background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 80%);
            }
            .info {margin-top: -50px;}
            .lista .titulo-evento {font-family: 'Montserrat'; font-weight: 700; font-size: 14px; margin-bottom: 0; float: left; margin-bottom: 5px;}
            .cidade, .data, .horario{font-family: 'Montserrat'; font-weight: 400; font-size: 9px; color: #797979; float: left;}

            .info .icone-pequeno{width: 9px;}
            .tipo-evento {text-transform: uppercase; color: #ffffff; background-color: #068ebf; border-radius: 5px; text-align: center; width: 50px; font-family: 'Montserrat'; font-weight: 400; font-size: 9px;}
            
            .numero-top {position: relative; border-radius: 50%; color: #fff; width: 30px; height: 30px; margin: 10px;
                float: right; text-align: center; font-family: 'Open Sans'; font-weight: 400; background: rgba(248,65,26,1);
                background: -moz-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%);
                background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(248,65,26,1)), color-stop(28%, rgba(248,65,26,1)), color-stop(57%, rgba(239,34,75,1)), color-stop(100%, rgba(239,34,75,1)));
                background: -webkit-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%);
                background: -o-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%);
                background: -ms-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%);
                background: linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); 
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8411a', endColorstr='#ef224b', GradientType=1 );}

            .numero-top p{position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%);}

            .evento-tudo {margin-bottom: 20px}
            .explore-evento h5 {margin-top: 0;}
            .explore-evento {margin-bottom: 30px;}
            .search { position: relative; margin-bottom: 20px; margin-top: 20px;}
            .search input { text-indent: 30px; background-color: #292929 !important; font-family: 'Montserrat'; color: #fff !important; border-radius: 4px;}
            .search input::placeholder {color: #fff !important;}
            .search img { position: absolute;  width: 15px; top: 50%; transform: translate(0, -50%); margin-left: 10px;}
            .situacao-participante p {font-family: 'Montserrat'; font-size: 3vw; font-weight: 300; text-transform: uppercase; text-align: center;}
            .events-option {font-weight: 700 !important;}
            .situacao-participante .meio {border-left: 1px solid #ccc; }
            .situacao-participante {margin-bottom: 20px;}
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
             <Layout animeteEffect="fadeIn" hideHeader="y" hidePublicarHeader="y" hidePerfilFooter="y" hideComentarFooter="y">
                <style>{this.stylesheet}</style>
                
                <section class="explore-evento">
                    <div class="container">
                        <div class="row">           
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">           
                                <div class="search">
                                    <img src="img/icon-search.png"/>
                                    <input type="text" class="form-control" placeholder="Explore"/>
                                </div>          
                            </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 situacao-participante">
                                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6" onclick={(e) => {e.preventDefault(); navigateRoute('/explore-evento');}}>
                                    <p class="events-option">Events</p>
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6 meio" onclick={(e) => {e.preventDefault(); navigateRoute('/explore-people');}}>
                                    <p class="people-option">People</p>
                                </div>

                            </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 pad">
                                <div class="row evento-tudo" onclick={(e) => {e.preventDefault(); navigateRoute('/stories-expandida');}}>
                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div class="evento">
                                            <div class="numero-top"><p>82</p></div>
                                            <div id="grad"></div>
                                        </div>              
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 info">
                                            <div class="">
                                                <div class="tipo-evento">Parties</div>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <h4 class="titulo-evento">Pool Party <img src="img/icon-cadeado.png" class="icone-pequeno"/></h4>                                     
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">                                       
                                                        <span class="data"><img src="img/icon-relogio.png" class="icone-pequeno"/>&nbsp;12/11/2017</span>
                                                        <span class="horario">| 20:00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                  
                                <div class="row evento-tudo" onclick={(e) => {e.preventDefault(); navigateRoute('/stories-expandida');}}>
                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div class="evento">
                                            <div class="numero-top"><p>82</p></div>
                                            <div id="grad"></div>
                                        </div>              
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 info">
                                            <div class="">
                                                <div class="tipo-evento">Parties</div>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <h4 class="titulo-evento">Pool Party <img src="img/icon-cadeado.png" class="icone-pequeno"/></h4>                                     
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">                                       
                                                        <span class="data"><img src="img/icon-relogio.png" class="icone-pequeno"/>&nbsp;12/11/2017</span>
                                                        <span class="horario">| 20:00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                                <div class="row evento-tudo" onclick={(e) => {e.preventDefault(); navigateRoute('/stories-expandida');}}>
                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div class="evento">
                                            <div class="numero-top"><p>82</p></div>
                                            <div id="grad"></div>
                                        </div>              
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 info">
                                            <div class="">
                                                <div class="tipo-evento">Parties</div>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <h4 class="titulo-evento">Pool Party <img src="img/icon-cadeado.png" class="icone-pequeno"/></h4>                                     
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <span class="data"><img src="img/icon-relogio.png" class="icone-pequeno"/>&nbsp;12/11/2017</span>
                                                        <span class="horario">| 20:00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                                <div class="row evento-tudo" onclick={(e) => {e.preventDefault(); navigateRoute('/stories-expandida');}}>
                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div class="evento">
                                            <div class="numero-top"><p>82</p></div>
                                            <div id="grad"></div>
                                        </div>              
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 info">
                                            <div class="">
                                                <div class="tipo-evento">Parties</div>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <h4 class="titulo-evento">Pool Party <img src="img/icon-cadeado.png" class="icone-pequeno"/></h4>                                     
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                        <span class="data"><img src="img/icon-relogio.png" class="icone-pequeno"/>&nbsp;12/11/2017</span>
                                                        <span class="horario">| 20:00</span>
                                                    </div>
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