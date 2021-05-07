var emel ={
    name : "emel"
};
try {
console.log(emel.name);
if (!emel.email)
{
throw new Error("kullanıcın emaili yok ");
}
   
} 
catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof ReferenceError);
    console.log(error instanceof TypeError);
    console.log(typeof error);
}
finally{// her zaman burası çalışır
    console.log("finally block");
}