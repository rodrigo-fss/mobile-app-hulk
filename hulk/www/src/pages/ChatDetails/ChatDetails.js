"use strict"

/** @jsx m */

var ChatDetails = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .inicio p {display: none;}
            .inicio:after{content: 'John Thomas';}
            .inicio {text-align: center;}
            .eu, .last-seen {float: right;}
            .conversa-outro {background-color: #000000; color: #fff; -webkit-border-radius: 70px; -webkit-border-bottom-left-radius: 0; -moz-border-radius: 70px; -moz-border-radius-bottomleft: 0; border-radius: 70px; border-bottom-left-radius: 0; padding: 10px;font-size: 11px; margin-left: 35px; margin-top: 20px; font-family: 'Quicksand'; font-weight: bold; }
            .conversa-eu {background-color: #2962ff; color: #fff; -webkit-border-radius: 70px; -webkit-border-bottom-right-radius: 0; -moz-border-radius: 70px; -moz-border-radius-bottomright: 0; border-radius: 70px; border-bottom-right-radius: 0; padding: 10px; font-size: 11px; margin-top: 20px; font-family: 'Quicksand'; font-weight: bold;}
            .conversa-outro, .conversa-eu {margin-top: 20px; margin-bottom: 0;}
            .outro img {width: 30px; bottom: 0; position: absolute;}
            .last-seen {margin-top: 5px;}
            .last-seen img {width: 12px; margin-right: 10px;}
            .last-seen {font-size: 10px; font-family: 'Quicksand'; margin-bottom: 0;}
            .outro {max-width: 70%; position: relative; margin-left: 15px; float: left; }
            .eu {max-width: 70%; position: relative; margin-right: 15px;}
            .digitando {text-align: center;}
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
            <Layout animeteEffect="fadeIn" hideHeader="y" hidePublicarHeader="y" hidePerfilFooter="y" hideFooter="y">
                <style>{this.stylesheet}</style>
                <Cabecalho title="Login" routeCheck="/home"></Cabecalho>
                <section class="conversas">
                    <div class="container">
                        <div class="row">
                            <div class="outro">
                                <img src="img/perfil-foto-menu.png"/> 
                                <p class="conversa-outro">Hey, Dude! How are you? What are you doing?   :p </p>
                            </div>  
                        </div>
                        <div class="row">
                            <div class="eu">
                                <p class = "conversa-eu">Good! How are you? </p>
                                <p class="last-seen"><img src="img/visualizado.png"/>10 sec.</p>              
                            </div>
                        </div>
                        <div class="row">
                            <div class="outro">
                                <img src="img/perfil-foto-menu.png"/> 
                                <p class="conversa-outro">Good! Will you go to the party tonigh?</p>                        
                            </div>  
                        </div>
                        <div class="row">
                            <div class="eu">
                                <p class = "conversa-eu digitando">. . .</p>                                    
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}