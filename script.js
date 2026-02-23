function multiplyNode(node, count, deep) {
   for (let i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}
for(let i=1;i<3;i++){
if(window.innerWidth<400){
multiplyNode(document.querySelector(`.pic${i}`), 11, true);
}
else { multiplyNode(document.querySelector(`.pic${i}`),Math.floor(window.innerWidth/50)-1,true);
     };
  };
