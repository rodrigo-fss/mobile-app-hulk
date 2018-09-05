"use strict"

/** @jsx m */

var ExplorePeople = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .explore-people {margin-bottom: 40px;}
            .concluir, .inicio p {display: none;}
            .inicio:after{content: 'Início';}
            .search { position: relative; margin-bottom: 20px; margin-top: 20px;}
            .search input { text-indent: 30px; background-color: #292929 !important; font-family: 'Montserrat'; color: #fff !important; border-radius: 4px;}
            .search input::placeholder {color: #fff !important;}
            .search img { position: absolute;  width: 15px; top: 50%; transform: translate(0, -50%); margin-left: 10px;}
            .situacao-participante p {font-family: 'Montserrat'; font-size: 3vw; font-weight: 300; text-transform: uppercase; text-align: center;}
            .situacao-participante p:hover {font-weight: 700;}
            .situacao-participante .meio {border-left: 1px solid #ccc;}
            .situacao-participante {margin-bottom: 20px;}

            .participantes {padding-top: 10px; padding-bottom: 10px; position: relative;}
            .participantes img {float: left; width: 50px;}
            .pessoa {margin-left: 70px; margin-top: 10px; line-height: 1.0;}
            .opcoes {line-height: 1.0}
            .nome {font-weight: 700; font-family: 'Montserrat'; font-size: 14px; margin-bottom: 0}
            .amigos-em-comum {font-weight: 300; font-family: 'Montserrat'; font-size: 10px;}
            .seguir {border: 1px solid #797979; border-radius: 5px; font-family: 'Montserrat'; font-weight: 400; font-size: 10px; width: 60px; text-align: center; float: right;}
            .seguir:hover {color: #fff; background-color: #0ca855; border: 1px solid #0ca855 }
            .acoes {position: absolute; top: 50%; transform: translateY(-50%); right: 15px;}
            .acoes img {height: 20px; width: auto; float: right; margin-left: 20px;}
            .borda {border-bottom: 0.5px solid #dcdcdc; padding: 0}
            .people-option {font-weight: 700 !important;}


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
                <section class="explore-people">
                    <div class="container">
                        <div class="row">           
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">           
                                <div class="search">
                                    <img src="img/icon-search.png"/>
                                    <input type="text" class="form-control" placeholder="Search"/>
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
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 participantes">
                                <img src="img/anna-pegova.png"/>              
                                <div class="pessoa">
                                    <p class="nome">Anna Pegova</p>
                                    <span class="amigos-em-comum">16 amigos em comum</span>             
                                </div>
                            </div>      
                            <div class="row borda"></div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 participantes">                         
                                <div class="acoes">                 
                                    <img src="img/icon-block.png"/>
                                    <img src="img/icon-mensagem.png"/>
                                    <div class="seguir">
                                        <span>Seguir</span>                 
                                    </div>
                                </div>
                                <div class="opcoes">    
                                    <p class="nome">Anna Pegova</p>
                                    <span class="amigos-em-comum">16 amigos em comum</span>                             
                                </div>
                            </div>      
                            <div class="row borda"></div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 participantes">
                                <img src="img/anna-pegova.png"/>              
                                <div class="pessoa">
                                    <p class="nome">Anna Pegova</p>
                                    <span class="amigos-em-comum">16 amigos em comum</span>             
                                </div>
                            </div>
                            <div class="row borda"></div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 participantes">
                                <img src="img/anna-pegova.png"/>              
                                <div class="pessoa">
                                    <p class="nome">Anna Pegova</p>
                                    <span class="amigos-em-comum">16 amigos em comum</span>             
                                </div>
                            </div>
                            <div class="row borda"></div>           
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 participantes">
                                <img src="img/anna-pegova.png"/>              
                                <div class="pessoa">
                                    <p class="nome">Anna Pegova</p>
                                    <span class="amigos-em-comum">16 amigos em comum</span>             
                                </div>
                            </div>
                            <div class="row borda"></div>                            
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}