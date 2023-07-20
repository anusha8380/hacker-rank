const average = (scores) =>{ 
    let avg = scores.reduce( ( p, c ) => ((p + c)/scores.length), 0 )
}


let scores = [100,80];

average(scores)