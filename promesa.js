function principal(usuario,password){

    let promesa=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(usuario=="james123"&& password=="admin123"){
                resolve("Bienvenido")
    
            }else{
                reject("Intentalo nuevamente")
    
            }
        },5000)
        
    })

    return(promesa)

   
}

principal('james123','login123')

.then(respuestaResolve=>console.log(respuestaResolve)
)
.catch((respuestaCatch)=>{
    console.log(respuestaCatch)
})