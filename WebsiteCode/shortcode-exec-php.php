//These are all php code in shortcode-exec-php plugin in WordPress, which is 
//used to achieve the result in map/reduce websites and store into a 
//javascript variable.
//Shortcode Name: showBody

//Ruichen Teng / tengr / 678693
//Tiehua Zhang / tiehuaz / 645227
//Chao Lin / clin2 / 658584
//Xueqiang Ma/ xueqiangm / 668190
//Zheng Zheng/ zzheng2 / 651384

$theBody = wp_remote_retrieve_body(wp_remote_get('http://144.6.227.100:5984/results4/_design/SydneySentiment/_view/SydneySentiment?group=true',array('timeout' => 120)));
print_r($theBody);


//Shortcode Name: getRes
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.117:5984/node3_tweet/_design/test/_view/test') );
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$position = $jsonArray[$i]->key;
	$latitude = $position[0];
	$longitude = $position[1];
	$value = $jsonArray[$i]->value;
	$sentiment = $value[1];
	echo "var item = new Array();";
	echo "item[\"latitude\"] = ".$latitude.";";
	echo "item[\"longitude\"] = ".$longitude.";";
	echo "item[\"sentiment\"] = ".$sentiment.";"; 
	echo "result[".$i."] = item;";  
}
echo "</script>";


//Shortcode Name: array
echo "<script>";
echo "var array = new Array();";  
echo "array[0] = \"Acer\";";  
echo "array[1] = \"Dell\";";
echo "var computer_price = new Array();";  
echo "computer_price[\"Acer\"] = 500;";  
echo "computer_price[\"Dell\"] = 600;";  
echo "</script>";



//Shortcode Name: getEn
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/en/_view/en') );
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$position = $jsonArray[$i]->value;
	$latitude = $position[0];
	$longitude = $position[1];
	echo "var item = new Array();";
	echo "item[\"latitude\"] = ".$latitude.";";
	echo "item[\"longitude\"] = ".$longitude.";";
	echo "result[".$i."] = item;";  
}
echo "</script>";


//Shortcode Name: getEs
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/es/_view/es') );
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$position = $jsonArray[$i]->value;
	$latitude = $position[0];
	$longitude = $position[1];
	echo "var item = new Array();";
	echo "item[\"latitude\"] = ".$latitude.";";
	echo "item[\"longitude\"] = ".$longitude.";";
	echo "result[".$i."] = item;";  
}
echo "</script>";


//Shortcode Name: getZh
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/zh/_view/zh') );
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$position = $jsonArray[$i]->value;
	$latitude = $position[0];
	$longitude = $position[1];
	echo "var item = new Array();";
	echo "item[\"latitude\"] = ".$latitude.";";
	echo "item[\"longitude\"] = ".$longitude.";";
	echo "result[".$i."] = item;";  
}
echo "</script>";


//Shortcode Name: getAr
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/ar/_view/ar') );
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$position = $jsonArray[$i]->value;
	$latitude = $position[0];
	$longitude = $position[1];
	echo "var item = new Array();";
	echo "item[\"latitude\"] = ".$latitude.";";
	echo "item[\"longitude\"] = ".$longitude.";";
	echo "result[".$i."] = item;";  
}
echo "</script>";


//Shortcode Name: getJa
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/ja/_view/ja') );
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$position = $jsonArray[$i]->value;
	$latitude = $position[0];
	$longitude = $position[1];
	echo "var item = new Array();";
	echo "item[\"latitude\"] = ".$latitude.";";
	echo "item[\"longitude\"] = ".$longitude.";";
	echo "result[".$i."] = item;";  
}
echo "</script>";


//Shortcode Name: getUnd
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/und/_view/und') );
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$position = $jsonArray[$i]->value;
	$latitude = $position[0];
	$longitude = $position[1];
	echo "var item = new Array();";
	echo "item[\"latitude\"] = ".$latitude.";";
	echo "item[\"longitude\"] = ".$longitude.";";
	echo "result[".$i."] = item;";  
}
echo "</script>";

//Shortcode Name: getIn
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/in/_view/in') );
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$position = $jsonArray[$i]->value;
	$latitude = $position[0];
	$longitude = $position[1];
	echo "var item = new Array();";
	echo "item[\"latitude\"] = ".$latitude.";";
	echo "item[\"longitude\"] = ".$longitude.";";
	echo "result[".$i."] = item;";  
}
echo "</script>";


//Shortcode Name: areaSentiment
$theBody = wp_remote_retrieve_body(wp_remote_get('http://144.6.227.100:5984/results4/_design/areaSentiment/_view/areaSentiment'));
echo $theBody;


//Shortcode Name: getAll
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/backup/_design/backup/_view/backup') );
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$position = $jsonArray[$i]->value;
	$latitude = $position[0];
	$longitude = $position[1];
	echo "var item = new Array();";
	echo "item[\"latitude\"] = ".$latitude.";";
	echo "item[\"longitude\"] = ".$longitude.";";
	echo "result[".$i."] = item;";  
}
echo "</script>";


