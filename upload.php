<?php

// Check if the form was submitted

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// Check if file was uploaded without errors

	if (isset($_FILES["file"]) && $_FILES["file"]["error"] == 0) {
		
		$file_name	 = $_FILES["file"]["name"];
		$file_type	 = $_FILES["file"]["type"];
		$file_size	 = $_FILES["file"]["size"];
		$file_tmp_name = $_FILES["file"]["tmp_name"];
		$file_error = $_FILES["file"]["error"];
		//we use temp variable name in move uploaded file name parameter 

		$path_of_file="imp/";
		move_uploaded_file($file_tmp_name,$path_of_file.$file_name);

	}
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Thank You</title>
    <style>

    </style>
</head>
<body>
    <div class="container">
        <h1>Form Submitted</h1>
        <p>Action Successfull</p>
    </div>
</body>
</html>