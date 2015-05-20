function(doc) {
  var str = doc.text;
  var arr=str.match(/Canberra/gi);
  if (arr.length!=0){
	emit("Canberra", [parseFloat(doc.naive_bayes_pos_score),1]);
	}
  
}