//Shortcode Name: getSentiment
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/areaSentiment/_view/areaSentiment?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$position = explode(" ",$jsonArray[$i]->key);
	$latitude = $position[0];
	$longitude = $position[1];
	$sentiment = $jsonArray[$i]->value;
	echo "var item = new Array();";
	echo "item[\"latitude\"] = ".$latitude.";";
	echo "item[\"longitude\"] = ".$longitude.";";
	echo "item[\"sentiment\"] = ".$sentiment.";"; 
	echo "result[".$i."] = item;";  
}
echo "</script>";


//Shortcode Name: csvWrite
// output headers so that the file is downloaded rather than displayed
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=data.csv');
// create a file pointer connected to the output stream
$output = fopen('/home/ubuntu/abc.csv', 'w');
// output the column headings
fputcsv($output, array('Column 1', 'Column 2', 'Column 3'));



//Shortcode Name: create file
// output headers so that the file is downloaded rather than displayed
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=line.csv');
// create a file pointer connected to the output stream
$output = fopen('/opt/lampp/htdocs/csv/line.csv', 'w');
// output the column headings
fputcsv($output, array('Column 1', 'Column 2', 'Column 3'));
fputcsv($output, array('string', 'number', 'number'));
fputcsv($output, array('a', 6, 16));
fputcsv($output, array('b', 7, 17));
fputcsv($output, array('c', 8, 18));
fputcsv($output, array('d', 9, 19));


//Shortcode Name: getSydneyOpera
echo "<script>";
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/sydney/_view/sydney?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = ".$name.";";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "</script>";


//Shortcode Name: getBondiBeach
echo "<script>";
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/bondi%20beach/_view/bondi%20beach?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "</script>";


//Shortcode Name: attsTest arg=&quot;value&quot;
extract(shortcode_atts(array('arg' => 'default'), $atts));
echo $atts[0];



//Shortcode Name: getHarbourBridge
echo "<script>";
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/harbour%20bridge/_view/harbour%20bridge?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "</script>";


//Shortcode Name: getChinatown
echo "<script>";
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/chinatown/_view/chinatown?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "</script>";


//Shortcode Name: getDarlingHarbour
echo "<script>";
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/chinatown/_view/chinatown?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "</script>";


//Shortcode Name: getSpots
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/sydney/_view/sydney?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[0] = item;"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/harbour%20bridge/_view/harbour%20bridge?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[1] = item;"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/bondi%20beach/_view/bondi%20beach?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[2] = item;"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/darling%20harbour/_view/darling%20harbour?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[3] = item;"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/chinatown/_view/chinatown?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[4] = item;"; 
echo "</script>";


//Shortcode Name: getSentimentWeekly
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/top_user_results_total/_design/sentimentWeekly/_view/sentimentWeekly?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$day = $jsonArray[$i]->value;
	$name = $jsonArray[$i]->key;
	$number = $day[1];
	$sentiment = $day[0];
	echo "var item = new Array();";
	echo "item[\"number\"] = ".$number.";";
	echo "item[\"sentiment\"] = ".$sentiment.";";
	echo "result['".$name."'] = item;";  
}
echo "</script>";


//Shortcode Name: getLanguageCount
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/languageCount/_view/languageCount?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$number = $jsonArray[$i]->value;
	$name = $jsonArray[$i]->key;
	echo "var item = new Array();";
	echo "item[\"number\"] = ".$number.";";
	echo "item[\"name\"] = '".$name."';";
	echo "result[".$i."] = item;";  
}
echo "</script>";


//Shortcode Name: getTopics
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/realTopic/_view/realTopic?group=true',array('timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$number = $jsonArray[$i]->value;
	$name = $jsonArray[$i]->key;
	echo "var item = new Array();";
	echo "item[\"name\"] = '".$name."';";
	echo "item[\"number\"] = ".$number.";";
	echo "result[".$i."] = item;"; 
}
echo "</script>";


//Shortcode Name: getUsers
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/userId/_view/userID?group=true',array('timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
for($i=0;$i<count($jsonArray);$i++){
	$number = $jsonArray[$i]->value;
	$name = $jsonArray[$i]->key;
	echo "var item = new Array();";
	echo "item[\"name\"] = '".$name[1]."';";
	echo "item[\"number\"] = ".$number.";";
	echo "result[".$i."] = item;"; 
}
echo "</script>";


//Shortcode Name: getCities
echo "<script>";
echo "var result = new Array();"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/SydneySentiment/_view/SydneySentiment?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[0] = item;"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/Canberra/_view/Canberra?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[1] = item;"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/Melbourne/_view/Melbourne?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[2] = item;"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/Brisbane/_view/Brisbane?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[3] = item;"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/Perth/_view/Perth?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[4] = item;"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/Hobart/_view/Hobart?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[5] = item;"; 
$theBody = wp_remote_retrieve_body( wp_remote_get('http://144.6.227.100:5984/results4/_design/Adelaide/_view/Adelaide?group=true',array( 'timeout' => 120)));
$jsonArray = json_decode($theBody)->rows;
$name = $jsonArray[0]->key;
$value = $jsonArray[0]->value;
$number = $value[1];
$sentiment = $value[0];
echo "var item = new Array();";
echo "item[\"name\"] = '".$name."';";
echo "item[\"number\"] = ".$number.";";
echo "item[\"sentiment\"] = ".$sentiment.";";
echo "result[6] = item;"; 
echo "</script>";
