var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('c27eabcc'),
  addressVersion: 0x21,
  privKeyVersion: 161,
  P2SHVersion: 6,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('5D390532A4F69F4FFC158196B6BD4541C447DCD56C095C1F91F0E06F36090000'),
    merkle_root: hex('62EFB36B5F21FB6F597DD044A74B96372BF0BAC52A122456050134E1B5185159'),
    height: 0,
    nonce: 2405688,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1428152066,
    bits: 504365055,
  },
  dnsSeeds: [
    '45.55.174.30',
	'178.62.221.209',
	'128.199.129.169'
  ],
  defaultClientPort: 23121
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('1cd7f002'),
  addressVersion: 0x41,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('6B789770FB20A0262C18A35675A06450BB850CEB281A95A046B5E0D10438BE36'),
    merkle_root: hex('D8E288A08F808F7472B37BD13A3575522AD13D84E019746B24565D46A81B52D8'),
    height: 0,
    nonce: 2954005045,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1417037345,
    bits: 503840767,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 123121
};
