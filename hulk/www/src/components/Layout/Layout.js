"use strict"

/** @jsx m */

var Layout = {
    stylesheet: '',
    oninit: function() {
        this.stylesheet = `
        html, body {display: block; overflow-x: hidden;}

		#wrapper {
		  padding-left: 0;
		  -webkit-transition: all 0.5s ease;
		  -moz-transition: all 0.5s ease;
		  -o-transition: all 0.5s ease;
		  transition: all 0.5s ease;
		}


		#sidebar-wrapper {
		  z-index: 1000;
		  position: fixed;
		  left: 250px;
		  width: 0;
		  height: 100%;
		  margin-left: -250px;
		  overflow-y: auto;
		  -webkit-transition: all 0.5s ease;
		  -moz-transition: all 0.5s ease;
		  -o-transition: all 0.5s ease;
		  transition: all 0.5s ease;
		  background-color: #fff;
		  font-family: 'Montserrat';
		  font-weight: 400;
		}

		#wrapper.toggled #sidebar-wrapper {
		  width: 200px;
		}

		#page-content-wrapper {
		  width: 100%;
		  position: absolute;
		  padding: 15px;
		}

		#wrapper.toggled #page-content-wrapper {
		  position: absolute;
		  margin-right: -250px;
		}


		/* Sidebar Styles */

		.sidebar-nav {
		  position: absolute;
		  top: 0;
		  margin: 0;
		  padding: 0;
		  list-style: none;
		}

		.sidebar-nav li {
		  text-indent: 20px;
		  line-height: 40px;
		}

		.sidebar-nav li a {
		  display: block;
		  text-decoration: none;
		  color: #2f2f2f;
		}

		.sidebar-nav li a:hover {
		  text-decoration: none;
		  color: #fff;
		  background: rgba(255, 255, 255, 0.2);
		}

		.sidebar-nav li a:active, .sidebar-nav li a:focus {
		  text-decoration: none;
		}

		.sidebar-nav>.sidebar-brand {
		  height: 150px;
		  padding-top: 30px;
		  font-size: 18px;
		  line-height: 60px;
		}

		.sidebar-nav>.sidebar-brand a {
		  color: #999999;
		}

		.sidebar-nav>.sidebar-brand a:hover {
		  color: #fff;
		  background: none;
		}
		#dismiss {
		  	padding-top: 30px;
		  	padding-right: 10px;
		  	float: right;
		  	color: #2f2f2f;
		}

		@media(min-width:768px) {
		  #wrapper {
		    padding-left: 0;
		  }
		  #wrapper.toggled {
		    padding-left: 250px;
		  }
		  #sidebar-wrapper {
		    width: 0;
		  }
		  #wrapper.toggled #sidebar-wrapper {
		    width: 250px;
		  }
		  #page-content-wrapper {
		    padding: 20px;
		    position: relative;
		  }
		  #wrapper.toggled #page-content-wrapper {
		    position: relative;
		    margin-right: 0;
		  }
        }

        .rodape {bottom: 0; position: fixed; width: 100%; background-color: #fff; height: 50px; z-index:10000;}
        .navega {position: relative;}
        .opcao {width: 20%; float: left; padding:15px 10px;}
        .opcao img {margin: 0 auto; display: block;}

        .logo {
          display: block;
          width: 150px;
          margin: 10px auto;
        }
        .ajustes {float: left; width: 20px; margin-top: 10px;}
        .arrow {float: right; width: 20px; margin-top: 10px;}

        .footer-perfil {bottom: 0; position: fixed; width: 100%; background-color: #fff; height: 40px; z-index:10000;
                -webkit-box-shadow: 0px -1px 50px -5px rgba(0,0,0,0.3); -moz-box-shadow: 0px -1px 50px -5px rgba(0,0,0,0.3); box-shadow: 0px -1px 50px -5px rgba(0,0,0,0.3);}
        .footer-perfil .navega {position: absolute; width: 100%; height: 100%; display: table;}
        .footer-perfil .opcao {width: 20%; float: left;  transform: translate(0, 50%); top: 50%; }
        .footer-perfil .opcao img {width: 40%; margin: 0 auto; display: block;}
        .footer-perfil .pendente {padding: 3px 10px; text-align: center; color: #fff; background-color: #454545; border-radius: 20px; font-family: 'Montserrat'; font-weight: 700; width: 50%; margin: 0 auto; display: block; }
        .footer-perfil .seguir {padding: 3px 10px; text-align: center; color: #fff; background-color: #13b961; border-radius: 20px; font-family: 'Montserrat'; font-weight: 700; width: 50%; margin: 0 auto; display: block;}
        .footer-perfil .centraliza {float: none;display: table-cell;vertical-align: middle;}
        .footer-perfil .dots {float: right;}
        .footer-perfil .dot {
            height: 5px;
            width: 5px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
        }

        .comentar-footer {bottom: 0; position: fixed; width: 100%; background-color: #fff; height: 42px;}
        .comentar-footer .navega {position: relative;}
        .comentar-footer .form-group {
            border: none; box-shadow: 0px 8px  20px 6px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.1); border-radius: unset; margin-bottom: 0 !important;
        }
        .comentar-footer .form-control {padding: 20px; border-radius: unset;}
        .comentar-footer .form-control {border: none; position: absolute; float: left;}
        .comentar-footer .form-group img {position: relative; float: right; margin-right: 10px; top:50%; }
        .cabecalho-publicacao .voltar img {float: left; width: 20px; margin-top: 4px;}
        .cabecalho-publicacao .concluir img{float: right; width: 20px; margin-top: 4px;}
        .cabecalho-publicacao .inicio {font-family: 'Open Sans'; font-weight: 700; font-size: 20px;}
        .cabecalho-publicacao .cabecalho-2 {margin-top: 20px;}

        `;
    },
    oncreate: function(vnode) {
        if (vnode.attrs.hideFooter != 'y') {
            $("#menu-toggle").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
        }
    },
    view: function(vnode) {
        return (
            <div class={ vnode.attrs.animeteEffect + " animated"}>
                <style>{this.stylesheet}</style>
                <div id="wrapper">
                    <div id="sidebar-wrapper">
                        <ul class="sidebar-nav">
                            <li class="sidebar-brand">
                                <img src="img/everson.jpg" style="width: 100px; height: 100px;border-radius: 50%;" onclick={(e) => {e.preventDefault(); navigateRoute('/configuracoes');}}/>
                            </li>
                            <li>
                                <a href="#">Criar evento</a>
                            </li>
                            <li onclick={(e) => {e.preventDefault(); navigateRoute('/conversas');}}>
                                <a>Mensagens</a>
                            </li>
                            <li onclick={(e) => {e.preventDefault(); navigateRoute('/historico');}}>
                                <a>Histórico</a>
                            </li>
                            <li onclick={(e) => {e.preventDefault(); navigateRoute('/notificacoes');}}>
                                <a>Notificações</a>
                            </li>
                            <li onclick={(e) => {e.preventDefault(); navigateRoute('/');}}>
                                <a>Configurações</a>
                            </li>
                            <li>
                                <a href="#">Sair</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    vnode.attrs.hideHeader == 'y' ? ''
                    :
                        <section>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2">
                                        <img src="img/icon-ajustes.png" class="ajustes" onclick={() => navigateRoute('/filter')} />
                                    </div>
                                    <div class="col-md-8 col-lg-8 col-sm-8 col-xs-8 navegacao">
                                      <img src="img/hulk-logo.png" class="logo" />
                                    </div>
                                    <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2"></div>

                                </div>
                            </div>

                        </section>
                }
                {
                    vnode.attrs.hidePublicarHeader == 'y' ? ''
                    :
                        <section class="cabecalho-2">
                            <div class="container">
                                <div class="row">
                                    <div class="navegacao">

                                        <div class="col-md-10 col-lg-10 col-sm-10 col-xs-10 inicio ">
                                            <p>Publicar</p>
                                        </div>
                                        <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2 concluir" onclick={() => navigateRoute(vnode.attrs.routeCheck)}>
                                            <img src="img/check.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                }

                <div>
                    { vnode.children }
                </div>
                {
                    vnode.attrs.hideFooter == 'y' ? ''
                    :
                        <section class="rodape">
                            <div class="navega">
                                <div>
                                    <div class="opcao" onclick={() => {
                                        $("#wrapper").toggleClass("toggled");
                                    }}>
                                        <img src="img/icon-config.png" style="height: 20px; padding: 3px;" />
                                    </div>
                                    <div class="opcao" onclick={(e) => {e.preventDefault(); navigateRoute('/explore');}}>
                                        <img src="img/icon-map.png" style="height: 20px;" />
                                    </div>
                                    <div class="opcao" onclick={(e) => {e.preventDefault(); navigateRoute('/home');}}>
                                        <img src="img/icon-hulk.png" style="height: 20px;" />
                                    </div>
                                    <div class="opcao" onclick={(e) => {e.preventDefault(); navigateRoute('/explore-evento');}}>
                                        <img src="img/icon-pesquisar.png" style="height: 20px;" />
                                    </div>
                                    <div class="opcao" onclick={(e) => {e.preventDefault(); navigateRoute('/my-profile');}}>
                                        <img src="img/icon-perfil.png" style="height: 20px;" />
                                    </div>
                                </div>
                            </div>
                        </section>
                }
                {
                    vnode.attrs.hidePerfilFooter == 'y' ? ''
                    :
                        <section class="footer-perfil">
                            <div class="navega">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 centraliza" >
                                    <div class="dots">
                                        <span class="dot"></span>
                                        <span class="dot"></span>
                                        <span class="dot"></span>
                                    </div>
                                    <div class="pendente">
                                        <span>Pendente</span>
                                    </div>
                                    <div class="seguir hidden">
                                        <span>Seguir</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                }
                {
                    vnode.attrs.hideComentarFooter == 'y' ? ''
                    :
                        <section class="rodape comentar-footer">
                            <div class="navega">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="escrever" placeholder="Type your message..." />
                                    <img src="img/escrever.png" style="width: 30px; transform: translateY(25%); margin-right: 45px" />
                                    <img src="img/camera.png" style="width: 25px; transform: translateY(50%); margin-right: 10px;" />
                                </div>
                            </div>
                        </section>
                }

            </div>
        );
    }
}
