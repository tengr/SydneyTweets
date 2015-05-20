function(doc) {
  var str = doc.text;
  var arr=str.match(/Darling Harbour/gi);
  if (arr.length!=0){
	emit("Darling Harbour", [parseFloat(doc.naive_bayes_pos_score),1]);
	}
  
}