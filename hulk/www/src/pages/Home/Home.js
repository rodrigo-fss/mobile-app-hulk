    "use strict"

/** @jsx m */

var Home = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .lista {padding-top: 30px; padding-bottom:40px; background-color:#FAFAFA;}
            .cerveja {
              width: 100%;
              height: 200px;
              background-size: cover;
              display: table;
              background-position: bottom center;
              border-radius: 20px;
              position: relative;
              margin-bottom: 20px;
            }
            .cerveja-img-1 {background-image: url(img/cerveja.jpg);}
            .cerveja-img-2 {background-image: url("img/cerveja2.jpg");}
            #grad {
              pointer-events: none;
              min-height: 100px;
              width: 100%;
              position: absolute;
              bottom: -20px;
              left: 0;
              border-radius: 0 0 20px 20px;
              background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%);
            }
            .comentarios {

              width: 101%;
              height: 205px;
              position: absolute;
              background-color: #FFF;
              z-index: 4;
              margin-top: -5px;
              border-radius: 20px;
              opacity: 0;
            }
            .comentarios:hover {
              visibility: visible;
              opacity: 1;
              transition: opacity 1s linear;
            }
            .info { position: absolute; bottom: -5px;}
            .lista .titulo-cerveja {font-family: 'Montserrat'; font-weight: 700; font-size: 18px; margin-bottom: 0; float: left}
            .cidade, .data, .horario {font-family: 'Montserrat'; font-weight: 400; font-size: 9px; color: #797979}
            .cidade {margin-right:10px;}
            .info .icone-pequeno{width: 9px;}
            .tipo-cerveja {text-transform: uppercase; color: #ffffff; background-color: #068ebf; border-radius: 5px; text-align: center; width: 50px; font-family: 'Montserrat'; font-weight: 400; font-size: 9px;}
            .tipo-cerveja-2 {background-color: #bf5406;}
            .pessoas-rounded {float: right; margin-top: 10px}
            .pessoas-rounded img, .local-famoso img{ width: 18px;  margin-right:2px; }
            .quantidade {border-radius: 50%; margin-top: 2px; float: right; background-color: #ececec; width: 18px; height: 18px; font-family: 'Montserrat'; font-weight: 700; color: #000; text-align: center; color: #2f2f2f; font-size: 12px;}
            .check {border-radius: 50%; background-color: #fff; width: 25px; height: 25px; margin: 10px; float: left;}

            .numero-top {position: relative; border-radius: 50%; color: #fff; width: 30px; height: 30px; margin: 10px; float: right; text-align: center; font-family: 'Open Sans'; font-weight: 400; background: rgba(248,65,26,1); background: -moz-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(248,65,26,1)), color-stop(28%, rgba(248,65,26,1)), color-stop(57%, rgba(239,34,75,1)), color-stop(100%, rgba(239,34,75,1))); background: -webkit-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -o-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -ms-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8411a', endColorstr='#ef224b', GradientType=1 );}
            .check {position: relative;}
            .check img {width: 70%;}
            .varias-fotos {width: 40px;}
            .numero-top p, .check img, .varias-fotos{position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%) }

            .local-famoso {color: #17a359; font-family: 'Montserrat'; font-weight: 700; font-size: 9px; margin-right:10px;}
            .cerveja-tudo {margin-bottom: 20px}
            @media (min-width: 425px){
              .cerveja, .cerveja-img-2 {height: 250px;}
              .comentarios {height: 260px;}
            }
            .comentarios {padding: 15px; padding-bottom: 0; overflow: scroll;}
            .comentario{padding: 5px 0; }
            .comentario:first-child {border-bottom: 1px solid #ccc;}
            .comentario img {
              width: 40px;
              float: left;
            }
            .comentario .texto {
              margin-left: 50px;
            }
            .comentario .texto .comentario-pessoa{
              font-family: Montserrat;
              font-weight: 600;
              margin-bottom: 0;
            }
            .comentario .texto .comentario-texto{
              font-family: Montserrat;
              font-size:12px;
            }

        `;
    },
    oncreate: function(vnode) {
        // config slider
        $("#ex12c").slider({ id: "slider12c", min: 0, max: 350, range: true, value: [45, 250] });

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
            <Layout animeteEffect="fadeIn" hidePublicarHeader="y" hidePerfilFooter="y" hideComentarFooter="y">
                <style>{this.stylesheet}</style>
                <section class="lista">
                    <div class="container">
                        <div class="row cerveja-tudo">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12" >
                                <div class="cerveja cerveja-img-1" onclick={(e) => {e.preventDefault(); navigateRoute('/stories-expandida');}}>
                                  <div class="comentarios">
                                    <div class="comentario">
                                      <img src="img/anna-pegova.png"/>
                                      <div class="texto">
                                        <p class="comentario-pessoa">Everson de Souza</p>
                                        <p class="comentario-texto">Uau, que cerveja bacana</p>
                                      </div>
                                    </div>
                                    <div class="comentario">
                                      <img src="img/anna-pegova.png"/>
                                      <div class="texto">
                                        <p class="comentario-pessoa">Anna Pegova</p>
                                        <p class="comentario-texto">Uau, que cerveja bacana</p>
                                      </div>
                                    </div>
                                    <div class="comentario">
                                      <img src="img/anna-pegova.png"/>
                                      <div class="texto">
                                        <p class="comentario-pessoa">Anna Pegova</p>
                                        <p class="comentario-texto">Uau, que cerveja bacana</p>
                                      </div>
                                    </div>
                                    <div class="comentario">
                                      <img src="img/anna-pegova.png"/>
                                      <div class="texto">
                                        <p class="comentario-pessoa">Anna Pegova</p>
                                        <p class="comentario-texto">Uau, que cerveja bacana</p>
                                      </div>
                                    </div>
                                    <div class="comentario">
                                      <img src="img/anna-pegova.png"/>
                                      <div class="texto">
                                        <p class="comentario-pessoa">Anna Pegova</p>
                                        <p class="comentario-texto">Uau, que cerveja bacana</p>
                                      </div>
                                    </div>
                                    <div class="comentario">
                                      <img src="img/anna-pegova.png"/>
                                      <div class="texto">
                                        <p class="comentario-pessoa">Anna Pegova</p>
                                        <p class="comentario-texto">Uau, que cerveja bacana</p>
                                      </div>
                                    </div>
                                  </div>
                                    <div class="numero-top"><p>82</p></div>
                                    <div id="grad"></div>
                                    <div class="info">
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            <div class="tipo-cerveja">TIPO</div>
                                        </div>
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            <h4 class="titulo-cerveja">Nome da Cerveja</h4>
                                            <div class="pessoas-rounded" onclick={(e) => {e.preventDefault(); navigateRoute('/participantes');}}>
                                                <img src="img/pessoa-1.png" />
                                                <img src="img/pessoa-2.png" />
                                                <div class="quantidade">+5</div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            <span class="cidade"><img src="img/icon-map.png" class="icone-pequeno" />&nbsp;Bar do Didi&nbsp;</span>
                                            <span class="data"><img src="img/icon-relogio.png" class="icone-pequeno" />&nbsp;12/11/2017</span>
                                            <span class="horario">| 20:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                          <div class="row cerveja-tudo">
                              <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12" >
                                  <div class="cerveja cerveja-img-2" onclick={(e) => {e.preventDefault(); navigateRoute('/stories-expandida');}}>
                                      <div class="comentarios">
                                        <div class="comentario">
                                          <img src="img/anna-pegova.png"/>
                                          <div class="texto">
                                            <p class="comentario-pessoa">Everson de Souza</p>
                                            <p class="comentario-texto">Uau, que cerveja bacana</p>
                                          </div>
                                        </div>
                                        <div class="comentario">
                                          <img src="img/anna-pegova.png"/>
                                          <div class="texto">
                                            <p class="comentario-pessoa">Everson de Souza</p>
                                            <p class="comentario-texto">Uau, que cerveja bacana</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="numero-top"><p>82</p></div>
                                      <div id="grad"></div>
                                      <div class="info">
                                          <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                              <div class="tipo-cerveja">TIPO</div>
                                          </div>
                                          <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                              <h4 class="titulo-cerveja">Nome da Cerveja</h4>
                                              <div class="pessoas-rounded" onclick={(e) => {e.preventDefault(); navigateRoute('/participantes');}}>
                                                  <img src="img/pessoa-1.png" />
                                                  <img src="img/pessoa-2.png" />
                                                  <div class="quantidade">+5</div>
                                              </div>
                                          </div>
                                          <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                              <span class="cidade"><img src="img/icon-map.png" class="icone-pequeno" />&nbsp;São Paulo/SP&nbsp;</span>
                                              <span class="data"><img src="img/icon-relogio.png" class="icone-pequeno" />&nbsp;12/11/2017</span>
                                              <span class="horario">| 20:00</span>
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
