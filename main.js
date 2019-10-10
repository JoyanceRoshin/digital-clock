$(document).ready(function () {
    var date, sec, min, hour;
    $('.a,.b,.c,.e,.f,.g').addClass('active');
    setInterval(function () {
        date = new Date();
        sec = Math.floor(date.getSeconds() + date.getMilliseconds()/1000);
        min = date.getMinutes();
        hour = date.getHours();
        display(parseInt(sec / 10), '.lcd2');
        display(sec % 10, '.lcd1');
        display(parseInt(min / 10), '.lcd4');
        display(min % 10, '.lcd3');
        display(parseInt(hour / 10), '.lcd6');
        display(hour % 10, '.lcd5');
    }, 1000);
    function display(temp, lcd) {
        $(lcd).find('.a,.b,.c,.d,.e,.f,.g').removeClass('active');
        switch (temp) {
            case 0: $(lcd).find('.a,.b,.c,.e,.f,.g').addClass('active');
                break;
            case 1: $(lcd).find('.c,.f').addClass('active');
                break;
            case 2: $(lcd).find('.a,.c,.d,.e,.g').addClass('active');
                break;
            case 3: $(lcd).find('.a,.c,.d,.f,.g').addClass('active');
                break;
            case 4: $(lcd).find('.b,.c,.d,.f').addClass('active');
                break;
            case 5: $(lcd).find('.a,.b,.d,.f,.g').addClass('active');
                break;
            case 6: $(lcd).find('.a,.b,.d,.e,.f,.g').addClass('active');
                break;
            case 7: $(lcd).find('.a,.c,.f').addClass('active');
                break;
            case 8: $(lcd).find('.a,.b,.c,.d,.e,.f,.g').addClass('active');
                break;
            case 9: $(lcd).find('.a,.b,.c,.d,.f,.g').addClass('active');
                break;
        }
    }
});
