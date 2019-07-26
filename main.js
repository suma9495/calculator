   /*on selection display */
   const getVal = document.querySelectorAll("input.onNum");
   console.log(getVal);
//    getVal.addEventListener('click', onNumber);
  for(var i in getVal){
       getVal[i].onclick = function(event){
        // console.log(event);
           const oNum = this.parentElement.children[0].value;
           console.log(oNum);
           document.getElementById('result').value += oNum;
}};

/*eval result display */
const res = document.getElementById("equals");
res.addEventListener('click', solve);
function solve(event){
     // console.log(event);
        const resultValue= document.getElementById('result').value;
        document.getElementById('result').value=eval(resultValue);	
    }

/* clear */
    const clear = document.getElementById("cl");
    clear.addEventListener('click', cleard);  
    function cleard(event){
        console.log(event);
        document.getElementById('result').value = "" ;
    }   
