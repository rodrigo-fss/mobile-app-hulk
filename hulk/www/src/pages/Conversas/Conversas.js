"use strict"

/** @jsx m */

var Conversas = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .concluir, .inicio p {display: none;}
            .inicio:after{content: 'Mensagens';}
            .conversas h4 {font-family: 'Open Sans'; font-weight: 700}
            .search { position: relative; margin-bottom: 20px;}
            .search input { text-indent: 30px; background-color: #292929 !important; font-family: 'Montserrat'; color: #fff !important; border-radius: 4px; -webkit-box-shadow: 0px 0px 15px 0px rgba(204,204,204,1); -moz-box-shadow: 0px 0px 15px 0px rgba(204,204,204,1); box-shadow: 0px 0px 15px 0px rgba(204,204,204,1);}
            .search input::placeholder {color: #fff !important;}
            .search img { position: absolute;  width: 15px; top: 50%; transform: translate(0, -50%); margin-left: 10px;}
            .lista-conversas {margin-top: 15px; margin-bottom: 15px;}
            .lista-conversas img {float: left; width: 50px;}
            .pessoa {margin-left: 70px; margin-top: 10px; line-height: 1.0;}
            .pessoa .nome {font-weight: 700; font-family: 'Montserrat'; font-size: 14px; margin-bottom: 0; color: #2f2f2f}
            .pessoa .ultima-mensagem {font-weight: 700; font-family: 'Montserrat'; font-size: 10px; color: #2f2f2f}
            .tempo {float: right; margin-top: 13px; font-family: 'Montserrat'; font-weight: 400; font-size: 10px; text-align: right; color: #2f2f2f}
            .online {background-color: #089d4e; border-radius: 50%; width: 8px; height: 8px; margin-left: auto; margin-right: 0; margin-bottom: 6px; }
            .notifica {background-color: #ff292e; border-radius: 50%; width: 20px; height: 20px; color: #fff; z-index: 2; display: block; float: left; text-align: center; margin-left: -15px; font-family: 'Montserrat'; font-weight: 400;}
            .borda {border-bottom: 0.5px solid #dcdcdc; padding: 0}

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
            <Layout animeteEffect="fadeIn" hideHeader="y" hidePublicarHeader="y" hideFooter="y" hidePerfilFooter="y" hideComentarFooter="y">
                <style>{this.stylesheet}</style>
                <Cabecalho title="Login" routeCheck="/home"></Cabecalho>
                    <section class="conversas">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <h4>Conversas</h4>
                                    <div class="search">
                                        <img src="img/icon-search.png"/>
                                        <input type="text" class="form-control" placeholder="Search"/>
                                    </div>          
                                </div>          
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 lista-conversas" >
                                    <img src="img/adam-levis.png"/>
                                    <div class="notifica">
                                        <span>2</span>
                                    </div>
                                    <div class="tempo">
                                        <div class="online"></div>
                                        <span>1 min</span>
                                    </div>
                                    <div class="pessoa" onclick={(e) => {e.preventDefault(); navigateRoute('/chat-details');}}>
                                        <p class="nome">Adam Lewis</p>
                                        <span class="ultima-mensagem">Ko, Kumaha Project anu eta...</span>              
                                    </div>
                                </div>
                                <div class="row borda"></div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 lista-conversas">
                                    <img src="img/steve-monroe.png"/>

                                    <div class="tempo">
                                        <div class="online"></div>
                                        <span>1 min</span>
                                    </div>
                                    <div class="pessoa" onclick={(e) => {e.preventDefault(); navigateRoute('/chat-details');}}>
                                        <p class="nome">Steve Monroe</p>
                                        <span class="ultima-mensagem">Ane menang contes $1000...</span>             
                                    </div>
                                </div>
                                <div class="row borda"></div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 lista-conversas">
                                    <img src="img/adam-levis.png"/>
                                    <div class="notifica">
                                        <span>2</span>
                                    </div>
                                    <div class="tempo">
                                        <div class="online"></div>
                                        <span>1 min</span>
                                    </div>
                                    <div class="pessoa" onclick={(e) => {e.preventDefault(); navigateRoute('/chat-details');}}>
                                        <p class="nome">Adam Lewis</p>
                                        <span class="ultima-mensagem">Ko, Kumaha Project anu eta...</span>              
                                    </div>
                                </div>
                                <div class="row borda"></div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 lista-conversas">
                                    <img src="img/steve-monroe.png"/>
                                    <div class="tempo">
                                        <div class="online"></div>
                                        <span>1 min</span>
                                    </div>
                                    <div class="pessoa" onclick={(e) => {e.preventDefault(); navigateRoute('/chat-details');}}>
                                        <p class="nome">Steve Monroe</p>
                                        <span class="ultima-mensagem">Ane menang contes $1000...</span>             
                                    </div>
                                </div>
                                <div class="row borda"></div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 lista-conversas">
                                    <img src="img/adam-levis.png"/>
                                    <div class="notifica">
                                        <span>2</span>
                                    </div>
                                    <div class="tempo">
                                        <div class="online"></div>
                                        <span>1 min</span>
                                    </div>
                                    <div class="pessoa" onclick={(e) => {e.preventDefault(); navigateRoute('/chat-details');}}>
                                        <p class="nome">Adam Lewis</p>
                                        <span class="ultima-mensagem">Ko, Kumaha Project anu eta...</span>              
                                    </div>
                                </div>
                                <div class="row borda"></div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 lista-conversas">
                                    <img src="img/steve-monroe.png"/>

                                    <div class="tempo">
                                        <div class="online"></div>
                                        <span>1 min</span>
                                    </div>
                                    <div class="pessoa" onclick={(e) => {e.preventDefault(); navigateRoute('/chat-details');}}>
                                        <p class="nome">Steve Monroe</p>
                                        <span class="ultima-mensagem">Ane menang contes $1000...</span>             
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </Layout>
        )
    }
}