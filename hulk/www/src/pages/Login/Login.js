"use strict"

/** @jsx m */

var Login = {
    stylesheet: '',
    model: {
    },
    actions: {
        loginFB: function() {
            try {
                facebookConnectPlugin.login(["public_profile", "email"], function(result) {
                    console.log(JSON.stringify(result));

                    facebookConnectPlugin.api("/me?fields=email,name,picture", ["public_profile", "email"], function(userData) {
                        console.log(JSON.stringify(userData));

                        var data_post = {
                            name: userData.name,
                            email: userData.email,
                            facebookId: userData.id,
                            facebookImage: userData.picture.data.url
                        }

                        var options = { dimBackground: true };
                        SpinnerPlugin.activityStart("Realizando login...", options);

                        m.request({
                            method: "POST",
                            url: urlAPI + '/create-user-facebook',
                            data: data_post
                        })
                        .then(function(result) {
                            SpinnerPlugin.activityStop();
                            if (result.status == 'ok') {
                                console.log(result)
                                Store.set('facebookData', userData);
                                Store.set('user', result.user);
                                Store.set('login', 'yes');
                                navigateRoute('/preferencias');
                            } else {
                                console.log(result)
                                alert('Login', 'Não foi possível localizar um usuário com estes dados.');
                            }

                        });
                    }, function(err) {
                        alert('Erro de Login', 'Houve um erro ao tentar fazer o login pelo Facebook. Tente novamente mais tarde.');
                        console.log(JSON.stringify(err));
                        Logger.log('erro ao aceitar o login com o facebook no popup', err);
                    })
                }, function(error) {
                    alert('Erro de Login', 'Houve um erro ao tentar fazer o login pelo Facebook. Tente novamente mais tarde.');
                    console.log(JSON.stringify(error));
                    Logger.log('erro ao abrir o popup do facebook', error);
                });
            }
            catch(err) {
                Logger.log('erro ao tentar usar o plugin', err.message);
            }
        },
        loginGPLUS: function() {
            try {
                window.plugins.googleplus.login({}, function(res) {
                    // alert('login google plus', JSON.stringify(res));
                    // console.log(res);

                    var data_post = {
                        name: res.displayName,
                        email: res.email,
                        googleId: res.userId,
                        googleImage: res.imageUrl
                    }

                    var options = { dimBackground: true };
                    SpinnerPlugin.activityStart("Realizando login...", options);

                    m.request({
                        method: "POST",
                        url: urlAPI + '/create-user-google',
                        data: data_post
                    })
                    .then(function(result) {
                        SpinnerPlugin.activityStop();
                        if (result.status == 'ok') {
                            console.log(result)
                            Store.set('googleData', res);
                            Store.set('user', result.user);
                            Store.set('login', 'yes');
                            navigateRoute('/preferencias');
                        } else {
                            console.log(result)
                            alert('Login', 'Não foi possível localizar um usuário com estes dados.');
                        }

                    });
                }, function(err) {
                    console.log(err);
                    Logger.log('erro login google+', err);
                })
            }
            catch(err) {
                Logger.log('erro ao tentar usar o plugin', err.message);
            }
        }
    },
    oninit: function (vnode) {
        if (Store.get('login') != null) {
            navigateRoute('/preferencias');
        }

        this.stylesheet = `
        html {
            background: url(img/hulk-8.jpg) no-repeat center center fixed;   -webkit-background-size: cover;  -moz-background-size: cover;  -o-background-size: cover;  background-size: cover; height: 100%;
          }
          body {background: transparent;}
          .login {text-align: center; padding-bottom: 20px;}
          .login .meaple-icon {margin: 0 auto; display: block; margin-top: 15%; margin-bottom: 40%; width: 25%;}
          .login form {color: #ffffff;}
          .login .form-control {-webkit-box-shadow: inset 0px 0px 0px 0px rgba(0,0,0,.0) !important;}
          .login input {border: 0;  outline: 0;  background: transparent;  border-bottom: 1px solid #ffffff; border-radius: 0; padding: 0; color: #fff; font-family:  'Open Sans', sans-serif; margin-bottom: 10px;}
          .login input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
              color: #ffffff;
              opacity: 0.8; /* Firefox */
          }

          :-ms-input-placeholder { /* Internet Explorer 10-11 */
              color: #ffffff;
          }

          ::-ms-input-placeholder { /* Microsoft Edge */
              color: #ffffff;
          }
          .form-text {float: right; font-family: 'Open Sans', sans-serif; color: #fff}
          .btn {width: 100%; height: 45px; border-radius: 20px; background-color: rgba(255, 255, 255, 0.7); margin-top: 20px; color: #2f2f2f; font-family: 'Open Sans'; font-weight: bold}

          .fa {font-size: 20px; text-align: center; text-decoration: none;}
          .fa:hover {opacity: 0.7;}

          .em-baixo {position: absolute; bottom: 0; width: 100%;}
          .redes-sociais {}
          /* Facebook */
          .fa-facebook {
            background: #3B5998;
            color: white;
            padding: 15px 23px;
            font-size: 28px;
            border-radius: 50%;
            margin: 10px;
          }
          .login-facebook {background-color: #3B5998; padding: 10px; color: white; font-family: 'Quicksand'; font-weight: 700; border-radius: 5px; width: 80%; margin: 0 auto; font-size:20px;}

          /* G+ */
          .fa-google {
            background: #F14336;
            color: white;
            padding: 15px 18px;
            font-size: 28px;
            border-radius: 50%;
            margin: 10px;
          }
          .login-google {background-color: #F14336; color: white; padding: 10px; color: white; font-family: 'Quicksand'; font-weight: 700; border-radius: 5px; width: 80%; margin: 0 auto; font-size:20px;}

          .login .new{
            font-weight: 600;
            font-family: Montserrat;
            color: #fff;
            text-align: center;
            font-size: 25px;
          }
          .login-sociais {margin-bottom: 45px; display: inline-block;}
          .redes-sociais img {height: 50px; padding: 0 10px;}
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
            <Layout animeteEffect="fadeIn" hideHeader="y" hideFooter="y" hidePublicarHeader="y" hidePerfilFooter="y" hideComentarFooter="y">
                <style>{this.stylesheet}</style>
                <div class="login">
                    <div class="container em-baixo">
                        <div class="row">
                          <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <p class="new">LOGIN HULK</p>
                          </div>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div class="redes-sociais">
                                    <div class="login-sociais" onclick={(e) => {e.preventDefault(); navigateRoute('/preferencias');}}>
                                      <img src="img/face-logo"/>
                                  </div>
                                  <div class="login-sociais" onclick={(e) => Login.actions.loginGPLUS() }>
                                      <img src="img/google-logo"/>
                                  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
