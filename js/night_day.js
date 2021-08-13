window.onload = function(){
  doc_body = {
    target : document.querySelector('body'),
    setBackColor: function(color){
      this.target.style.backgroundColor = color;
    },
    setColor: function(color){
      this.target.style.color = color;
    }
  };
}
function handler(self){
  if(self.value == 'night'){
    doc_body.setBackColor('black');
    doc_body.setColor('white');
    self.value = 'day';
  }
  else{
    doc_body.setBackColor('white');
    doc_body.setColor('black');
    self.value = 'night';
  }
}
