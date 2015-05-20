function(doc) {
  var str = doc.text;
  var arr=str.match(/ChinaTown/gi);
  if (arr.length!=0){
	emit("ChinaTown", [parseFloat(doc.naive_bayes_pos_score),1]);
	}
  
}