<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<?php

// Read configuration from config.json
$config = json_decode(file_get_contents('config.json'), true);

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

else { echo "<h1>All Booking Details    </h1>";}


// Define SQL query to fetch data from the table




// Execute the query



$sql = "SELECT * FROM `pineville-tavern` ORDER BY ID DESC";

$result = $mysqli->query($sql);

 
if ($result->num_rows > 0) {
    // Output table header
    echo "<table>";
    echo "<tr><th>ID</th><th>Transaction ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Selected Room</th><th>Event Date</th><th>Occasion</th><th>Guests Count</th><th>Deposited Price</th><th>Total Cost</th><th>Selected Menu</th><th>Menu Name</th><th>First Course</th><th>First Course Items</th><th>Main Course</th><th>Main Course Items</th><th>Bar Packages</th><th>Dessert Menu</th><th>Booking Date</th></tr>";

    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>".$row["ID"]."</td><td>".$row["transaction_id"]."</td><td>".$row["name"]."</td><td>".$row["email"]."</td><td>".$row["phone"]."</td><td>".$row["selected_room"]."</td><td>".$row["event_date"]."</td><td>".$row["occasion"]."</td><td>".$row["guests_count"]."</td><td>".$row["deposited_price"]."</td><td>".$row["total_cost"]."</td><td>".$row["selected_menu"]."</td><td>".$row["menu_name"]."</td><td>".$row["first_course"]."</td><td>".$row["first_course_items"]."</td><td>".$row["main_course"]."</td><td>".$row["main_course_items"]."</td><td>".$row["bar_packages"]."</td><td>".$row["dessert_menu"]."</td><td>".$row["booking_date"]."</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

// Close MySQL connection
$mysqli->close();
?>




</body>
</html>
