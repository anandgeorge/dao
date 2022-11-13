const BAT = artifacts.require("BAT");
const COIN = artifacts.require("COIN");
const argv = require("minimist")(process.argv.slice(2));

module.exports = function (deployer) {
  deployer.deploy(BAT);
  deployer.deploy(COIN, argv["name"], argv["symbol"]);
};
