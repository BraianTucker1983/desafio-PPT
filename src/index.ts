let counter = 0;
const intervalo = setInterval(() => {
    counter++;
  console.log('Hello, World!');
    if(counter === 3){
        clearInterval(intervalo);
    };

}, 1000);