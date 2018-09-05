"use strict"

/** @jsx m */

var CriarEvento = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
           	.inicio p {display: none;}
		    .inicio:after{content: 'Home';}
		    .configuracoes h4 {font-family: 'Open Sans'; font-weight: 700; margin-top: 15px;}
		    .foto-perfil {padding-top: 15px; padding-bottom: 30px; width: 33%;}
		    .informations {font-family: 'Montserrat'; font-weight: 700; font-size: 12px;}
		    .notifications {font-family: 'Montserrat'; font-weight: 700; font-size: 12px;}
		    .form-group label {text-transform: uppercase; color: #585858; font-size: 12px; font-family: 'Montserrat'; font-weight: 700;}
		    .form-control {background-color: #f4f4f4; color: #939393; padding: 10px;font-size: 11px; -webkit-box-shadow:none; font-family: 'Montserrat'; font-weight: 400; border: none;}
		    .form-check {padding-bottom: 10px; margin-bottom: 20px;}
		    .form-check label {float: right;}

		    /* The switch - the box around the slider */
		    .switch {
		      position: relative;
		      display: inline-block;
		      width: 40px;
		      height: 22px;
		    }

		    /* Hide default HTML checkbox */
		    .switch input {display:none;}

		    /* The slider */
		    .slider {
		      position: absolute;
		      cursor: pointer;
		      top: 0;
		      left: 0;
		      right: 0;
		      bottom: 0;
		      background-color: #fff;
		      -webkit-transition: .4s;
		      transition: .4s;
		      border: 1px solid #ccc
		    }

		    .slider:before {
		      position: absolute;
	      content: "";
		      height: 20px;
		      width: 20px;  
		      background-color: white;
		      -webkit-transition: .4s;
		      transition: .4s;
		      -webkit-box-shadow: 0px 0px 10px -3px rgba(0,0,0,1);

		    }

		    input:checked + .slider {
		      background-color: #53d769;
		    }

		    input:focus + .slider {
		      box-shadow: 0 0 1px #53d769;
		    }

		    input:checked + .slider:before {
		      -webkit-transform: translateX(20px);
		      -ms-transform: translateX(20px);
		      transform: translateX(20px);
		    }

		    /* Rounded sliders */
		    .slider.round {
		      border-radius: 34px;
		    }

		    .slider.round:before {
		      border-radius: 50%;
		    }

		    select:focus, input:focus, option:focus{
 			   outline: transparent !important	;
			}

			.form-lado-esquerdo {padding-right: 7.5px;}
			.form-lado-direito {padding-left: 7.5px;}
			
			.subsecao {font-family: 'Montserrat'; font-weight: 700; color: #2f2f2f; font-size: 12px;}

			.gmap3{
                width: 100%;
                height: 175px;
                margin-bottom: 20px;
            }

            .item img {width: auto !important; height: 50px; padding: 15px; margin: 0 auto; diplay: block;}
            .owl-carousel {margin-bottom: 15px;}
        `;
    },
    oncreate: function(vnode) {      
        $('#gmap')
        .gmap3({
            address: "R. Prof. Pedro Viriato Parigot de Souza, 3901 - Sala 158, Campina do Siqueira, Curitiba - PR, CEP: 81280-330",
            zoom: 15,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            key: 'AIzaSyDP_wt0DCyr7HHkfCI_uFsTArWr0UjDvPs'
        })
        .marker(function (map) {
            return {
            position: map.getCenter()//,
            //icon: 'http://maps.google.com/mapfiles/marker_red.png'
            };
        });

        $('#slide-opcoes').owlCarousel({
    	    loop: false,
    	    dots: false,
            nav: false,
			autoplay: false,
			autoplayHoverPause: true, // Stops autoplay    	    
			responsiveClass:true,
    	    responsive:{
		        0:{
		            items:4,
		            nav:false
		        },
		        600:{
		            items:4,
		            nav:false
		        },
		        768:{
		            items:4,
		            nav:false
		        },
		        992:{
		            items:4,
		            nav:false
		        },
		        1200:{
		            items:4,
		            nav:false
		        }
		    }
    	});

    	var owlCli = $('#slideClientsHidden');
		owlCli.owlCarousel();
    	$('.NextCli').click(function() {
		    owlCli.trigger('next.owl.carousel');
		});
		$('.PrevCli').click(function() {
		    owlCli.trigger('prev.owl.carousel');
		});

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
            <Layout animeteEffect="fadeIn" hideHeader="y" hidePublicarHeader="y" hidePerfilFooter="y" hideComentarFooter="y" hideFooter="y">
                <style>{this.stylesheet}</style>               
                <section class="configuracoes">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <h4>Criar Evento</h4>                                
                            </div> 
                            <form>
                            	<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                   <div id="gmap" class="gmap3"></div>
                                </div>
                            	<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="nomeEvento" placeholder="Nome do Evento"/>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6 form-lado-esquerdo">
                                  	<div class="form-group">
	                                    <select class="form-control" >
											<option hidden>Data de Início</option>
											<option>Hoje</option>
											<option>Amanhã</option>
											<option>Em dois dias</option>
										</select>           
									</div>  
								</div>
								<div class="col-md-6 col-lg-6 col-sm-6 col-xs-6 form-lado-direito">
                                  	<div class="form-group">
	                                    <select class="form-control" >
											<option hidden>Hora de Início</option>
											<option>13:00</option>
											<option>15:00</option>
											<option>17:00</option>
											<option>19:00</option>
											<option>21:00</option>
											<option>23:00</option>
										</select>           
									</div>  
								</div> 
								<div class="col-md-6 col-lg-6 col-sm-6 col-xs-6 form-lado-esquerdo">
                                  	<div class="form-group">
	                                    <select class="form-control" >
											<option hidden>Data de Término</option>
											<option>Hoje</option>
											<option>Amanhã</option>
											<option>Em dois dias</option>
										</select>           
									</div>  
								</div>
								<div class="col-md-6 col-lg-6 col-sm-6 col-xs-6 form-lado-direito">
                                  	<div class="form-group">
	                                    <select class="form-control" >
											<option hidden>Hora de Término</option>
											<option>13:00</option>
											<option>15:00</option>
											<option>17:00</option>
											<option>19:00</option>
											<option>21:00</option>
											<option>23:00</option>
										</select>           
									</div>  
								</div> 
								<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
									<p class="subsecao">Informações</p>
								</div>

								<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="descricao" placeholder="Descrição"/>
                                    </div>
                                	<div class="owl-carousel owl-theme" id="slide-opcoes">
										<div class="item hvr-float-shadow">
											<img class="imagem-clientes"  src="img/Walking.png"/>
										</div>
										<div class="item hvr-float-shadow">
											<img class="imagem-clientes"  src="img/Bicycle.png"/>
										</div>
										<div class="item hvr-float-shadow">
											<img class="imagem-clientes"  src="img/Car.png"/>
										</div>
										<div class="item hvr-float-shadow">
											<img class="imagem-clientes"  src="img/Bus.png"/>
										</div>
										<div class="item hvr-float-shadow">
											<img class="imagem-clientes" src="img/Wifi.png"/>
										</div>
									</div>
                                </div>

								<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
	                                <div class="form-group">
	                                    <select class="form-control" >
											<option hidden>Selecionar Tags</option>
											<option>#nofilter</option>
											<option>#tbt</option>
											<option>#bday</option>
										</select>           
									</div>  
								</div>

								<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
									<p class="subsecao">Pagamento</p>
								</div>

								<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="valor" placeholder="Valor"/>
                                    </div>
                                </div>
								<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
	                                <div class="form-group">
	                                    <select class="form-control" >
											<option hidden>Pagamento</option>
											<option>Dinheiro</option>
											<option>Cartão</option>
											<option>Boleto</option>
										</select>           
									</div>  
								</div>
                            </form>                            
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}