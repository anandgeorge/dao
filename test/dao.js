const BAT = artifacts.require("BAT");
const COIN = artifacts.require("COIN");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("BAT", function (/* accounts */) {
  it("should assert true", async function () {
    await BAT.deployed();
    return assert.isTrue(true);
  });
});

contract("COIN", function (/* accounts */) {
  it("should assert true", async function () {
    await COIN.deployed();
    return assert.isTrue(true);
  });
});
