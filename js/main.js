/*
 * Created by Sestri4kina on 15.12.2016.
 */
var infoContainer = document.getElementById('info');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json', true);
    myRequest.onload = function(){
        var myData = JSON.parse(myRequest.responseText);
        //console.log(myData[0]);
        renderHTML(myData);
    };
    myRequest.send();
});

function myData(data){

}
