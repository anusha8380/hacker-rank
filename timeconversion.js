function timeConversion(s) {
    // Write your code here
     let time; 
    
    let hour,minute,second,period;
    
    time = [hour,minute,second] = s.split(':');
    
    period = second.substring(2,4);
 
    second = second.substring(0,2)
    
    console.log(time);
    
    if (hour === '12') {
      hour = '00';
   }
   if (period === 'PM') {
      hour = parseInt(hour, 10) + 12;
   }
   return `${hour}:${minute}:${second}`;
    


}