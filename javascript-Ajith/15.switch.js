const prompt = require("prompt-sync")();
/*let day = 'wednesda'

if(day==='monday'){
    console.log('alarm at 7am');
}
   
else if(day=='tuesday'||day=='wednesday'||day=='thursday'){
    console.log('alarm at 4am');
}
   
else if(day=='friday'){
    console.log('alarm at 9am');
}
   
else {
   console.log('alarm at 8am'); 
}*/

let day = prompt("enter the day in small letters");

switch(day){
    case'monday':
       console.log('alarm at 7am');
       break;

    case 'tuesday':
    case 'wednesday':
    case 'thursday':
        console.log('alarm at 4am');
        break;

    case 'friday':
        console.log('alarm at 9am');
        break;

    case 'saturday':
    case 'sunday':
        console.log('alarm at 8am');
        break;
    default:
        console.log('sleep');
}

let player = 'Virat Kohli';
switch(player) {
    case 'Virat Kohli':
    case 'Sourav Ganguly':
    case 'Gautam Gambhir':
        console.log(`${player} is a Cricket player.`);
        break;
    default:
        console.log(`${player} is not a Cricket player.`);
        break;
}
        