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
            $query = "SELECT ID FROM " . $this->table_name . " WHERE email ='" . $email . "'";
            // prepare query statement
            $stmt = $this->conn->prepare($query);
            // execute query
            $stmt->execute();
            $teste = $stmt->fetch(PDO::FETCH_ASSOC)["ID"];
            if($teste){
                return false;
            }

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
            $id[0] = $stmt->fetch(PDO::FETCH_ASSOC)["ID"];

            if($id){
                include_once 'auth.php';
                $auth = new Auth($this->conn);
                $id[1] = $auth->create_token($id[0]);

                return $id; 
            }
            else return false;
             
            //else return false;
        }
    }
    
    function read_all(){
        // select all query
        $query = "SELECT ID, NOME, CIDADE, ESTADO, PAIS FROM " . $this->table_name;
     
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

    function friendship($id, $id_amigo){
        $query = "INSERT INTO amizade(IDUsuario, IDAmigo) VALUES(". $id .",". $id_amigo .")";
     
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $stmt->execute();

        $query = "SELECT * FROM amizade WHERE IDUsuario = ". $id ." AND IDAmigo = ". $id_amigo;
     
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
        // execute query
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    function sing_in($email){
        $query = "SELECT ID FROM " . $this->table_name . " WHERE email ='" . $email . "'";
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        $ID = $stmt->fetch(PDO::FETCH_ASSOC)["ID"];
        if($ID){
            $query = "SELECT Token FROM token WHERE IDUsuario = " . $ID . "";
            // prepare query statement
            $stmt = $this->conn->prepare($query);
            // execute query
            $stmt->execute();
            $token = $stmt->fetch(PDO::FETCH_ASSOC)["Token"];

            return $token;
        }
        return false;
    }


}