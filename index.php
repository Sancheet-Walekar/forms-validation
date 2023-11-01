<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Information </title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div align="center"><span class="head">
        <h1> Form Validations</h1>
        </span>
    </div>
    <form action="upload.php" enctype="multipart/form-data" method="post" id="myForm">
        <div class="form">
            <label for="fname">First Name : </label>
            <input type="text" id="fname" onkeypress="return onlyAlpha(event)" name="fname"
                placeholder="Enter First Name ">
        </div>
        <p id="fname-error" style="color: red;"></p>

        <div class="form">
            <label for="lname">Last Name :&nbsp; </label>
            <input type="text" name="lname" id="lname" onkeypress="return onlyAlpha(event)"
                placeholder="Enter Last Name">
        </div>
        <p id="lname-error" style="color: red;"></p>


        <div class="form"> <label for="add">Phone No : &nbsp;&nbsp;&nbsp;</label><input
                onkeypress="return onlyNumberKey(event)" type="text" id="phoneno" name='phoneno'></div>
        <p id="phoneno-error" style="color: red;"></p>


        <div class="form"><label for="email"> Email Id : &nbsp;&nbsp;&nbsp;&nbsp;</label> <input name="email"
                id="email"></div>
        <p id="email-error" style="color: red;"></p>


        <div class="form">
            <label for="file">Choose File</label>
            <input id="file" name="file" class="file" type="file">
        </div>
        <p id="file-error" style="color: red;"></p>
        <div>
            <input type="submit" value="submit" id="submit">
        </div>
    </form>
</body>

</html>