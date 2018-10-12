<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/usuario.php';
include_once '../objects/auth.php';

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
$usuario = new Usuario($db);
$auth = new Auth($db);
 
 //verificando token
$val_token = $auth->val_token($token, $id);

if($val_token){
    // query products
    $stmt = $usuario->read($id);
    $num = $stmt->rowCount();
     
    // check if more than 0 record found
    if($num>0){
     
        // retrieve our table contents
        // fetch() is faster than fetchAll()
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            // extract row
            // this will make $row['name'] to
            // just $name only
            extract($row);
     
            $user=array(
                "id" => $ID,
                "nome" => $NOME,
                "email" => $EMAIL,
                "cidade" => $CIDADE,
                "estado" => $ESTADO,
                "pais" => $PAIS,
            );
        }
     
        echo json_encode($user);
    }
     
    else{
        echo json_encode(
            array("message" => "No users found.")
        );

    }
}
?>
