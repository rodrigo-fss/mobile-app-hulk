"use strict"

/** @jsx m */

var FotosEvento = {
    stylesheet: '',
    model: {
        fotos: [],
        selectedIndex: 0
    },
    actions: {
    },
    oninit: function (vnode) {
        FotosEvento.model.fotos = Store.get('fotos_evento');

        this.stylesheet = `
        .item {
            height: 100vh;
            width: 100vw;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        .owl-theme .owl-nav.disabled+.owl-dots {
            position: absolute;
            bottom: 0;
            width: 100%;
        }
        .owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
            background: #808080;
        }
        `;
    },
    oncreate: function(vnode) {
        // config slider
        $('.owl-carousel').owlCarousel({
            loop:false,
            dots:true,
            margin:10,
            nav:false,
            center:true,
            startPosition: FotosEvento.model.selectedIndex,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

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
            <Layout animeteEffect="fadeInRight" hideHeader="y" hidePublicarHeader="y" hidePerfilFooter="y" hideFooter="y" hideComentarFooter="y"> 
                <style>
                    {this.stylesheet}
                </style>
                <div class="owl-carousel owl-theme">
                    {
                        FotosEvento.model.fotos.map((foto, index) => {
                            if (foto.selected) {
                                FotosEvento.model.selectedIndex = index;
                            }

                            return (
                                <div class="item" style={"background: url("+ foto.src +")"}>
                                </div>
                            )
                        })
                    }
                </div>
            </Layout>
        )
    }
}