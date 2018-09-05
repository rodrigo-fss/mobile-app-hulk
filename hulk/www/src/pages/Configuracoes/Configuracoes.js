"use strict"

/** @jsx m */

var Configuracoes = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
           .inicio p {display: none;}
    .inicio:after{content: 'Home';}
    .configuracoes h4 {font-family: 'Open Sans'; font-weight: 700;}
    .foto-perfil {padding-top: 15px; padding-bottom: 30px; width: 33%;}
    .informations {font-family: 'Montserrat'; font-weight: 700; font-size: 12px;}
    .notifications {font-family: 'Montserrat'; font-weight: 700; font-size: 12px;}
    .form-group, .form-check {border-bottom: 1px solid #797979}
    .form-group label {text-transform: uppercase; color: #585858; font-size: 12px; font-family: 'Montserrat'; font-weight: 700;}
    .form-control {padding: 6px 0;font-size: 12px; -webkit-box-shadow:none; font-family: 'Montserrat'; font-weight: 700; border: none;}
    .form-check {padding-bottom: 10px; margin-bottom: 20px;}
    .form-check span {font-size: 10px; font-family: 'Montserrat'; font-weight: 700; }
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
            <Layout animeteEffect="fadeIn" hideHeader="y" hidePublicarHeader="y" hidePerfilFooter="y" hideComentarFooter="y" hideFooter="y">
                <style>{this.stylesheet}</style>
                <Cabecalho title="Home" routeCheck="/home"></Cabecalho>    
                <section class="configuracoes">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <h4>Configurações</h4>
                                <img src="img/perfil-foto-menu.png" class="foto-perfil"/>
                            </div>          
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <form>
                                    <p class="informations">Informations</p>
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" value="John Thomas"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">E-mail</label>
                                        <input type="text" class="form-control" id="email" value="johnthomas@gmail.com"/>
                                    </div>                 
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" value="********"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="confirm-password">Confirm Password</label>
                                        <input type="password" class="form-control" id="confirm-password" value="********"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">City</label>
                                        <input type="text" class="form-control" id="city" value="Porto Alegre"/>
                                    </div>                 
                                    <div class="form-group">
                                        <label for="name">State</label>
                                        <input type="text" class="form-control" id="city" value="Rio Grande do Sul"/>
                                    </div>                 
                                    <div class="form-group">
                                        <label for="name">Country</label>
                                        <input type="text" class="form-control" id="city" value="Brazil"/>
                                    </div>                 
                                    <div class="form-check">
                                        <span>Profile Private</span>
                                        <label class="switch">
                                            <input type="checkbox"/>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>                
                                    <p class="notifications">Notifications</p>      
                                    <div class="form-check">
                                        <span>Alerts</span>
                                        <label class="switch">
                                            <input type="checkbox"/>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>                
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}