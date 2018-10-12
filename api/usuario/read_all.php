<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

 
// include database and object files
include_once '../config/database.php';
include_once '../objects/usuario.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$usuario = new Usuario($db);
// query products
$stmt = $usuario->read_all();
$num = $stmt->rowCount(); 

// check if more than 0 record found
if($num>0){
 
    // products array
    $users_arr["usuarios"]=array();
 
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
            "cidade" => $CIDADE,
            "estado" => $ESTADO,
            "pais" => $PAIS,
        );
 
        array_push($users_arr["usuarios"], $user);
    }
 
    echo json_encode($users_arr);
}
 
else{
    echo json_encode(
        array("message" => "No users found.")
    );

}
?>