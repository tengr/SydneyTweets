function(doc) {
  var str = doc.text;
  var arr=str.match(/Hobart/gi);
  if (arr.length!=0){
	emit("Hobart", [parseFloat(doc.naive_bayes_pos_score),1]);
	}
  
}