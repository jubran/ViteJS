<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$conn = new PDO('sqlite:../dcs.sqlite3');
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$dcsViteDatabaseConnection = new PDO('sqlite:../dcsVite.sqlite3');
$dcsViteDatabaseConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if ($_GET["action"] == "fetchAuth") {
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $email = $_POST['email'];
    $payload = json_encode(['user_id' => $email]);
    $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'abC123!', true);
    $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
    $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    $password = $_POST['password'];
    $res = $conn->query("SELECT * FROM  users where  email = '$email' and password = $password ");
    foreach($res as $key){
        if($key['email'] == $email && $key['password'] == $password){
            echo json_encode(array('data' => $jwt));
        }else{
            echo json_encode(array('data' => 'Not Auth'));;
        }
    }
}

if ($_GET["action"] == "fetchData") {
    $email = $_POST['data'];
    $res = $conn->query("SELECT * FROM  users where  email = '$email' ");
    foreach($res as $key){
        if($key['email'] == $email ){
            echo json_encode(array('data' => $key['password']));
        }else{
            echo json_encode(array('data' => 'Not Auth'));;
        }
    }
}
if ($_GET["action"] == "getDcs") {
    $email = 'jobran@hotmail.com';
    $res = $conn->query("SELECT * FROM  users where  email = '$email' ");
    foreach($res as $key){
        if($key['email'] == $email ){
            echo json_encode(array('dcsToday' => $key['password']));
        }else{
            echo json_encode(array('data' => 'Not Auth'));;
        }
    }
}
if ($_GET["action"] == "getDcsData") {
    $data = array();
    $res = $dcsViteDatabaseConnection->query("SELECT * FROM  events where date1 = '2021-12-26' ");
    foreach($res as $key){
        $myObj = new stdClass();
        $myObj->id = $key['id'];
        $myObj->location = $key['location'];
        $myObj->date1 = $key['date1'];
        $myObj->time1 = $key['time1'];
        $myObj->status1 = $key['status1'];
        $myObj->action = $key['action'];
        array_push($data, $myObj);
    }
    echo json_encode( $data);

}

if (isset($_GET['dateQuery'])) {
    $data = array();
    $path = explode('=',$_SERVER['REQUEST_URI']);
    
    if(isset($path[1])) {
        $date = $path[1];
        $res = $dcsViteDatabaseConnection->query("SELECT * FROM  events where date1 = '$date' ");
        foreach ($res as $key ) {
            $json = preg_replace( "/\"(\d+)\"/", '$1', $key);
            array_push($data,$json);
           };
    };
    echo json_encode($data);
   
}