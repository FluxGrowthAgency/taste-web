<?php
  
  header('Access-Control-Allow-Origin: *');  

  // $uploaddir = "uploads/";

  // $uploadfile = "uploads/" . basename( $_FILES['file']['name']);
  $uploadfile = "../uploads/".$_FILES['file']['name'];

  if (move_uploaded_file($_FILES["file"]["tmp_name"], $uploadfile)) {
    $filePath = "taste-mkt.com/uploads/".$_FILES['file']['name'];
    
    $message = "
      <html>
        <body>
          <p>
            Accede al currículum <a href='http://$filePath'> aquí</a>
          </p> 
        </body>
      </html>
    ";
    
    require './mailRecipients.php';

    // Para enviar un correo HTML, debe establecerse la cabecera Content-type
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    mail( $recipients, "Alguien subio un C.V.", $message, $cabeceras);

    // echo json_encode("taste-mkt.com/uploads/".$_FILES['file']['name']);

    echo json_encode("exito");
    exit;
  }
  else
  {
    echo json_encode("error");
  }
  
?>