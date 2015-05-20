function(doc) {
	emit(doc.day,[parseFloat(doc.naive_bayes_pos_score),1])  
}