let promise = new Promise(function (resolve, reject) {
    setTimeout(function(){
         resolve('Promise ')},10000);
    
});

async function llllllllllFunc(){
    let result = await promise;
    console.log(result);
    console.log('hello');
}

llllllllllFunc();
addd();

function addd() {
    console.log("hiii");
}