const jokeElement = document.getElementById('joke');
const jokebutton = document.getElementById('joke-Btn');

const generaterjoke = () =>{
  const xhr = new XMLHttpRequest();
 
 xhr.open('GET','https://api.chucknorris.io/jokes/random');

   
  xhr.onreadystatechange = function (){
    if(this.readyState === 4){
      if(this.status === 200){
        //console.log(JSON.parse(this.responseText).value);
          
     
       jokeElement.innerHTML =JSON.parse(this.responseText).value; 


      }else{
          jokeElement.innerHTML ='something went worng (not funny)'
      }
    }
  };


xhr.send();

};

jokebutton.addEventListener('click',generaterjoke);
document.addEventListener('DOMContentLoaded',generaterjoke);
