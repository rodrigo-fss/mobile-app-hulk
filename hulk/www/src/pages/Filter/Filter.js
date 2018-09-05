"use strict"

/** @jsx m */

var Filter = {
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
            .filter p{font-family: 'Montserrat'; font-size: 10px; font-weight: 700;}
            .categorias img {width: 100%; margin: 10px auto;}
            .local {position: relative;}
            .local h5 {z-index: 2; color: #fff; font-family: 'Source Sans Pro'; font-weight: 700;font-size: 20px; ;position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%) }
            .slider-horizontal {width: 100% !important;}
            .slider.slider-horizontal .slider-track {height: 5px !important;}
            .slider-handle {background-color: #292929 !important; width: 15px; height: 15px; background-image: unset; opacity: 1.0;}
            .slider-selection {background-color: #0a95dd; background-image: unset;}
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
            <Layout animeteEffect="fadeIn" hideHeader="y" hideFooter="y" hidePublicarHeader="y" hidePerfilFooter="y" hideComentarFooter="y">
                <style>{this.stylesheet}</style>
                <Cabecalho title="Home" routeCheck="/home" routeBack="/home"></Cabecalho>
                <section class="filter">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <h4>Filter</h4>
                                <div class="search">
                                    <img src="img/icon-search.png" />
                                    <input type="text" class="form-control" placeholder="Search" />
                                </div>
                                <p>Price range</p>
                                <input id="ex12c" type="text"/><br/>
                            </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 categorias">
                                <div class="local">
                                    <img src="img/filter-restaurants.png" />
                                    <h5>Restaurants</h5>					
                                </div>
                                <div class="local">
                                    <img src="img/filter-bar.png" />
                                    <h5>Bar</h5>			
                                </div>
                                <div class="local">
                                    <img src="img/filter-show.png" />
                                    <h5>Shows</h5>								
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </Layout>
        )
    }
}