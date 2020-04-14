function easyhttp(){
  this.http = new XMLHttpRequest();
}

// MAKING AN HTTP GET REQUEST

easyhttp.prototype.get = function(url,callback) {

  this.http.open("GET", url, true);

  
  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200){
      callback(self.http.responseText);
    }
  }

  

  this.http.send();
}



// MAKING AN HTTP POST REQUEST


//MAKING AN HTTP PUT REQUEST

//MAKING AN HTTP DELETE REQUEST