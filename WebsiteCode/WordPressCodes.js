//These are all Javascript codes in WordPress to display data in websites. 
//Page Name: English

//Ruichen Teng / tengr / 678693
//Tiehua Zhang / tiehuaz / 645227
//Chao Lin / clin2 / 658584
//Xueqiang Ma/ xueqiangm/ 668190
//Zheng Zheng/ zzheng2/ 651384


<![CDATA[[getEn]
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC3kD0qbQClwSzzTm9hVQ_XjCtElbPWA6w&amp;sensor=false&amp;libraries=visualization"></script>
<script>
var map;
var heatmapData = new Array();
for(var i = 0;i<result.length;i++){
heatmapData[i] = new google.maps.LatLng(result[i].latitude, result[i].longitude);
}
function initializeMap() {
var myMapOptions = {
center: new google.maps.LatLng(-33.85895,150.99175),
zoom:10,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('googleMap'),myMapOptions);
var heatmap = new google.maps.visualization.HeatmapLayer({
data: heatmapData,
dissipating: true,
map: map,
radius: 26,
opacity: 0.8
});
}
google.maps.event.addDomListener(window, 'load', initializeMap);
</script>
<div id="googleMap" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Spanish
<![CDATA[[getEs]
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC3kD0qbQClwSzzTm9hVQ_XjCtElbPWA6w&amp;sensor=false&amp;libraries=visualization"></script>
<script>
var map;
var heatmapData = new Array();
for(var i = 0;i<result.length;i++){
heatmapData[i] = new google.maps.LatLng(result[i].latitude, result[i].longitude);
}
function initializeMap() {
var myMapOptions = {
center: new google.maps.LatLng(-33.85895,150.99175),
zoom:10,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('googleMap'),myMapOptions);
var heatmap = new google.maps.visualization.HeatmapLayer({
data: heatmapData,
dissipating: true,
map: map,
radius: 26,
opacity: 0.8
});
}
google.maps.event.addDomListener(window, 'load', initializeMap);
</script>
<div id="googleMap" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Chinese
<![CDATA[[getZh]
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC3kD0qbQClwSzzTm9hVQ_XjCtElbPWA6w&amp;sensor=false&amp;libraries=visualization"></script>
<script>
var map;
var heatmapData = new Array();
for(var i = 0;i<result.length;i++){
heatmapData[i] = new google.maps.LatLng(result[i].latitude, result[i].longitude);
}
function initializeMap() {
var myMapOptions = {
center: new google.maps.LatLng(-33.85895,150.99175),
zoom:10,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('googleMap'),myMapOptions);
var heatmap = new google.maps.visualization.HeatmapLayer({
data: heatmapData,
dissipating: true,
map: map,
radius: 26,
opacity: 0.8
});
}
google.maps.event.addDomListener(window, 'load', initializeMap);
</script>
<div id="googleMap" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Languages
<![CDATA[[getLanguageCount]
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
result.sort(function(a,b){return b.number-a.number});
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
var data = new google.visualization.DataTable();    
data.addColumn('string', 'Language');
data.addColumn('number', 'Number of Tweet');
for(var i = 0;i<result.length;i++){
data.addRow([result[i].name, result[i].number]);
if(result[i].name == 'en'){
data.setValue(i, 0, 'English');
}else if(result[i].name == 'und'){
data.setValue(i, 0, 'Undetermine');
}else if(result[i].name == 'tl'){
data.setValue(i, 0, 'Tagalog');
}else if(result[i].name == 'ja'){
data.setValue(i, 0, 'Japanese');
}else if(result[i].name == 'ar'){
data.setValue(i, 0, 'Arabic');
}else if(result[i].name == 'in'){
data.setValue(i, 0, 'Indian');
}else if(result[i].name == 'es'){
data.setValue(i, 0, 'Spanish');
}else if(result[i].name == 'pt'){
data.setValue(i, 0, 'Portuguese');
}else if(result[i].name == 'ru'){
data.setValue(i, 0, 'Russian');
}else if(result[i].name == 'tr'){
data.setValue(i, 0, 'Turkish');
}else if(result[i].name == 'th'){
data.setValue(i, 0, 'Thai');
}else if(result[i].name == 'fr'){
data.setValue(i, 0, 'French');
}else if(result[i].name == 'ko'){
data.setValue(i, 0, 'Korean');
}else if(result[i].name == 'pl'){
data.setValue(i, 0, 'Polish');
}else if(result[i].name == 'zh'){
data.setValue(i, 0, 'Chinese');
}else if(result[i].name == 'it'){
data.setValue(i, 0, 'Italian');
}else if(result[i].name == 'ht'){
data.setValue(i, 0, 'German');
}else if(result[i].name == 'nl'){
data.setValue(i, 0, 'Dutch');
}else if(result[i].name == 'et'){
data.setValue(i, 0, 'Estonian');
}
}
var options = {
title: 'Tweets Language Distribution'
};
var chart = new google.visualization.PieChart(document.getElementById('tweetNumber'));
chart.draw(data, options);
}
</script>
<div id="tweetNumber" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Arabic
<![CDATA[[getAr]
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC3kD0qbQClwSzzTm9hVQ_XjCtElbPWA6w&amp;sensor=false&amp;libraries=visualization"></script>
<script>
var map;
var heatmapData = new Array();
for(var i = 0;i<result.length;i++){
heatmapData[i] = new google.maps.LatLng(result[i].latitude, result[i].longitude);
}
function initializeMap() {
var myMapOptions = {
center: new google.maps.LatLng(-33.85895,150.99175),
zoom:10,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('googleMap'),myMapOptions);
var heatmap = new google.maps.visualization.HeatmapLayer({
data: heatmapData,
dissipating: true,
map: map,
radius: 26,
opacity: 0.8
});
}
google.maps.event.addDomListener(window, 'load', initializeMap);
</script>
<div id="googleMap" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Japanese
<![CDATA[[getJa]
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC3kD0qbQClwSzzTm9hVQ_XjCtElbPWA6w&amp;sensor=false&amp;libraries=visualization"></script>
<script>
var map;
var heatmapData = new Array();
for(var i = 0;i<result.length;i++){
heatmapData[i] = new google.maps.LatLng(result[i].latitude, result[i].longitude);
}
function initializeMap() {
var myMapOptions = {
center: new google.maps.LatLng(-33.85895,150.99175),
zoom:10,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('googleMap'),myMapOptions);
var heatmap = new google.maps.visualization.HeatmapLayer({
data: heatmapData,
dissipating: true,
map: map,
radius: 26,
opacity: 0.8
});
}
google.maps.event.addDomListener(window, 'load', initializeMap);
</script>
<div id="googleMap" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Undetermine
<![CDATA[[getUnd]
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC3kD0qbQClwSzzTm9hVQ_XjCtElbPWA6w&amp;sensor=false&amp;libraries=visualization"></script>
<script>
var map;
var heatmapData = new Array();
for(var i = 0;i<result.length;i++){
heatmapData[i] = new google.maps.LatLng(result[i].latitude, result[i].longitude);
}
function initializeMap() {
var myMapOptions = {
center: new google.maps.LatLng(-33.85895,150.99175),
zoom:10,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('googleMap'),myMapOptions);
var heatmap = new google.maps.visualization.HeatmapLayer({
data: heatmapData,
dissipating: true,
map: map,
radius: 26,
opacity: 0.8
});
}
google.maps.event.addDomListener(window, 'load', initializeMap);
</script>
<div id="googleMap" style="width: 660px; height: 660px;"></div>]]>

//Page Name: India
<![CDATA[[getIn]
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC3kD0qbQClwSzzTm9hVQ_XjCtElbPWA6w&amp;sensor=false&amp;libraries=visualization"></script>
<script>
var map;
var heatmapData = new Array();
for(var i = 0;i<result.length;i++){
heatmapData[i] = new google.maps.LatLng(result[i].latitude, result[i].longitude);
}
function initializeMap() {
var myMapOptions = {
center: new google.maps.LatLng(-33.85895,150.99175),
zoom:10,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('googleMap'),myMapOptions);
var heatmap = new google.maps.visualization.HeatmapLayer({
data: heatmapData,
dissipating: true,
map: map,
radius: 26,
opacity: 0.8
});
}
google.maps.event.addDomListener(window, 'load', initializeMap);
</script>
<div id="googleMap" style="width: 660px; height: 660px;"></div>]]>

//Page Name: All Tweets
<![CDATA[[getAll]
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC3kD0qbQClwSzzTm9hVQ_XjCtElbPWA6w&amp;sensor=false&amp;libraries=visualization"></script>
<script>
var map;
var heatmapData = new Array();
for(var i = 0;i<result.length;i++){
heatmapData[i] = new google.maps.LatLng(result[i].latitude, result[i].longitude);
}
function initializeMap() {
var myMapOptions = {
center: new google.maps.LatLng(-33.85895,150.99175),
zoom:10,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('googleMap'),myMapOptions);
var heatmap = new google.maps.visualization.HeatmapLayer({
data: heatmapData,
dissipating: true,
map: map,
radius: 26,
opacity: 0.8
});
}
google.maps.event.addDomListener(window, 'load', initializeMap);
</script>
<div id="googleMap" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Sentiment
<![CDATA[[getSentiment]
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyC3kD0qbQClwSzzTm9hVQ_XjCtElbPWA6w&amp;sensor=false"></script>
<script>
function initialize() {
  var map = new google.maps.Map(document.getElementById('googleMap'), {
     center: new google.maps.LatLng(-33.85895,150.99175),
     zoom:10,
     mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  for (var i in result) {
    var color;
    if(result[i].sentiment<=0.1){
      color = '#0000FF';
    }else if(result[i].sentiment<=0.2){
      color = '#3333FF';
    }else if(result[i].sentiment<=0.3){
      color = '#6666FF';
    }else if(result[i].sentiment<=0.4){
      color = '#9999FF';
    }else if(result[i].sentiment<=0.5){
      color = '#CCCCFF';
    }else if(result[i].sentiment<=0.6){
      color = '#FFCCCC';
    }else if(result[i].sentiment<=0.7){
      color = '#FF9999';
    }else if(result[i].sentiment<=0.8){
      color = '#FF6666';
    }else if(result[i].sentiment<=0.9){
      color = '#FF3333';
    }else{
      color = '#FF0000';
    }
    var rectangle = new google.maps.Rectangle({
      strokeColor: color,
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: color,
      fillOpacity: 0.5,
      map: map,
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(result[i].latitude+0.00095,result[i].longitude),
        new google.maps.LatLng(result[i].latitude,result[i].longitude+0.00095))
    });
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
</script>
<div id="googleMap" style="width: 660px; height: 660px;"></div>]]>

//Page Name: spots
<![CDATA[[getSpots]
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
function drawChart() {
var option = {
title:"Number of Tweets in Different Tourist Spots",
width:600, height:400,
animation: {duration: 1000, easing: 'out',},
vAxis: {title: "Number of Tweets", minValue:0, maxValue:240},
hAxis: {title: "Tourist Spot"}};
var data = new google.visualization.DataTable();    
data.addColumn('string', 'N');
data.addColumn('number', 'Number');
for(var i = 0;i<result.length;i++){
data.addRow([result[i].name, 0]);
}
var option2 = {
title:"Sentiment Score in Different Tourist Spots",
width:600, height:400,
animation: {duration: 1000, easing: 'out',},
vAxis: {title: "Average Sentiment Score of Tweets", minValue:0, maxValue:1},
hAxis: {title: "Tourist Spot"}};
var data2 = new google.visualization.DataTable();    
data2.addColumn('string', 'N');
data2.addColumn('number', 'Number');
for(var i = 0;i<result.length;i++){
data2.addRow([result[i].name, 0]);
}
// Create and draw the visualization.
var chart = new google.visualization.ColumnChart(document.getElementById('tweetNumber'));
var chart2 = new google.visualization.LineChart(document.getElementById('tweetSentiment'));
chart.draw(data, option);
chart2.draw(data2, option2);
for(var i = 0;i<result.length;i++){
data.setValue(i, 1, result[i].number);
data2.setValue(i, 1, result[i].sentiment/result[i].number);
}
chart.draw(data, option);
chart2.draw(data2, option2);
}
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
</script>
<div id="tweetNumber" style="width: 660px; height: 660px;"></div>
<div id="tweetSentiment" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Week
<![CDATA[[getSentimentWeekly]
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
function drawChart() {
var option = {
title:"Number of Tweets in a Week",
width:600, height:400,
animation: {duration: 1000, easing: 'out',},
vAxis: {title: "Number of Tweets", minValue:0, maxValue:10000},
hAxis: {title: "Day"}};
var data = new google.visualization.DataTable();    
data.addColumn('string', 'N');
data.addColumn('number', 'Number');
data.addRow(["Monday", 0]);
data.addRow(["Tuesday", 0]);
data.addRow(["Wednesday", 0]);
data.addRow(["Thursday", 0]);
data.addRow(["Friday", 0]);
data.addRow(["Saturday", 0]);
data.addRow(["Sunday", 0]);
var option2 = {
title:"Sentiment Score in a Week",
width:600, height:400,
animation: {duration: 1000, easing: 'out',},
vAxis: {title: "Average Sentiment Score of Tweets", minValue:0.6, maxValue:0.7},
hAxis: {title: "Day"}};
var data2 = new google.visualization.DataTable();    
data2.addColumn('string', 'N');
data2.addColumn('number', 'Number');
data2.addRow(["Monday", 0]);
data2.addRow(["Tuesday", 0]);
data2.addRow(["Wednesday", 0]);
data2.addRow(["Thursday", 0]);
data2.addRow(["Friday", 0]);
data2.addRow(["Saturday", 0]);
data2.addRow(["Sunday", 0]);
// Create and draw the visualization.
var chart = new google.visualization.ColumnChart(document.getElementById('tweetNumber'));
var chart2 = new google.visualization.LineChart(document.getElementById('tweetSentiment'));
chart.draw(data, option);
chart2.draw(data2, option2);
data.setValue(0, 1, result["Mon"].number);
data.setValue(1, 1, result["Tue"].number);
data.setValue(2, 1, result["Wed"].number);
data.setValue(3, 1, result["Thu"].number);
data.setValue(4, 1, result["Fri"].number);
data.setValue(5, 1, result["Sat"].number);
data.setValue(6, 1, result["Sun"].number);
data2.setValue(0, 1, result["Mon"].sentiment/result["Mon"].number);
data2.setValue(1, 1, result["Tue"].sentiment/result["Tue"].number);
data2.setValue(2, 1, result["Wed"].sentiment/result["Wed"].number);
data2.setValue(3, 1, result["Thu"].sentiment/result["Thu"].number);
data2.setValue(4, 1, result["Fri"].sentiment/result["Fri"].number);
data2.setValue(5, 1, result["Sat"].sentiment/result["Sat"].number);
data2.setValue(6, 1, result["Sun"].sentiment/result["Sun"].number);
chart.draw(data, option);
chart2.draw(data2, option2);
}
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
</script>
<div id="tweetNumber" style="width: 660px; height: 660px;"></div>
<div id="tweetSentiment" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Topics
<![CDATA[[getTopics]
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
result.sort(function(a,b){return b.number-a.number});
function drawChart() {
var option = {
title:"Top 20 Hashtags",
width:600, height:400,
animation: {duration: 1000, easing: 'out',},
vAxis: {title: "Number of Tweets", minValue:0, maxValue:1200},
hAxis: {title: "Topics"}};
var data = new google.visualization.DataTable();    
data.addColumn('string', 'N');
data.addColumn('number', 'Number');
for(var i = 0;i<result.length;i++){
data.addRow(['#'+result[i].name, 0]);
if(i>19){
break;
}
}
// Create and draw the visualization.
var chart = new google.visualization.ColumnChart(document.getElementById('tweetSentiment'));
chart.draw(data, option);
for(var i = 0;i<result.length;i++){
data.setValue(i, 1, result[i].number);
//data2.setValue(i, 1, result[i].sentiment/result[i].number);
if(i>19){
break;
}
}
chart.draw(data, option);
//chart2.draw(data2, option2);
}
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
</script>
<div id="tweetSentiment" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Users
<![CDATA[[getUsers]
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
result.sort(function(a,b){return b.number-a.number});
function drawChart() {
var option = {
title:"Number of Tweets in Top 20 Topics",
width:600, height:400,
animation: {duration: 1000, easing: 'out',},
vAxis: {title: "Number of Tweets", minValue:0, maxValue:1200},
hAxis: {title: "Topic"}};
var data = new google.visualization.DataTable();    
data.addColumn('string', 'N');
data.addColumn('number', 'Number');
for(var i = 0;i<result.length;i++){
data.addRow([result[i].name, 0]);
if(i>18){
break;
}
}
// Create and draw the visualization.
var chart = new google.visualization.ColumnChart(document.getElementById('tweetSentiment'));
chart.draw(data, option);
for(var i = 0;i<result.length;i++){
data.setValue(i, 1, result[i].number);
//data2.setValue(i, 1, result[i].sentiment/result[i].number);
if(i>18){
break;
}
}
chart.draw(data, option);
//chart2.draw(data2, option2);
}
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
</script>
<div id="tweetSentiment" style="width: 660px; height: 660px;"></div>]]>

//Page Name: Cities
<![CDATA[[getCities]
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript">
function drawChart() {
var option = {
title:"Number of Tweets Referring to Different Cities",
width:600, height:400,
animation: {duration: 1000, easing: 'out',},
vAxis: {title: "Number of Tweets", minValue:0, maxValue:4000},
hAxis: {title: "City"}};
var data = new google.visualization.DataTable();    
data.addColumn('string', 'N');
data.addColumn('number', 'Number');
for(var i = 0;i<result.length;i++){
data.addRow([result[i].name, 0]);
}
var option2 = {
title:"Sentiment Score of Tweets Referring to Different Cities",
width:600, height:400,
animation: {duration: 1000, easing: 'out',},
vAxis: {title: "Average Sentiment Score of Tweets", minValue:0, maxValue:1},
hAxis: {title: "City"}};
var data2 = new google.visualization.DataTable();    
data2.addColumn('string', 'N');
data2.addColumn('number', 'Number');
for(var i = 0;i<result.length;i++){
data2.addRow([result[i].name, 0]);
}
// Create and draw the visualization.
var chart = new google.visualization.ColumnChart(document.getElementById('tweetNumber'));
var chart2 = new google.visualization.LineChart(document.getElementById('tweetSentiment'));
chart.draw(data, option);
chart2.draw(data2, option2);
for(var i = 0;i<result.length;i++){
data.setValue(i, 1, result[i].number);
data2.setValue(i, 1, result[i].sentiment/result[i].number);
}
chart.draw(data, option);
chart2.draw(data2, option2);
}
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
</script>
<div id="tweetNumber" style="width: 660px; height: 660px;"></div>
<div id="tweetSentiment" style="width: 660px; height: 660px;"></div>]]>
