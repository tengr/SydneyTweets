function(doc) {
  var str = doc.text;
  var arr=str.match(/Adelaide/gi);
  if (arr.length!=0){
	emit("Adelaide", [parseFloat(doc.naive_bayes_pos_score),1]);
	}
  
}