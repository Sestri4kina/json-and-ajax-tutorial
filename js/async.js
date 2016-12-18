/**
 * Created by Sestri4kina on 18.12.2016.
 */
window.onload = function(){

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if (http.readyState == 4 && http.status == 200){
            //console.log(JSON.parse(http.response));
        }
    };

    http.open('GET', 'js/part-1.json', true);
    http.send();

    //jquery method
    $.get('js/part-2.json', function(data){
        console.log(data);
    });
    console.log('test');

};

/* READY STATES

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete


 */