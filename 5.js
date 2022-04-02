function getvalue ( p1 , p2 , operat ){
    if (operat === "+"){
        console.log( sum(p1,p2))
    }
    else if (operat === "-"){
        console.log(sub(p1,p2))
    }
    else if (operat === "*"){
        console.log(mul(p1,p2))
    }
    else if (operat === "/"){
        console.log(div(p1,p2))
    }
    else if (operat === "%"){
        console.log(per(p1,p2))
    }
    else if (operat === "^2"){
        console.log(squ(p1,p2))
    }
    else {
        console.log("Inavlid operator")
    }
}



function sum(p1,p2){
    let result = p1 + p2;
    console.log("sum is => " + result)
}

function sub(p1,p2){
    let result = p1 - p2;
    console.log("sub is => " + result )
}

function mul(p1,p2){
    let result = p1 * p2 ;
    console.log("multiply is => " + result)
}

function div (p1,p2){
    let result = p1 / p2 ;
    console.log("division is => " + result)
}

function per (p1,p2){
    let result = p1 / p2 * 100 ;
    console.log("percent is => " + result)
} 

function squ (p1){
    let result = p1 * p1 ;
    console.log("square is => " + result)
} 



sum(10,20, "+")
sub(10,20, "-")
mul(10,20, "*")
div(10,20, "/")
per(10,20, "%")
squ(10,20, "^2")
