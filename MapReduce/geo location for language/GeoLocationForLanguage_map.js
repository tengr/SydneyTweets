function(doc) {
  var language = "in"
  if(doc.lang==language){
	  emit(doc.lang, doc.geo.coordinates);
	}

}