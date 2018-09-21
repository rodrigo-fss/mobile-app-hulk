<?php
class Auth{
 
    // database connection and table name
    private $conn;
    private $table_name = "token";
 
    // object properties
    public $id;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    function random_str($size){
        $string = '';
        for($i=0; $i<$size; $i++){
            $op = rand(0, 3);
            if ($op == 1) {
                $letter = chr(rand(65,90));
            }
            else if($op == 2){
                $letter = chr(rand(97,122));
            }
            else{
                $letter = rand(0,9);
            }
            $string .= $letter;
        }
        return $string;
    }

    function create_token($id){
        $token = $id . ")" . $this->random_str(5);
        $query = "INSERT INTO " . $this->table_name . "(IDUsuario, token, datatoken) VALUES ('" . $id ."','". $token .  "', NOW())";
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
    }
    
    function val_token($token, $id){
        $query = "SELECT token FROM token WHERE IDUsuario = " . $id;

        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $db_token = $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if(strcmp($row['token'], $token) == 0){
            return true;
        }
        else{
            return false;  
        } 
    }


}