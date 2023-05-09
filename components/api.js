export default {
    async llamar(){
        let id1=Math.floor(Math.random()*1200+1);
        let id2=Math.floor(Math.random()*1200+1);
        let p1 , p2;
        const url="https://pokeapi.co/api/v2/pokemon/";
        await fetch(`${url}${id1}`)
        .then(rta=>rta.json())
        .then(dato1=>{
            let nombre=dato1.name;
            let img= dato1.sprites.fron_default;
            let experiencia=dato1.sprites.base_experience;
            console.log(dato1);
            p1=dato1;

            document.getElementById("pk1").innerHTML=`
            <article>
            <div class="image-container">
                <h2>${nombre}</h2>
                <img src="${img}" alt="">
            </div>
            <h3></h3>
            <span></span>
        </article>
            `
        })
        
        await fetch(`${url}${id2}`)
        .then(rta=>rta.json())
        .then(dato2=>{
            let nombre=dato2.name;
            let img= dato2.sprites.front_default;
            let experiencia=dato2.base_experience;
            console.log(dato2);
            p2=dato2;

            document.getElementById("pk2").innerHTML=`
            <article>
            <div class="image-container">
                <h2>${nombre}</h2>
                <img src="${img}" alt="">
                <h3>${experiencia}</h3>
            </div>
            <h3></h3>
            <span></span>
        </article>
            `
        })




        console.log("lo que quieras");  
    }


}