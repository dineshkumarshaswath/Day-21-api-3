var  div = document.createElement("div");
div.className = "main";
div.style.textAlign="center";
div.style.margin="80px";
div.style.display="grid";
div.style.placeItems="center";

 var  input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "word");
input.classList.add("form-control");
input.setAttribute("placeholder", "Enter the word here");
input.style.margin="10px";
input.style.width="50%";
input.style.textAlign="center";




var button = document.createElement("button");
button.innerHTML = "search";
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.addEventListener("click",getdata);
  
var div2=document.createElement("div");
div2.classname="result";
div2.style.margin="10px";



div2.style.display="flex";
div2.style.justifyContent="center";
div2.style.alignItems="center";
div2.style.padding="20px";






 div.append(input,button,div2);

async function getdata(){

    try{
    var res = document.getElementById("word").value;
      
   
    var url=`https://api.dictionaryapi.dev/api/v2/entries/en/${res}`;
    var data= await fetch(url);
    var worddata = await data.json();
     
    
    var result1=worddata[0].word;
    var result2=worddata[0].phonetic;
    var result3=worddata[0].meanings[0].partOfSpeech;    ;
    var result4=worddata[0].meanings[0].definitions[0].definition;    ;
    var result5=worddata[0].meanings[1].partOfSpeech;
    var result6=worddata[0].meanings[1].definitions[1].definition    ;
    var result7=worddata[0].sourceUrls[0];
//     console.log(worddata);
//     console.log(worddata[0].word)
//     console.log(worddata[0].phonetic )
//     console.log(worddata[0].meanings[0].partOfSpeech) 
//     console.log(worddata[0].meanings[0].definitions[0].definition )
//     console.log(worddata[0].meanings[1].partOfSpeech)
//     console.log(worddata[0].meanings[1].definitions[1].definition )
//    console.log(worddata[0].sourceUrls[0]
//         )  



    
 div2.innerHTML=(` <div class="card text-center" style="width: 18rem; 
 background-image: linear-gradient(to  bottom right, #5B7FFF , #33CCFC); ">
 <div class="card-body " style="color:black">
   <h5 class="card-title">Word: ${result1}</h5><hr/>
   <h6 class="card-subtitle mb-2 "> Phonetic: ${result2}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">Part of Speech: ${result3}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">Meaning : ${result4}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">Part of speech: ${result5}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">Meaning ${result6}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">Check It: "${result7}"</h6><hr/>
</div>`)



    
}catch (error){console.log(error)}
}


document.body.append(div);



