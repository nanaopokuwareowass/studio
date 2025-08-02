<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once __DIR__ . '/config/Database.php';
require_once __DIR__ . '/controllers/ApiController.php';

// Get request method and URI
$requestMethod = $_SERVER["REQUEST_METHOD"];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

// Initialize API controller
$controller = new ApiController();

// Basic routing
try {
    switch ($uri[2]) { // Assuming URL pattern: /api/resource
        case 'bookings':
            switch($requestMethod) {
                case 'GET':
                    $response = $controller->getBookings();
                    break;
                case 'POST':
                    $response = $controller->createBooking();
                    break;
                case 'PUT':
                    $response = $controller->updateBooking();
                    break;
                case 'DELETE':
                    $response = $controller->deleteBooking();
                    break;
                default:
                    throw new Exception('Method not allowed');
            }
            break;
            
        case 'vehicles':
            switch($requestMethod) {
                case 'GET':
                    $response = $controller->getVehicles();
                    break;
                case 'POST':
                    $response = $controller->createVehicle();
                    break;
                case 'PUT':
                    $response = $controller->updateVehicle();
                    break;
                case 'DELETE':
                    $response = $controller->deleteVehicle();
                    break;
                default:
                    throw new Exception('Method not allowed');
            }
            break;
            
        case 'users':
            switch($requestMethod) {
                case 'GET':
                    $response = $controller->getUsers();
                    break;
                case 'POST':
                    $response = $controller->createUser();
                    break;
                case 'PUT':
                    $response = $controller->updateUser();
                    break;
                case 'DELETE':
                    $response = $controller->deleteUser();
                    break;
                default:
                    throw new Exception('Method not allowed');
            }
            break;
        
        case 'services':
            switch($requestMethod) {
                case 'GET':
                    $response = $controller->getServices();
                    break;
                case 'POST':
                    $response = $controller->createService();
                    break;
                case 'PUT':
                    $response = $controller->updateService();
                    break;
                case 'DELETE':
                    $response = $controller->deleteService();
                    break;
                default:
                    throw new Exception('Method not allowed');
            }
            break;

        case 'products':
            switch($requestMethod) {
                case 'GET':
                    $response = $controller->getProducts();
                    break;
                case 'POST':
                    $response = $controller->createProduct();
                    break;
                case 'PUT':
                    $response = $controller->updateProduct();
                    break;
                case 'DELETE':
                    $response = $controller->deleteProduct();
                    break;
                default:
                    throw new Exception('Method not allowed');
            }
            break;
            
        default:
            throw new Exception('Endpoint not found');
    }
    
    echo json_encode($response);
    
} catch (Exception $e) {
    http_response_code(404);
    echo json_encode(array(
        "status" => "error",
        "message" => $e->getMessage()
    ));
}
