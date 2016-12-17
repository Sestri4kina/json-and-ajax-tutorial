/*
 * Created by Sestri4kina on 15.12.2016.
 */
var clickCounter = 1;
var infoContainer = document.getElementById('info');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'js/part-'+ clickCounter +'.json', true);
    myRequest.onload = function(){
        if (myRequest.status >= 200 && myRequest.status < 400) {
            var myData = JSON.parse(myRequest.responseText);
            //console.log(myData[0]);
            renderHTML(myData);
        } else {
            alert('We connected to the server, but it returned an error.');
        }

    };
    myRequest.send();
    clickCounter++;
    if (clickCounter > 3){
        btn.classList.add('hide-me');
    }
});

function renderHTML(data){
    var htmlString = '';
    for(i = 0; i < data.length; i++){

        if (Array.isArray(data[i].properties)){
            var stringProp = data[i].properties.join(', ');
        } else {
            var stringProp = data[i].properties;
        }

        htmlString += '<p>' + data[i].name + ': ' + stringProp + '.</p>';
    }
    infoContainer.insertAdjacentHTML('beforeend', htmlString);
}
