<?php
error_reporting(1);
class Database{
 
    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "formo539_mobile";
    private $username = "root";
    private $password = "";
    //private $username = "formo539_mobile";
    //private $password = "socialbeer";
    public $conn;
 
    // get the database connection
    public function getConnection(){
 
        $this->conn = null;
 
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
    }
}
?>