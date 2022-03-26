function estadodeanimo(animo){
    if(animo === "happy"){
        return `${animo} "good job, you re doing great!"`;
    }else if (animo === "sad"){
        return `${animo} every cloud has a silver lining`;
    }else if (typeof animo === number){
        return `${animo} 20`;
    }else {
        return `${num} isn't even a number :(`;
    }
}

console.log(estadodeanimo("happy"));