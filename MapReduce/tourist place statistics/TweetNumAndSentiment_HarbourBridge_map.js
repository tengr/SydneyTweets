function(doc) {
  var str = doc.text;
  var arr=str.match(/Harbour Bridge/gi);
  if (arr.length!=0){
	emit("Harbour Bridge", [parseFloat(doc.naive_bayes_pos_score),1]);
	}
  
}