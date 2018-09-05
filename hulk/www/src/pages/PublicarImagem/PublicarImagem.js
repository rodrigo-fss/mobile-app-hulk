"use strict"

/** @jsx m */

var PublicarImagem = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
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
            .publicante {margin-top: 20px;}
            .publicante img {float: left; width: 40px;}
            .pessoa {margin-left: 60px; margin-top: 10px; line-height: 1.0;}
            .pessoa .nome {font-weight: 600; font-family: 'Montserrat'; font-size: 16px; margin-bottom: 0; color: #797979}
            .pessoa .amigos-em-comum {font-weight: 300; font-family: 'Montserrat'; font-size: 10px;}
            .seguir {border: 1px solid #797979; border-radius: 5px; float: right; margin-top: 13px; font-family: 'Montserrat'; font-weight: 400; font-size: 10px; width: 60px; text-align: center;}
            .seguir:hover {color: #fff; background-color: #0ca855; border: 1px solid #0ca855 }
            .publicacao img{width: 100%;}
            textarea {width: 100%; font-family: 'Montserrat'; font-weight: 200; border: none; margin-top: 10px;}

            .numero-top {position: relative; border-radius: 50%; color: #fff; width: 40px; height: 40px; margin-top: 10px; float: right; text-align: center; font-family: 'Open Sans'; font-weight: 400; background: rgba(248,65,26,1); background: -moz-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(248,65,26,1)), color-stop(28%, rgba(248,65,26,1)), color-stop(57%, rgba(239,34,75,1)), color-stop(100%, rgba(239,34,75,1))); background: -webkit-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -o-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -ms-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8411a', endColorstr='#ef224b', GradientType=1 ); margin-bottom: 20px;}


            .numero-top p{position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%); font-size: 30px; font-family: 'Montserrat'}
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
            <Layout animeteEffect="fadeIn" hideHeader="y" hideFooter="y">
                <style>{this.stylesheet}</style>
                <section class="filter">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 publicante">
                                <img src="img/anna-pegova.png"/>
                                <div class="pessoa">
                                    <p class="nome">Anna Pegova</p>
                                </div>
                            </div>
                        </div>
                        <div class="row publicacao">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12"> 
                                <textarea name="comment" form="usrform" rows = "3" placeholder="Diga algo sobre essa imagem"></textarea>
                            </div>  
                            <img src="img/publicar-imagem.png"/>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12"> 
                                <div class="numero-top"><p>+</p></div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}