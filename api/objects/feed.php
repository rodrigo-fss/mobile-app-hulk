<?php
class Feed{
 
    // database connection and table name
    private $conn;
    private $table_name = "publicacao";
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    function new_pub($id, $nomeCerveja, $local, $avaliacao, $amigos){
        $date = date("Y-m-d H:i:s");
        $query = "INSERT INTO " . $this->table_name . "(IdUsuario, NomeCerveja, Localizacao, Avaliacao, Data) VALUES (" . $id .", '". $nomeCerveja . "', '" . $local . "'," . $avaliacao .", '" . $date . "')";
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();

        $query = "SELECT IdUsuario, IDPublicacao FROM " . $this->table_name . " WHERE Data = '" . $date ."'";
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $ver = $row["IdUsuario"];
        $IDPublicacao = $row["IDPublicacao"];

        if($ver == $id){
            if($amigos){
                $i=0;
                while ($amigos[$i]!=NULL) {
                    $query = "INSERT INTO marcacaopub(IdUsuario, IDPublicacao) VALUES (" . $amigos[$i] ."," . $IDPublicacao . ")";
                    // prepare query statement
                    $stmt = $this->conn->prepare($query);
                    // execute query
                    $stmt->execute();
                    var_dump($stmt);

                    $i++;
                }
            }

            return $ver;
        } else return false;
    }

}