const value=10;

console.log(value,"helper file");

const display =()=>{
    console.log("display trigered");
    return 10
}


module.exports={display, value};