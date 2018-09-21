<?php
class Usuario{
 
    // database connection and table name
    private $conn;
    private $table_name = "usuario";
 
    // object properties
    public $id;
    public $nome;
    public $email;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    function sing_up(){
        //echo $this->id;
        echo $this->nome;
        echo $this->email;
        return true;
    }
    
    function read_all(){
        // select all query
        $query = "SELECT * FROM " . $this->table_name;
     
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $stmt->execute();
     
        return $stmt;
    }

    function read($id){
        $query = "SELECT * FROM " . $this->table_name . " WHERE ID = " . $id;
     
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $stmt->execute();
     
        return $stmt;
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