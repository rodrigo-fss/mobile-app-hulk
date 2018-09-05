"use strict"

/** @jsx m */

var Cabecalho = {
    stylesheet: '',
    oninit: function() {
        this.stylesheet = `
            .voltar img {float: left; width: 20px; margin-top: 4px;}
            .concluir img{float: right; width: 20px; margin-top: 4px;}
            .inicio {padding: 0; font-family: 'Open Sans'; font-weight: 600; font-size: 15px;}
            .cabecalho-2 {margin-top: 20px;}
        `;
    },
    oncreate: function(vnode) {
    },
    view: function(vnode) {
        return (
            <div>
                <style>{this.stylesheet}</style>
                <section class="cabecalho-2">
                    <div class="container">
                        <div class="row">
                            <div class="navegacao">
                                <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2 voltar" onclick={() => navigateRoute(vnode.attrs.routeBack)}>
                                    <img src="img/icon-back.png" />
                                </div>
                                <div class="col-md-8 col-lg-8 col-sm-8 col-xs-8 inicio ">
                                    <p>{vnode.attrs.title}</p>
                                </div>
                                <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2 concluir" onclick={() => navigateRoute(vnode.attrs.routeCheck)}>
                                    <img src="img/check.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}