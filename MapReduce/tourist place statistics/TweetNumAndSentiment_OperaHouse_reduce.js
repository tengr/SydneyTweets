function(doc) {
  var str = doc.text;
  var arr=str.match(/Sydney Opera/gi);
  if (arr.length!=0){
	emit("Sydney Opera", [parseFloat(doc.naive_bayes_pos_score),1]);
	}
  
}