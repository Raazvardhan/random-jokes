const jokeElement = document.getElementById('joke');
const jokebutton = document.getElementById('joke-Btn');

const generaterjoke = () =>{
  const xhr = new XMLHttpRequest();
  //for english joke
 // xhr.open('GET','https://api.chucknorris.io/jokes/random');
 
 xhr.open('GET',' https://hindi-jokes-api.onrender.com/jokes?api_key=80522be835a58ef0554fd043afe6');
   
  xhr.onreadystatechange = function (){
    if(this.readyState === 4){
      if(this.status === 200){
        //console.log(JSON.parse(this.responseText).value);
          
        jokeElement.innerHTML =JSON.parse(this.responseText).jokeContent; 
        //for english jokes
       //jokeElement.innerHTML =JSON.parse(this.responseText).value; 


      }else{
          jokeElement.innerHTML ='something went worng (not funny)'
      }
    }
  };


xhr.send();

};

jokebutton.addEventListener('click',generaterjoke);
document.addEventListener('DOMContentLoaded',generaterjoke);
