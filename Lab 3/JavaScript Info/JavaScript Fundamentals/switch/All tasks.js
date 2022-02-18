if (browser == "Edge"){

}
else if (browser == 'Chrome' && browser == 'Firefox' && browser == 'Safari' && browser == 'Opera'){
    alert( 'Okay we support these browsers too' );
    break;
}
else {
    alert( 'We hope that this page looks ok!' );
}

let a = +prompt('a?', '');
switch(a){
    case 0:
        alert( 0 );
    case 1:
        alert( 1 );
    case 2:
    case 3:
        alert( '2,3' );
}