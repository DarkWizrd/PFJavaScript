<?php

//DECLARACION DE VARIABLES
$nombre = isset($_POST['nombre_paciente']) ? $_POST['nombre_paciente'] : '';
$fecha = isset($_POST['fecha_tratamiento']) ? $_POST['fecha_tratamiento'] : '';
$sist = isset($_POST['sist']) ? $_POST['sist'] : '';
$dist = isset($_POST['dist']) ? $_POST['dist'] : '';
$tipo_sistemadp = isset($_POST['tipo_sistemadp']) ? $_POST['tipo_sistemadp'] : '';

//DECLARACION DE VARIABLES
$concentracion_1 = isset($_POST['concentracion_1']) ? $_POST['concentracion_1'] : '';
$concentracion_2 = isset($_POST['concentracion_2']) ? $_POST['concentracion_2'] : '';
$concentracion_3 = isset($_POST['concentracion_3']) ? $_POST['concentracion_3'] : '';
$concentracion_4 = isset($_POST['concentracion_4']) ? $_POST['concentracion_4'] : '';

//DECLARACION DE VARIABLES
$drenaje_1 = isset($_POST['dr_ml_1']) ? $_POST['dr_ml_1'] : '';
$drenaje_2 = isset($_POST['dr_ml_2']) ? $_POST['dr_ml_2'] : '';
$drenaje_3 = isset($_POST['dr_ml_3']) ? $_POST['dr_ml_3'] : '';
$drenaje_4 = isset($_POST['dr_ml_4']) ? $_POST['dr_ml_4'] : '';

//DECLARACION DE VARIABLES
$cualidad_1 = isset($_POST['cualidad_1']) ? $_POST['cualidad_1'] : '';
$cualidad_2 = isset($_POST['cualidad_2']) ? $_POST['cualidad_2'] : '';
$cualidad_3 = isset($_POST['cualidad_3']) ? $_POST['cualidad_3'] : '';
$cualidad_4 = isset($_POST['cualidad_4']) ? $_POST['cualidad_4'] : '';


$balance_1 = (2000 - $drenaje_1);
$balance_2 = (2000 - $drenaje_2);
$balance_3 = (2000 - $drenaje_3);
$balance_4 = (2000 - $drenaje_4);

$drenaje_tot = ($drenaje_1+$drenaje_2+$drenaje_3+$drenaje_4);
$balance_tot = ($balance_1+$balance_2+$balance_3+$balance_4);

    
    try{
        //CONCEXION DE LA BASE DE DATOS
        $conexion = new PDO("mysql:host=localhost;port=3306;dbname=semestral_ds9","Michael","1699");
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        $pdo = $conexion->prepare('INSERT INTO datos_paciente(nombre_paciente, tipo_sistemadb, fecha, sist, dist) VALUES(?, ?, ?, ?, ?)');

        $pdo->bindParam(1, $nombre);
        $pdo->bindParam(2, $tipo_sistemadp);
        $pdo->bindParam(3, $fecha);
        $pdo->bindParam(4, $sist);
        $pdo->bindParam(5, $dist);
        $pdo->execute() or die(print($pdo->errorInfo()));

        $pdo = $conexion->prepare('INSERT INTO recambios_totales(fecha, nombre_paciente, drenaje_total, balance_total) VALUES(?, ?, ?, ?)');
        $pdo->bindParam(1, $fecha);
        $pdo->bindParam(2, $nombre);
        $pdo->bindParam(3, $drenaje_tot);
        $pdo->bindParam(4, $balance_tot);
        $pdo->execute() or die(print($pdo->errorInfo()));

        $pdo = $conexion->prepare('INSERT INTO concentracion(fecha, nombre_paciente, concentracion_1, concentracion_2, concentracion_3, concentracion_4) VALUES(?, ?, ?, ?, ?, ?)');
        $pdo->bindParam(1, $fecha);
        $pdo->bindParam(2, $nombre);
        $pdo->bindParam(3, $concentracion_1);
        $pdo->bindParam(4, $concentracion_2);
        $pdo->bindParam(5, $concentracion_3);
        $pdo->bindParam(6, $concentracion_4);
        $pdo->execute() or die(print($pdo->errorInfo()));
        
     $pdo = $conexion->prepare('INSERT INTO drenaje(fecha, nombre_paciente, drenaje_1, drenaje_2, drenaje_3, drenaje_4) VALUES(?, ?, ?, ?, ?, ?)');
        $pdo->bindParam(1, $fecha);
        $pdo->bindParam(2, $nombre);
        $pdo->bindParam(3, $drenaje_1);
        $pdo->bindParam(4, $drenaje_2);
        $pdo->bindParam(5, $drenaje_3);
        $pdo->bindParam(6, $drenaje_4);
        $pdo->execute() or die(print($pdo->errorInfo()));

        $pdo = $conexion->prepare('INSERT INTO cualidad(fecha, nombre_paciente, cualidad_1, cualidad_2, cualidad_3, cualidad_4) VALUES(?, ?, ?, ?, ?, ?)');
        $pdo->bindParam(1, $fecha);
        $pdo->bindParam(2, $nombre);
        $pdo->bindParam(3, $cualidad_1);
        $pdo->bindParam(4, $cualidad_2);
        $pdo->bindParam(5, $cualidad_3);
        $pdo->bindParam(6, $cualidad_4);
        $pdo->execute() or die(print($pdo->errorInfo()));

        $pdo = $conexion->prepare('INSERT INTO balances_recambio(fecha, nombre_paciente, balance_1, balance_2, balance_3, balance_4) VALUES(?, ?, ?, ?, ?, ?)');
        $pdo->bindParam(1, $fecha);
        $pdo->bindParam(2, $nombre);
        $pdo->bindParam(3, $balance_1);
        $pdo->bindParam(4, $balance_2);
        $pdo->bindParam(5, $balance_3);
        $pdo->bindParam(6, $balance_4);
        $pdo->execute() or die(print($pdo->errorInfo()));

        echo json_encode('true');
    
    } catch(PDOException $error) {
        echo $error->getMessage();
        die();
    }
?>