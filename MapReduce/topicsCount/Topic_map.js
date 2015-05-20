function(doc) {
  var reg = /#([^\W_\d]+)/gi
  var str = doc.text;
  var li = [];
  while((arr = reg.exec(str))!=null){
	li.push(arr[1]);
	}
  if(li.length>0){
	for(var i=0;i<li.length;i++){
		emit(li[i].toLowerCase(),1);
	
	  }
    }
	
}