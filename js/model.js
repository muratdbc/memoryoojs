function Model(){
  this.score=0
  this.cardDeck=$("#cards .hidden_card")
  this.cardFaces=[ "fa fa-tag fa-5x"
              ,"fa fa-music fa-5x"
              ,"fa fa-heart fa-5x"
              ,"fa fa-star fa-5x"
              ,"fa fa-film fa-5x"
              ,"fa fa-user fa-5x"
              ,"fa fa-headphones fa-5x"
              ,"fa fa-qrcode fa-5x"
              ,"fa fa-volume-up fa-5x"
              ,"fa fa-volume-down fa-5x"
             ]
}

Model.prototype.init=function(){
  var shuffledCards=shuffle(this.cardFaces.concat(this.cardFaces));
  $.each(this.cardDeck,function(index,value){
      $(value).find("p").append("<i class='"+shuffledCards[index]+"'></i>")
     console.log(shuffledCards[index])
  });
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
