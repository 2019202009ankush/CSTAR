// EDDSA allows us to create keypairs
// It is collection of cryptographic algorithms that are used to create keypairs
const ECDSA = require("elliptic").eddsa;

// ed25519 allows us to create key pair from secret
const ecdsa = new ECDSA("ed25519");
//var EC = require('elliptic').ec;
//var ec = new EC('secp256k1');
// uuid/v1 creates timestamp dependent ids
const uuidV1 = require("uuid/v1");

// used for hashing data to 256 bits string
const SHA256 = require("crypto-js/sha256");

class ChainUtil {
  // a static function to return keypair generated using a secret phrase
  static genKeyPair(secret) {
    return ecdsa.keyFromSecret(secret);
  }

  // returns ids used in transactions
  static id() {
    return uuidV1();
  }

  // hashes any data using SHA256
  static hash(data) {
    return SHA256(JSON.stringify(data)).toString();
  }

  // verifies the signed hash by decrypting it with public key
  // and matching it with the hash
  static verifySignature(publicKey, signature, dataHash) {
    return ecdsa.keyFromPublic(publicKey).verify(dataHash, signature);
  }
}

module.exports = ChainUtil;
