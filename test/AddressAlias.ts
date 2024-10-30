const { ethers } = require("hardhat");
const config = require("../config.json");

describe("ApplyL1ToL2Alias", function () {
    it("", async function () {
        const addressAlias = await ethers.deployContract("AddressAlias");
        const l1Addresses = config.l1Addresses;
        for (let i = 0; i < l1Addresses.length; i++) {
            let alias = await addressAlias.applyL1ToL2Alias(l1Addresses[i]);
            console.log("L1 address: ", l1Addresses[i], ", L2 alias: ", alias);
        }
    });
});


describe("UndoL1ToL2Alias", function () {
    it("", async function () {
        const addressAlias = await ethers.deployContract("AddressAlias");
        const l2Alias = config.l2Addresses;
        for (let i = 0; i < l2Alias.length; i++) {
            let l1Address = await addressAlias.undoL1ToL2Alias(l2Alias[i]);
            console.log("L1 address: ", l1Address, ", L2 alias: ", l2Alias[i]);
        }
    });
});