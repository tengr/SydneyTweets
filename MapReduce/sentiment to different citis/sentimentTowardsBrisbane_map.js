function(doc) {
  var str = doc.text;
  var arr=str.match(/Brisbane/gi);
  if (arr.length!=0){
	emit("Brisbane", [parseFloat(doc.naive_bayes_pos_score),1]);
	}
  
}