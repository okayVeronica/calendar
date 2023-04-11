function colorirData(){
    let day         = document.getElementById('day').value;
    let color       = document.getElementById('color').value;
    let calendar    = document.getElementById('calendar');
    //Forma 1 - solução 
    let putColor    = calendar.getElementsByTagName('td')[parseInt(day)+5];
     putColor.style.backgroundColor = color; 
    //Forma 2 - solução
     // calendar.getElementsByTagName('td')[parseInt(day)+5].style.backgroundColor = color;
}