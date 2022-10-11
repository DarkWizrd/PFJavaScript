<?php

$paciente = isset($_POST['paciente']) ? $_POST['paciente'] : '';
$cedula = isset($_POST['cedula']) ? $_POST['cedula'] : '';
$especialidad = isset($_POST['especialidad']) ? $_POST['especialidad'] : '';
$medico = isset($_POST['medico']) ? $_POST['medico'] : '';
$motivo = isset($_POST['motivo']) ? $_POST['motivo'] : '';
$texto = isset($_POST['texto']) ? $_POST['texto'] : '';

try{

    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=semestral_ds9","Michael","1699");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO citas(nombre_paciente, cedula, especialidad, medico, motivo, texto) VALUES(?, ?, ?, ?, ?, ?)');

    $pdo->bindParam(1, $paciente);
    $pdo->bindParam(2, $cedula);
    $pdo->bindParam(3, $especialidad);
    $pdo->bindParam(4, $medico);
    $pdo->bindParam(5, $motivo);
    $pdo->bindParam(6, $texto);
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch(PDOException $error) {
    echo $error->getMessage();
    die();
}