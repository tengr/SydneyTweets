function(doc) {
  var str = doc.text;
  var arr=str.match(/Sydney/gi);
  if (arr.length!=0){
	emit("Sydney", [parseFloat(doc.naive_bayes_pos_score),1]);
	}
  
}