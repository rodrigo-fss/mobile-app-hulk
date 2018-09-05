"use strict"

/** @jsx m */

var Preferencias = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .inicio p {display: none;}
            .inicio:after{content: 'Login';}
            .filter h4 {font-family: 'Open Sans'; font-weight: 700}
            .search { position: relative; margin-bottom: 20px;}
            .search input { text-indent: 30px; background-color: #292929 !important; font-family: 'Montserrat'; color: #fff !important; border-radius: 4px;}
            .search input::placeholder {color: #fff !important;}
            .search img { position: absolute;  width: 15px; top: 50%; transform: translate(0, -50%); margin-left: 10px;}
            .local {position: relative;}
            .local h5 {z-index: 2; color: #fff; font-family: 'Source Sans Pro'; font-weight: 700;font-size: 20px; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%) }
            .column {overflow-x: scroll; overflow-y: hidden; white-space: nowrap;}
            .column .imagem {position: relative; display: inline-block; margin-right: 8px;}
            .column span {position: absolute;}
            .column img {
              height: 130px;
              width: auto;
              border-radius: 10px;
              box-shadow: 4px 3px 8px 0 rgba(0, 0, 0, 0.2), 4px 2px 4px 0 rgba(0, 0, 0, 0.19)
            }
            .pad {padding-bottom: 10px;}
            .opcao-filtro {margin-top: 20px;}
            .opcao-filtro img {float: left; width: 60px;}
            .opcao-filtro .nome {margin-top: 15px; font-family: 'Open Sans'; font-weight: 700}
            .opcao-filtro .excluir {color: red; float: right; margin-top: 18px;}

            .voltar img {float: left; width: 20px; margin-top: 4px;}
            .concluir img{float: right; width: 20px; margin-top: 4px;}
            .inicio {padding: 0; font-family: 'Open Sans'; font-weight: 600; font-size: 15px;}
            .cabecalho-2 {margin-top: 20px;}
            .titulo {color: #fff; text-shadow: 1px 1px #999; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: 'Open Sans'; font-size: 18px;}
            .imagem-rounded {border-radius: 5px; margin-right: 10px;}
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
            <Layout animeteEffect="fadeIn" hideHeader="y" hidePublicarHeader="y" hideFooter="y" hidePerfilFooter="y" hideComentarFooter="y">
                <style>{this.stylesheet}</style>
                <Cabecalho title="Login" routeCheck="/home"></Cabecalho>
                <section class="filter">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <h4>Preferências</h4>
                                <div class="search">
                                    <img src="img/icon-search.png" />
                                    <input type="text" class="form-control" placeholder="Search" />
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div class="image-grid">
                                    <div class="column">
                                        <div class="row">
                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 pad">
                                                <div class="imagem">
                                                    <img src="img/cerveja2.jpg" />
                                                    <p class="titulo">Bera 2</p>
                                                </div>
                                                <div class="imagem">
                                                    <img src="img/cerveja3.jpg" />
                                                    <p class="titulo">Bera 3</p>
                                                </div>
                                                <div class="imagem">
                                                    <img src="img/cerveja4.jpg" />
                                                    <p class="titulo">Bera 4</p>
                                                </div>
                                                <div class="imagem">
                                                    <img src="img/cerveja.jpg" />
                                                    <p class="titulo">Bera</p>
                                                </div>
                                                <div class="imagem">
                                                    <img src="img/cerveja.jpg" />
                                                    <p class="titulo">Bera</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 pad">
                                                <div class="imagem">
                                                    <img src="img/food.png" />
                                                    <p class="titulo">Food</p>
                                                </div>
                                                <div class="imagem">
                                                    <img src="img/cerveja4.jpg" />
                                                    <p class="titulo">Bera 4</p>
                                                </div>
                                                <div class="imagem">
                                                    <img src="img/cerveja3.jpg" />
                                                    <p class="titulo">Bera 3</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 opcao-filtro">
                                <p class="excluir">X</p>
                                <img src="img/cerveja3.jpg" class="imagem-rounded" />
                                <p class="nome">IPA</p>
                            </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 opcao-filtro">
                                <p class="excluir">X</p>
                                <img src="img/cerveja2.jpg" class="imagem-rounded"/>
                                <p class="nome">Bera</p>
                            </div>
                        </div>
                    </div>

                </section>
            </Layout>
        )
    }
}
