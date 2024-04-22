// SPDX-License-Identifier: MIT
const EtherPulse = artifacts.require("EtherPulse");

module.exports = function(deployer) {
  deployer.deploy(EtherPulse, 1000000); // Initial supply: 1,000,000 tokens
};
