"use strict"

/** @jsx m */

var Login = {
    stylesheet: '',
    model: {
    },
    actions: {
    },
    oninit: function (vnode) {
        this.stylesheet = `
        html { 
            background: url(img/login-background.png) no-repeat center center fixed;   -webkit-background-size: cover;  -moz-background-size: cover;  -o-background-size: cover;  background-size: cover;
          }
          body {background: transparent;}
          .login {text-align: center; padding-bottom: 20px;}
          .login .meaple-icon {margin: 0 auto; display: block; margin-top: 15%; margin-bottom: 15%; width: 25%;}
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
      
          .redes-sociais {margin-top: 40px; margin-bottom: 80px;}
          .fa {padding: 20px; font-size: 20px; text-align: center; text-decoration: none; border-radius: 50%;}	
          .fa:hover {opacity: 0.7;}
          /* Facebook */
          .fa-facebook {background: #3B5998; color: white;	padding-left: 24px; padding-right: 24px;}
          /* Twitter */
          .fa-twitter {background: #55ACEE; color: white;}
          /* Twitter */
          .fa-google {background: #F14336; color: white;}
          .login p{font-family: 'Open Sans', sans-serif; color: #fff}
          
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
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <img src="img/meaple-icon.png" class="meaple-icon" />
                                <form>
                                    <div class="form-group">  
                                        <input type="email" class="form-control" id="email" placeholder="E-mail" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" id="password" placeholder="Password" />
                                        <small id="emailHelp" class="form-text text-muted">Forgot password?</small>
                                    </div>  
                                    <div class="form-group">
                                        <button type="submit" class="btn" onclick={(e) => {
                                            e.preventDefault();
                                            navigateRoute('/preferencias');
                                        }}>Login</button>
                                    </div>
                                </form>
                                <div class="redes-sociais">
                                    <a href="#" class="fa fa-facebook"></a>
                                    <a href="#" class="fa fa-twitter" style="margin: 0 20px;"></a>
                                    <a href="#" class="fa fa-google"></a>
                                </div>
                                <p>New to Meaple?</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </Layout>
        )
    }
}