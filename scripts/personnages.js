
async function getPersonnages(){
    //On a envoyer une requete
    const reponse = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await reponse.json()
    
    //transfromer la donnée en élément html
    const listElements = data.map((personnage)=>{
        return(`
            <div>
                <h2>${personnage.fullName}</h2>
                <img src='${personnage.imageUrl}' />
                <h3>${personnage.title}</h3>
            </div>
        `)
    })
    document.querySelector('body').innerHTML = listElements.join('')
}

getPersonnages();

