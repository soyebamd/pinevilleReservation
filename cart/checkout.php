
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Reservation</title>
<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="../css/style.css">
<link rel="icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/64ae4893754a931498a4a6a7/1b13d136-1981-41f6-ab4b-a7118de025fb/favicon.ico?format=100w">
</head>
<body>

<header class="text-center">

              



</header>


<div class="container">

<?php


require_once '../vendor/autoload.php';
require_once 'secrets.php';
// date_default_timezone_set('America/New_York');

$stripe = new \Stripe\StripeClient($stripeSecretKey);


// Connec to database



// Read configuration from config.json
$config = json_decode(file_get_contents('../config.json'), true);

// Establish database connection
$host = $config['database']['host'];
$username = $config['database']['username'];
$password = $config['database']['password'];
$database = $config['database']['database'];

$mysqli = new mysqli($host, $username, $password, $database);

// Check connection
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}








$cartErrorMessage='';



try {



$token = mysqli_real_escape_string($mysqli, isset($_POST['stripeToken']) ? $_POST['stripeToken'] : '');
$customer_name = mysqli_real_escape_string($mysqli, isset($_POST['customer_name']) ? $_POST['customer_name'] : '');
$customer_email = mysqli_real_escape_string($mysqli, isset($_POST['customer_email']) ? $_POST['customer_email'] : '');
$customer_phone = mysqli_real_escape_string($mysqli, isset($_POST['customerPhone']) ? $_POST['customerPhone'] : '');
$selected_room = mysqli_real_escape_string($mysqli, isset($_POST['selected_room']) ? $_POST['selected_room'] : '');
$selected_date = mysqli_real_escape_string($mysqli, isset($_POST['selected_date']) ? $_POST['selected_date'] : '');
$selected_day = mysqli_real_escape_string($mysqli, isset($_POST['selected_day']) ? $_POST['selected_day'] : '');

$what_is_the_occasion = mysqli_real_escape_string($mysqli, isset($_POST['what_is_the_occasion']) ? $_POST['what_is_the_occasion'] : '');
$how_many_guests = mysqli_real_escape_string($mysqli, isset($_POST['how_many_guests']) ? $_POST['how_many_guests'] : '');
$deposited_price = mysqli_real_escape_string($mysqli, isset($_POST['deposited_price']) ? $_POST['deposited_price'] : '');
$total_cost = mysqli_real_escape_string($mysqli, isset($_POST['total_cost']) ? $_POST['total_cost'] : '');
$selected_menu = mysqli_real_escape_string($mysqli, isset($_POST['selected_menu']) ? $_POST['selected_menu'] : '');
$menu = mysqli_real_escape_string($mysqli, isset($_POST['menu']) ? $_POST['menu'] : '');
$first_course = mysqli_real_escape_string($mysqli, isset($_POST['first_course']) ? $_POST['first_course'] : '');
$first_course_selected_items = mysqli_real_escape_string($mysqli, isset($_POST['firstCourseSelectedItems']) ? $_POST['firstCourseSelectedItems'] : '');
$main_course = mysqli_real_escape_string($mysqli, isset($_POST['main_course']) ? $_POST['main_course'] : '');
$main_course_selected_items = mysqli_real_escape_string($mysqli, isset($_POST['mainCourseSelectedItems']) ? $_POST['mainCourseSelectedItems'] : '');
$bar_package = mysqli_real_escape_string($mysqli, isset($_POST['bar_package']) ? $_POST['bar_package'] : '');
$bar_package_price = mysqli_real_escape_string($mysqli, isset($_POST['bar_package_price']) ? $_POST['bar_package_price'] : '');
$dessert_menu = mysqli_real_escape_string($mysqli, isset($_POST['dessert_menu']) ? $_POST['dessert_menu'] : '');
$dessert_menu_items = mysqli_real_escape_string($mysqli, isset($_POST['dessert_menu_items']) ? $_POST['dessert_menu_items'] : '');

$priceForDatabase = $deposited_price/100;

$order_id=null;



    $description = "Book A Room at The Pineville Tavern";
    


// echo "Token: " . $token . "<br>";
// echo "Customer Name: " . $customer_name . "<br>";
// echo "Customer Email: " . $customer_email . "<br>";
// echo "Customer Phone: " . $_POST['customerPhone'] . "<br>";

// echo "Selected Room: " . $selected_room . "<br>";
// echo "Selected Date: " . $selected_date . "<br>";
// echo "Occasion: " . $what_is_the_occasion . "<br>";
// echo "Number of Guests: " . $how_many_guests . "<br>";
// echo "Deposited Price: " . $priceForDatabase . "<br>";
// echo "Total Cost: " . $total_cost . "<br>";
// echo "Selected MENU: " . $selected_menu . "<br>";
// echo "Menu: " . $menu . "<br>";
// echo "First Course: " . $first_course . "<br>";
// echo "First Course Selected Items: " . $first_course_selected_items . "<br>";
// echo "Main Course: " . $main_course . "<br>";
// echo "Main Course Selected Items: " . $main_course_selected_items . "<br>";
// echo "Bar Package: " . $bar_package . "<br>";
// echo "Bar Package Price: " . $bar_package_price . "<br>";
// echo "Dessert Menu: " . $dessert_menu . "<br>";
// echo "Dessert Menu Items: " . $dessert_menu_items . "<br>";



//   echo "PAYMENT ID" + $paymentID;

  



    // Specify your return URL
    $returnUrl = 'http://localhost/PinevilleTavern/checkout.php'; // 

    $customer = $stripe->customers->create([
        'name' => $customer_name,
        'email' => $customer_email,
    ]);

    // Create a PaymentIntent with payment_method_data
    $paymentIntent = $stripe->paymentIntents->create([
        'amount' => $deposited_price,
        'currency' => 'inr',
        'description' => $description,
        'payment_method_data' => [
            'type' => 'card',
            'card' => [
                'token' => $token,
            ],
        ],
        'confirmation_method' => 'manual',
        'confirm' => true,
        'metadata' => [
            'Order ID' => $orderID,
            'Selected Room' => $selected_room,
           
            'Customer name' => $customer_name,
            'Customer Email' => $customer_email,
            
            'Occasion' => $what_is_the_occasion,
           
        ],
        'receipt_email' => $customer_email, // Replace with the customer's email
        'customer' => $customer->id, // Use the customer ID generated by Stripe
        'return_url' => $returnUrl, // Specify your return URL
    ]);

    // Accessing metadata
    $clientName = $paymentIntent->metadata['client name'];

    $cartSuccessMessage = "Thank you for Booking!";

    $paymentID =  $paymentIntent->id;

   

    $tockenID = $token;

 


} catch (\Stripe\Exception\CardException $e) {
    // Handle card errors
    $cartErrorMessage = $e->getError()->message;
} catch (\Stripe\Exception\RateLimitException $e) {
    // Handle rate limit errors
    $cartErrorMessage =  $e->getError()->message;
} catch (\Stripe\Exception\InvalidRequestException $e) {
    // Handle invalid request errors
    $cartErrorMessage =  $e->getError()->message;
} catch (\Stripe\Exception\AuthenticationException $e) {
    // Handle authentication errors
    $cartErrorMessage =  $e->getError()->message;
} catch (\Stripe\Exception\ApiConnectionException $e) {
    // Handle API connection errors
     $cartErrorMessage =  $e->getError()->message;
} catch (\Stripe\Exception\ApiConnectionException $e) {
    // Handle other Stripe-related errors
    $cartErrorMessage =  $e->getMessage();
} catch (Exception $e) {
    // Handle general exceptions
     $cartErrorMessage =  $e->getMessage();
}

 if($cartErrorMessage) {

    
    echo  "<h2 class='text-center'>Cart Error</h2>";    
    echo "<p id='card-errors' class='text-center'>". $cartErrorMessage. "<p>"; 
    
    
    }

    else { 
        


echo '<h1 class="fw-bold text-center mt-0">Thank you for your order. </h1>';



 



   
$sql = "
INSERT INTO `pineville-tavern`(`ID`, `transaction_id`, `name`, `email`, `phone`, `selected_room`, `event_date`, `occasion`, `guests_count`, `deposited_price`, `total_cost`, `selected_menu`, `menu_name`, `first_course`, `first_course_items`, `main_course`, `main_course_items`, `bar_packages`, `dessert_menu`, `booking_date`) 
VALUES 
('', '$paymentID', '$customer_name', '$customer_email', '$customer_phone', '$selected_room', '$selected_date', '$what_is_the_occasion', '$how_many_guests', '$priceForDatabase',  '$total_cost', '$selected_menu', '$menu' , '$first_course', '$first_course_selected_items', '$main_course', ' $main_course_selected_items', '$bar_package' , '$dessert_menu_items', NOW())
";


// Prepare and bind parameters
$stmt = $mysqli->prepare($sql);

if (!$stmt) {
    echo "Error preparing statement: " . $mysqli->error;
    exit();
}

// Execute the statement
if ($stmt->execute()) {
   
} else {
    echo "Error inserting record: " . $stmt->error;
}


$getID = "pineville-tavern"; // Adjust table name if necessary


// Define your SQL query
// Define your SQL query with the paymentID variable
$showOptionsQuery = "SELECT `ID` FROM `pineville-tavern` WHERE `transaction_id` = '$paymentID'";

// Execute the query
$result = $mysqli->query($showOptionsQuery);

// Check if the query was successful
if (!$result) {
    // Handle errors if the query fails
    echo "Error executing query: " . $mysqli->error;
    exit();
} else {
    // Fetch the data row by row
    while ($row = $result->fetch_assoc()) {
        // Access data using associative array keys
        $order_id = $row['ID'];

        
       

        

     $form_data = '<table style="max-width: 800px; width:100%; border-collapse: collapse; margin: 20px auto;" id="print-doc" class="table">
        <tr>
            <td colspan="3" style="text-align: center;">         
          <a href="https://www.pinevilletavern.com">     <img src="https://images.squarespace-cdn.com/content/v1/64ae4893754a931498a4a6a7/331b3278-4fc7-4149-9553-4bc9503283b6/inpixio-removebg-image.png?format=1500w" style="max-width:300px"> </a>
     
             <!--   <p style="margin-bottom:10px"><a href="#" style="color:#cc8e1f"><a href="https://www.pinevilletavern.com">  1742   </a></p> -->
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Name: ' . $customer_name . '</td>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Email/Phone: ' . $customer_email ." / ". $customer_phone . '</td>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Booking Date: ' . date("d-m-Y") . '</td>
        </tr>
       
        <tr>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Order ID: ' . $order_id . ' <br>  </td>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Date: ' . $selected_date . '</td>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Day:'.$selected_day.'  </td>
        </tr>
       
        <tr>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Selected Room: ' . $selected_room . '</td>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Occasion: ' . $what_is_the_occasion . '</td>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Number of Guests: ' . $how_many_guests . '</td>
        </tr>
       
        <tr>
         
         <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Total Deposit Due: ' . $priceForDatabase . '</td>
         <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Total Cost: ' . $total_cost . '</td> 
         <td colspan="2" style="border: 1px solid #535353; padding: 10px; text-align: left;">Menu:' . $selected_menu .'</td>
                      
        </tr>';


if($selected_room != "The Garden"){


        $form_data .='<tr>
         <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Selected MENU: ' . $menu . '</td>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">First Course ' . $first_course . '</td>
             <td style="border: 1px solid #535353; padding: 10px; text-align: left;">First Course Selected Items:' . $first_course_selected_items .'</td>
                      
        </tr>

        
        <tr>
         <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Main Course: ' . $main_course . '</td>
            <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Main Course Selected Items ' . $main_course_selected_items . '</td>
             <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Bar Package:' . $bar_package .'</td>
                      
        </tr>

         
        <tr>
         <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Bar Package Price: ' . $bar_package_price . '</td>
           <!-- <td style="border: 1px solid #535353; padding: 10px; text-align: left;">Dessert Menu ' . $dessert_menu . '</td> -->
             <td colspan="2" style="border: 1px solid #535353; padding: 10px; text-align: left;">Dessert Menu Items:' . $dessert_menu_items .'</td>
                      
        </tr>';
}




        $form_data .='</table>';



        $metadata = [
        'Order ID' => $order_id,
    ];

    try {
        // Update the PaymentIntent metadata
        $stripe->paymentIntents->update(
            $paymentID,
            ['metadata' => $metadata]
        );
    } catch (\Stripe\Exception\ApiErrorException $e) {
        // Handle the Stripe API error
        $cartErrorMessage = $e->getError()->message;
    }


    }
    
    

      
 echo  $form_data ;

        
// Additional headers
$headers = "From: Pineville Tavern <soyebahmed@gmail.com>\r\n";
$headers .= "Content-type: text/html\r\n";

// Send the email
$subject = $cartSuccessMessage;

mail($customer_email, $subject, $form_data, $headers);

$admin_email = "soyebahmed@gmail.com";
// Additional headers
$headers_admin = "From: Pineville Taver  <soyebahmed@gmail.com>\r\n";
$headers_admin .= "Content-type: text/html\r\n";

// Send the email
$subject_admin = "Pineville Taver  Order Confirmation";

mail($admin_email, $subject_admin, $form_data, $headers_admin);



}





     }

 echo '<a href="/" class="btn text-light d-flex justify-content-center align-items-center mx-auto">Back to home</a>';

// Perform database operations here

// Close connection


$mysqli->close();?>



</div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script src="https://js.stripe.com/v3/"></script>
<script src="js/menu.js"></script>
<script src="js/main.js"></script>
<script src="js/cart.js"></script>

</body>
</html>
