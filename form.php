<?php 
$n=$_POST['name'];
$e=$_POST['email'];
$p=$_POST['password'];
$con=mysqli_connect("localhost","root","","user_info");
$sql="INSERT INTO signup_table(user_name,user_email,user_password) values('$n','$e','$p')";
$r=mysqli_query($con,$sql);
if($r)
{
    echo"STUDENTS DETAILS ADDED SUCCESSFULLY";
    header("location:c.html");
}
else{
    echo"STUDENTS DETAILS NOT ADDED";
}
?>