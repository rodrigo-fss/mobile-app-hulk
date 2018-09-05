"use strict"

/** @jsx m */

var Amigos = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .inicio p {display: none;}
            .inicio:after{content: 'Perfil';}
            .amigos h4 {font-family: 'Open Sans'; font-weight: 700}
            .search { position: relative; margin-bottom: 20px;}
            .search input { text-indent: 30px; background-color: #292929 !important; font-family: 'Montserrat'; color: #fff !important; border-radius: 4px;}
            .search input::placeholder {color: #fff !important;}
            .search img { position: absolute;  width: 15px; top: 50%; transform: translate(0, -50%); margin-left: 10px;}
            .amigos-grid {padding-bottom: 20px;}
            .amigos-grid img {width: 100%;}
            .amigos-grid p {font-family: 'Montserrat'; font-weight: 700; font-size: 3vw; text-align: center;}
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
                <section class="amigos">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <h4>Amigos</h4>
                                <div class="search">
                                    <img src="img/icon-search.png"/>
                                    <input type="text" class="form-control" placeholder="Search"/>
                                </div>          
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 amigos-grid">
                                <img src="img/chris-noel.png"/>
                                <p>Chris Noel</p>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 amigos-grid">
                                <img src="img/sarah-jones.png"/>
                                <p>Sarah Jones</p>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 amigos-grid">
                                <img src="img/rebecca-alwin.png"/>
                                <p>Rebecca Alwin</p>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 amigos-grid">
                                <img src="img/chris-noel.png"/>
                                <p>Chris Noel</p>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 amigos-grid">
                                <img src="img/sarah-jones.png"/>
                                <p>Sarah Jones</p>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 amigos-grid">
                                <img src="img/rebecca-alwin.png"/>
                                <p>Rebecca Alwin</p>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 amigos-grid">
                                <img src="img/chris-noel.png"/>
                                <p>Chris Noel</p>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 amigos-grid">
                                <img src="img/sarah-jones.png"/>
                                <p>Sarah Jones</p>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 amigos-grid">
                                <img src="img/rebecca-alwin.png"/>
                                <p>Rebecca Alwin</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}