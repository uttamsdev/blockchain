const {Block, Transaction, Blockchain} = require("./index");
const EC = require('elliptic').ec; 
var ec = new EC('secp256k1');

// Generate public keys and private keys
var key = ec.genKeyPair();

const privateKey = key.getPrivate('hex');
const walletNumber = key.getPublic("hex");

// console.log(privateKey);
// console.log(publicKey);

const josscoin = new Blockchain(); //creating blockchain
const tx1 = new Transaction(walletNumber, 'randomaddress', 100 );
tx1.signTransaction(key); // giving sign to ttansaction1
josscoin.addTransaction(tx1); //pending transaction hisebe thakbe mine korle transaction process hobe


josscoin.minePendingTransaction(walletNumber);

//after transactiion watching my balacnce
console.log(josscoin.getBalanceOfAddress(walletNumber));


josscoin.minePendingTransaction(walletNumber);

//after transactiion watching my balacnce
 console.log(josscoin.getBalanceOfAddress(walletNumber));

