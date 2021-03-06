<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/feed.php';

//get current url
$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//parse url
$url_params = parse_url($url);
parse_str($url_params['query'], $param);
$token = $param['token'];
$id = explode(")", $token)[0];
$nomeCerveja = $param['nome_cerveja'];
$latitude = $param['latitude'];
$longitude = $param['longitude'];
$avaliacao = $param['avaliacao'];
$descricao = $param['descricao'];
$tipo = $param['tipo'];
$amigos = array($param['amigo1'], $param['amigo2'], $param['amigo3'], $param['amigo4'], $param['amigo5']);

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$feed = new Feed($db);
 
 //verificando token
$publicacao = $feed->new_pub($id, $nomeCerveja, $latitude, $longitude, $descricao, $tipo, $avaliacao, $amigos);

if($publicacao){
    echo json_encode(
        array("message" => "Publicacao cadastrada!")
    );
}
     
else{
    echo json_encode(
       array("message" => "Falha ao salvar publicacao")
    );
}

?>
