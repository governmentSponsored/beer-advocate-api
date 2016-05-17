<?php 
	header('Content-Type: application/json');
	$beer = $_GET['beer'];
	exec("node requestBeerReview.js " . $beer, $array);
	echo json_encode($array);
?>