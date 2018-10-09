<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/usuario.php';

//get current url
$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//parse url
$url_params = parse_url($url);
parse_str($url_params['query'], $params);

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$usuario = new Usuario($db);

$amizade = $usuario->friendship(urldecode($params["id"]), urldecode($params['id_amigo']));
 //verificando token
if($amizade){
    $msg = array(
        "message" => "Amizade cadastrada com sucesso.",
    );
    echo json_encode($msg);
} 
else{
    echo json_encode(
        array("message" => "Erro ao criar amizade")
    );

}
?>
