
// Credências da API
const CryptoJs = require("crypto-js");
const publicKey = '0a72407e1cebdb940713b6ea37fba9b8';
const privateKey = '2030a5f353675913c336f5f81a717c65d4da0673'
const ts = Math.floor(Date.now() / 1000);
const convertMD5 = CryptoJs.MD5(ts+privateKey+publicKey)

// Retorna a url com os parametros para realizar o GET com offset, limit e orderBy
export function FETCH_API(offset, limit, orderBY) {
    return {
    url: `https://gateway.marvel.com/v1/public/characters?orderBy=${orderBY}&ts=${ts}&apikey=${publicKey}&hash=${convertMD5}&limit=${limit}&offset=${offset}`,
    method: 'GET',
    }
}

// Retorna Fetch com filtro de nomes dos personagems digitados;
export function FETCH_API_FILTER(name) {
    return {
    url: `https://gateway.marvel.com:443/v1/public/characters?name=${name}&orderBy=name&ts=${ts}&apikey=${publicKey}&hash=${convertMD5}`,
    method: 'GET',
    }
}

