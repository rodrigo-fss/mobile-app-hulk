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

    function sing_up($nome, $email){
        if($nome && $email){
            $query = "INSERT INTO " . $this->table_name . "(nome, email) VALUES ('" . $nome ."','". $email .  "')";
            // prepare query statement
            $stmt = $this->conn->prepare($query);
            // execute query
            $stmt->execute();

            //GET ID/VERIFICA SE FEZ A ISNERÇÃO CORRETAMENTE
            $query = "SELECT ID FROM " . $this->table_name . " WHERE email ='" . $email . "'";
            // prepare query statement
            $stmt = $this->conn->prepare($query);
            // execute query
            $stmt->execute();
            $id = $stmt->fetch(PDO::FETCH_ASSOC)["ID"];

            if($id){
                include_once 'auth.php';
                $auth = new Auth($this->conn);
                $auth->create_token($id);

                return $id;
            }
            else return false;
             
            //else return false;
        }
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


}