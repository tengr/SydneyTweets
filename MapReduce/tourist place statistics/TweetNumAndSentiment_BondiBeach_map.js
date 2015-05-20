function(doc) {
  var str = doc.text;
  var arr=str.match(/Bondi Beach/gi);
  if (arr.length!=0){
	emit("Bondi Beach", [parseFloat(doc.naive_bayes_pos_score),1]);
	}
  
}