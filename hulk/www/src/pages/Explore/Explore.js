"use strict"

/** @jsx m */

var Explore = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
            .lista {padding-top: 10px; background: rgba(250,250,250,1);
            background: -moz-linear-gradient(top, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);
            background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(250,250,250,1)), color-stop(100%, rgba(255,255,255,1)));
            background: -webkit-linear-gradient(top, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);
            background: -o-linear-gradient(top, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);
            background: -ms-linear-gradient(top, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);
            background: linear-gradient(to bottom, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fafafa', endColorstr='#ffffff', GradientType=0 );}
                .evento {background-image: url("img/imagem-evento-2.png");width: 100%; height: 100px; background-size: cover; display: table;  background-position: center center; border-radius: 10px; position: relative;}
                .evento-2 {background-image: url("img/imagem-evento-3.png");width: 100%; height: 100px; background-size: cover; display: table;  background-position: center center; border-radius: 10px; position: relative;}
                #grad {
                    pointer-events: none;   /* isto faz com que o clique "passe" adiante */
                    min-height:60px;       /* Aqui voce define o tamanho do degrade */
                    width:100%;
                    position:absolute;
                    bottom:-1px;
                    left: 0;
                    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 80%);
                }
                .info {margin-top: -20px;}
                .lista .titulo-evento {font-family: 'Montserrat'; font-weight: 700; font-size: 14px; margin-bottom: 0; float: left}
                .cidade, .data, .horario {font-family: 'Montserrat'; font-weight: 400; font-size: 9px; color: #797979}
                .info .icone-pequeno{width: 9px;}
                .tipo-evento {text-transform: uppercase; color: #ffffff; background-color: #068ebf; border-radius: 5px; text-align: center; width: 50px; font-family: 'Montserrat'; font-weight: 400; font-size: 9px;}
                .tipo-evento-2 {background-color: #bf5406;}
                .pessoas-rounded {float: right; margin-top: 10px}
                .pessoas-rounded img, .local-famoso img{ width: 18px;  margin-right:2px; }
                .quantidade {border-radius: 50%; margin-top: 2px; float: right; background-color: #ececec; width: 18px; height: 18px; font-family: 'Montserrat'; font-weight: 700; color: #000; text-align: center; color: #2f2f2f; font-size: 12px;}
                .check {border-radius: 50%; background-color: #fff; width: 25px; height: 25px; margin: 10px; float: left;}

                .numero-top {position: relative; border-radius: 50%; color: #fff; width: 30px; height: 30px; margin-top: -15px; float: right; text-align: center; font-family: 'Open Sans'; font-weight: 400; background: rgba(248,65,26,1); background: -moz-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(248,65,26,1)), color-stop(28%, rgba(248,65,26,1)), color-stop(57%, rgba(239,34,75,1)), color-stop(100%, rgba(239,34,75,1))); background: -webkit-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -o-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: -ms-linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); background: linear-gradient(45deg, rgba(248,65,26,1) 0%, rgba(248,65,26,1) 28%, rgba(239,34,75,1) 57%, rgba(239,34,75,1) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8411a', endColorstr='#ef224b', GradientType=1 );}
                .check {position: relative;}
                .check img {width: 70%;}
                .varias-fotos {width: 40px;}
                .numero-top p, .check img, .varias-fotos{position: absolute;
                top: 50%;
                left: 50%;
                margin-right: -50%;
                transform: translate(-50%, -50%) }

                .local-famoso {color: #17a359; font-family: 'Montserrat'; font-weight: 700; font-size: 9px;}
                .evento-tudo {margin-bottom: 5px}



            html, body {
              font-family: 'Hind', sans-serif;
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              overflow-y: hidden;
            }

            h4 {

              margin-bottom: 0;
            }

            .carousel-wrapper {
              position: relative;
              width: 90%;
              height: 70%;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-image: linear-gradient(#FFFFFF 50%, #FFFFFF 50%, #F0F3FC 50%);
              box-shadow: 0px 12px 39px -19px rgba(0, 0, 0, 0.75);

            }
            .carousel-wrapper .carousel {
              position: absolute;
              top: 50%;
              width: 100%;
              height: auto;
            }
            .carousel-wrapper .carousel .carousel-cell {
              background-color: #FFFFFF;
              width: 65%;
              height: auto;
              min-width: 120px;
              margin: 0 10px;
              transition: transform 500ms ease;
              border-radius: 10px;
            }
            .carousel-wrapper .carousel .carousel-cell .more {
              display: block;
              opacity: 0;
              margin: 5px 0 15px 0;
              text-align: center;
              font-size: 10px;
              color: #CFCFCF;
              text-decoration: none;
              transition: opacity 300ms ease;
            }
            .carousel-wrapper .carousel .carousel-cell .more:hover, .carousel-wrapper .carousel .carousel-cell .more:active, .carousel-wrapper .carousel .carousel-cell .more:visited, .carousel-wrapper .carousel .carousel-cell .more:focus {
              color: #CFCFCF;
              text-decoration: none;
            }
            .carousel-wrapper .carousel .carousel-cell .line {
              position: absolute;
              width: 2px;
              height: 0;
              background-color: black;
              left: 50%;
              margin: 5px 0 0 -1px;
              transition: height 300ms ease;
              display: block;
            }
            .carousel-wrapper .carousel .carousel-cell .price {
              position: absolute;
              font-weight: 700;
              margin: 45px auto 0 auto;
              left: 50%;
              transform: translate(-50%);
              opacity: 0;
              transition: opacity 300ms ease 300ms;
            }
            .carousel-wrapper .carousel .carousel-cell .price sup {
              top: 2px;
              position: absolute;
            }
            .carousel-wrapper .carousel .carousel-cell.is-selected {
              transform: scale(1.2);
            }
            .carousel-wrapper .carousel .carousel-cell.is-selected .line {
              height: 35px;
            }
            .carousel-wrapper .carousel .carousel-cell.is-selected .price, .carousel-wrapper .carousel .carousel-cell.is-selected .more {
              opacity: 1;
            }
            .carousel-wrapper .flickity-page-dots {
              display: none;
            }
            .carousel-wrapper .flickity-viewport, .carousel-wrapper .flickity-slider {
              overflow: visible;
            }

            .flickity-prev-next-button {display: none !important;}
            .gmap3{
                    width: 100%;
                    height: 100vh;
                }
            .gmnoprint, .gm-control-active {display: none;}
        `;
    },
    oncreate: function(vnode) {
        // config slider
        $('#gmap')
        .gmap3({
            address: "R. Prof. Pedro Viriato Parigot de Souza, 3901 - Sala 158, Campina do Siqueira, Curitiba - PR, CEP: 81280-330",
            zoom: 10,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            key: 'AIzaSyDP_wt0DCyr7HHkfCI_uFsTArWr0UjDvPs'
        })
        .marker(function (map) {
            return {
            position: map.getCenter()//,
            //icon: 'http://maps.google.com/mapfiles/marker_red.png'
            };
        });

        $('.carousel').flickity();

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
                <div id="gmap" class="gmap3"></div>
            </Layout>
        )
    }
}
