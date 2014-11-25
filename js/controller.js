function Controller(view,model){
  this.view=view
  this.model=model
}

Controller.prototype.init=function(){
  this.model.initBoard();
}
