var apikey = {
    key: '610e2e40-c6cd-4c3e-8b0e-ad9f55e089a8'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if (!response.ok)
            throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        console.log(api);

        var texto = "";
        for (let i = 0; i < 30; i++) {
            texto = texto + `
            <div class="media">
                <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" heigth="60">
                <div class="media-body">
                    <h5 class=mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                    <p>${api.data[i].last_historical_data}</p>
                </div>
            </div>
            `;

            document.getElementById("coins").innerHTML = texto;
        }

    })
    .catch((error) => {
        console.log(error.message);
    });