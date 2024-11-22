let content = [
  "“Be yourself; everyone else is already taken.”",
  "“So many books, so little time.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“A room without books is like a body without a soul.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“In three words I can sum up everything I've learned about life: it goes on.”",
  "“If you tell the truth, you don't have to remember anything.”",
];

let result = "";
let x = "";
document.getElementById("btn").onclick = function render() {
  result = Math.floor(Math.random() * content.length);
  if (x != result) {
    document.getElementById("print").innerHTML = content[result];
  } else {
    render()
  }
  x = result;
};
