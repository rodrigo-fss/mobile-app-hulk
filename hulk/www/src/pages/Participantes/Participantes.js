"use strict"

/** @jsx m */

var Participantes = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .concluir, .inicio p {display: none;}
            .inicio:after{content: 'Evento';}
            .filter h4 {font-family: 'Open Sans'; font-weight: 700}
            .search { position: relative; margin-bottom: 20px;}
            .search input { text-indent: 30px; background-color: #292929 !important; font-family: 'Montserrat'; color: #fff !important; border-radius: 4px;}
            .search input::placeholder {color: #fff !important;}
            .search img { position: absolute;  width: 15px; top: 50%; transform: translate(0, -50%); margin-left: 10px;}
            .situacao-participante p {font-family: 'Montserrat'; font-size: 3vw; font-weight: 300; text-transform: uppercase; text-align: center;}
            .situacao-participante p:hover {font-weight: 700; color: #0ca855}
            .situacao-participante .meio {border-left: 1px solid #ccc; border-right: 1px solid #ccc}
            .local {position: relative;}
            .local h5 {z-index: 2; color: #fff; font-family: 'Source Sans Pro'; font-weight: 700;font-size: 20px; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%) }
            .participantes {margin-top: 20px;}
            .participantes img {float: left; width: 50px;}
            .pessoa {margin-left: 70px; margin-top: 10px; line-height: 1.0;}
            .pessoa .nome {font-weight: 700; font-family: 'Montserrat'; font-size: 14px; margin-bottom: 0}
            .pessoa .amigos-em-comum {font-weight: 300; font-family: 'Montserrat'; font-size: 10px;}
            .seguir {border: 1px solid #797979; border-radius: 5px; float: right; margin-top: 13px; font-family: 'Montserrat'; font-weight: 400; font-size: 10px; width: 60px; text-align: center;}
            .seguir:hover {color: #fff; background-color: #0ca855; border: 1px solid #0ca855 }
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
                <Cabecalho title="Login" routeCheck="/preferencias" routeBack="/home"></Cabecalho>
                <section class="filter">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <h4>Participantes</h4>
                                <div class="search">
                                    <img src="img/icon-search.png"/>
                                    <input type="text" class="form-control" placeholder="Search"/>
                                </div>          
                            </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 situacao-participante">
                                <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4">
                                    <p>Confirmados</p>
                                </div>
                                <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 meio">
                                    <p>Compraram</p>
                                </div>
                                <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4">
                                    <p>Pendente</p>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 participantes">
                                <img src="img/anna-pegova.png"/>
                                <div class="seguir">
                                    <span>Seguindo</span>
                                </div>
                                <div class="pessoa" onclick={(e) => {e.preventDefault(); navigateRoute('/profile');}}>
                                    <p class="nome">Anna Pegova</p>
                                    <span class="amigos-em-comum">16 amigos em comum</span>             
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 participantes">
                                <img src="img/jon-monroe.png"/>
                                <div class="seguir">
                                    <span>Seguir</span>
                                </div>
                                <div class="pessoa" onclick={(e) => {e.preventDefault(); navigateRoute('/stories-expandida');}}>
                                    <p class="nome">Jon Monroe</p>
                                    <span class="amigos-em-comum">16 amigos em comum</span>             
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}