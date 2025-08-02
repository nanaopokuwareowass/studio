<?php
class ApiController {
    private $db;
    private $conn;

    public function __construct() {
        $this->db = new Database();
        $this->conn = $this->db->getConnection();
    }

    // Booking Methods
    public function getBookings() {
        try {
            $query = "SELECT * FROM bookings";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return array(
                "status" => "success",
                "data" => $stmt->fetchAll()
            );
        } catch (PDOException $e) {
            return array(
                "status" => "error",
                "message" => $e->getMessage()
            );
        }
    }

    public function createBooking() {
        try {
            $data = json_decode(file_get_contents("php://input"));
            
            $query = "INSERT INTO bookings (user_id, vehicle_id, service_id, booking_date, status) 
                     VALUES (:user_id, :vehicle_id, :service_id, :booking_date, :status)";
            
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":user_id", $data->user_id);
            $stmt->bindParam(":vehicle_id", $data->vehicle_id);
            $stmt->bindParam(":service_id", $data->service_id);
            $stmt->bindParam(":booking_date", $data->booking_date);
            $stmt->bindParam(":status", $data->status);
            
            $stmt->execute();
            
            return array(
                "status" => "success",
                "message" => "Booking created successfully"
            );
        } catch (PDOException $e) {
            return array(
                "status" => "error",
                "message" => $e->getMessage()
            );
        }
    }

    public function updateBooking() {
        try {
            $data = json_decode(file_get_contents("php://input"));
            
            $query = "UPDATE bookings 
                     SET status = :status, 
                         booking_date = :booking_date 
                     WHERE id = :id";
            
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":status", $data->status);
            $stmt->bindParam(":booking_date", $data->booking_date);
            $stmt->bindParam(":id", $data->id);
            
            $stmt->execute();
            
            return array(
                "status" => "success",
                "message" => "Booking updated successfully"
            );
        } catch (PDOException $e) {
            return array(
                "status" => "error",
                "message" => $e->getMessage()
            );
        }
    }

    public function deleteBooking() {
        try {
            $data = json_decode(file_get_contents("php://input"));
            
            $query = "DELETE FROM bookings WHERE id = :id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":id", $data->id);
            
            $stmt->execute();
            
            return array(
                "status" => "success",
                "message" => "Booking deleted successfully"
            );
        } catch (PDOException $e) {
            return array(
                "status" => "error",
                "message" => $e->getMessage()
            );
        }
    }

    // Vehicle Methods
    public function getVehicles() {
        try {
            $query = "SELECT * FROM vehicles";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return array(
                "status" => "success",
                "data" => $stmt->fetchAll()
            );
        } catch (PDOException $e) {
            return array(
                "status" => "error",
                "message" => $e->getMessage()
            );
        }
    }

    public function createVehicle() {
        try {
            $data = json_decode(file_get_contents("php://input"));
            
            $query = "INSERT INTO vehicles (user_id, make, model, year, license_plate) 
                     VALUES (:user_id, :make, :model, :year, :license_plate)";
            
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":user_id", $data->user_id);
            $stmt->bindParam(":make", $data->make);
            $stmt->bindParam(":model", $data->model);
            $stmt->bindParam(":year", $data->year);
            $stmt->bindParam(":license_plate", $data->license_plate);
            
            $stmt->execute();
            
            return array(
                "status" => "success",
                "message" => "Vehicle created successfully"
            );
        } catch (PDOException $e) {
            return array(
                "status" => "error",
                "message" => $e->getMessage()
            );
        }
    }

    // User Methods
    public function getUsers() {
        try {
            $query = "SELECT id, name, email, role FROM users";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return array(
                "status" => "success",
                "data" => $stmt->fetchAll()
            );
        } catch (PDOException $e) {
            return array(
                "status" => "error",
                "message" => $e->getMessage()
            );
        }
    }

    public function createUser() {
        try {
            $data = json_decode(file_get_contents("php://input"));
            
            $query = "INSERT INTO users (name, email, password, role) 
                     VALUES (:name, :email, :password, :role)";
            
            $hashedPassword = password_hash($data->password, PASSWORD_DEFAULT);
            
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":name", $data->name);
            $stmt->bindParam(":email", $data->email);
            $stmt->bindParam(":password", $hashedPassword);
            $stmt->bindParam(":role", $data->role);
            
            $stmt->execute();
            
            return array(
                "status" => "success",
                "message" => "User created successfully"
            );
        } catch (PDOException $e) {
            return array(
                "status" => "error",
                "message" => $e->getMessage()
            );
        }
    }
}