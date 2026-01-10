// for


for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        // console.log("breaking at 5");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop: ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`Inner Loop: ${j} and inner loop of ${i}`);
        // console.log(i + '*' + j + '=' + (i*j));
    }
    
}


let myArray = ["flash", "batman", "superman", "wonderwoman"];
// console.log(myArray.length);
for(let i=0;i<myArray.length;i++){
    const element = myArray[i];
    // console.log(element);
}

// break and continue

for (let i = 0; i <= 10; i++) {
    if(i==4){
        console.log("breaking at 4");
        break;
    }
    console.log(`value is: ${i}`);
}



// continue

for (let i = 0; i <= 10; i++) {
    if(i==4){
        console.log("skipping at 4");
        continue;
    }
    console.log(`value is: ${i}`);
}   