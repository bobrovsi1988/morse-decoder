const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
 
    let arr =[] ;
    expr = expr.match(/.{1,10}/g);
   
    let stringToNumbersMorse =(props) =>{
      let result ="";
  
        props =props.match(/.{1,2}/g);
        
        props.forEach(element => {
          if(element==="10"){
            result+=".";
          }
          if(element==="11"){
            result+="-";
          }
        });
       
        return result;
      }
    
    
     expr.forEach(element => {
         if(element === "**********"){arr.push(" ")}else{
           //console.log(stringToNumbersMorse(element));
         arr.push(MORSE_TABLE[stringToNumbersMorse(element)]);
         console.log(MORSE_TABLE[stringToNumbersMorse(element)]);
     }
     });
     
    return arr.join("");
    
  
  }

module.exports = {
    decode
}