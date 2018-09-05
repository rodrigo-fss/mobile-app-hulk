"use strict"

/** @jsx m */

var Profile = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .concluir, .inicio p {display: none;}
            .perfil {text-align: center;}
            .perfil h4 {font-family: 'Open Sans'; font-weight: 700; font-size: 6vw;}
            .foto-perfil {padding-bottom: 10px; width: 50%; margin: 0 auto; display: block;}
            .perfil p {font-family: 'Montserrat'; font-size: 2.5vw;}
            .perfil .private {font-weight: 700;}
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
            <Layout animeteEffect="fadeIn" hideHeader="y" hideFooter="y" hidePublicarHeader="y" hidePerfilFooter="n" hideComentarFooter="y">
                <style>{this.stylesheet}</style>
                <Cabecalho title="Login" routeCheck="/preferencias"></Cabecalho>

                <section class="perfil">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2"></div>
                        <div class="col-md-8 col-lg-8 col-sm-8 col-xs-8">
                            <img src="img/perfil-foto-menu.png" class="foto-perfil"/>
                            <h4>John Thomas</h4>
                            <p class="legenda">Lorem ipsum dolors sit amet, consectetuer adispicing elit. Aenean commodo</p>
                            <p class="private">Private Profile</p>              
                        </div>          
                        <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2"></div>
                    </div>
                </div>
            </section>
            </Layout>
        )
    }
}