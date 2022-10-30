require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note payment under hunt beach system trick'; 
let testAccounts = [
"0xcef02e5b102f6c9ab97fd2693546c1cdcfd2968cefcef638f2288ccd608ec027",
"0x51fbb7b38f698ca24b993fc28083c10c42337c737de1126ce3eef8e38f2227fc",
"0x44e650929a8e8a94ddfdfbbedd94b2f35b77fc91e87981f9e54eb5b50799e13a",
"0x47f385d46fd26f3501fd50a5010a0e87d985722f46bb89d8d0338a0ccb219af5",
"0xece873aa27b402df1a52541eeaf0f2bffd8b1f06abd70830214e5611bdebe97a",
"0xbcdfca2fc3f592b74db2d43288664bd8c8ec3fb39ef968a63513efd909428b6e",
"0x8d1ae683dad57bb87fc656e45bf3310a400551e3795b5a8cc6b8f64580acbc6e",
"0x88e667f4bc1a23263286b657f8a898343ef5547609565225af38ca6f4f969865",
"0x3d3c8873049acb9c6a852293021a5d6072ee8eb1de95c6a448eebe1d4eff13d4",
"0xe7f409c3ce2107ddaa0a83134dc912f2286952c3a2133bbed0a7f1244466626b"
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

