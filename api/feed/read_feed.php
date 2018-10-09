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

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$feed = new Feed($db);
 
 //verificando token
$feed = $feed->read_feed($id);

if($feed){
    echo json_encode($feed);
}
     
else{
    echo json_encode(
       array("message" => "Falha ao ler feed")
    );
}

?>
