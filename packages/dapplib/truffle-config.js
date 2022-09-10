require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note toss common install opinion bottom skull'; 
let testAccounts = [
"0xb59d9854ea2fdc577a6294f42dc999417fdc7e39f964da13568b1845926837da",
"0xbbf53174c4be1e001928c1094c611982c8ccc0b4f7d96a5bf523b63f4e3c5de7",
"0x3c7cedcace7b33c27105ec32fff75453c8d4c5e03e25cf62703b3e302fbe177f",
"0x1f3fc2b2b9d73a8f41233225597b6722c4aed610ec2f7fc7f1fced3bb84a88df",
"0xd2f3251f345ae9c1230b6356c1585465001d3a32634f8a33e7c2e66c45e061e5",
"0xa538edd9298cc628e398ebf76124d55dc09e730635f501646daa5c6ab5a79dcf",
"0x814e7ce6a1913e8c3d8b23ffd2b5fce3d94707dded46ca79cdbbbb6ddfa69768",
"0x97b91364917156cc53c44233aead334818e50ae85b8230df5dfa7491897b6500",
"0x4feb5bc34c82382abbc9065181dedfa3292d78b575e02e2acde52cb7a1265c9d",
"0xf94b95d718b5e9844307725457b26eb98e8c9e64b81cadd589dfb0880dfa10fe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

