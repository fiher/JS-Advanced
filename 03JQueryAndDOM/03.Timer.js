function timer() {
    let timer;
    let isOn = false;
    $('#start-timer').on('click',function(){
        let hours = Number($('#hours').text());
        let minutes = Number($('#minutes').text());
        let seconds = Number($('#seconds').text());
        seconds++
        if(seconds ==60){
            seconds = 0;
            minutes++;
        }
        if(minutes==60){
            minutes = 0;
            hours++;
        }
    });
    
}