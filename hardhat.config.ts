import { task } from "hardhat/config";

import "@nomiclabs/hardhat-waffle";
import 'hardhat-deploy';
import "@typechain/hardhat";


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task<never>("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  namedAccounts: {
    deployer: {
      default: 0
    }
  },
  networks: {
    hardhat: {
      // forking: {
      //   url: "http://localhost:9545",
      //   blockNumber: 9867100
      // }
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.5.13",
        settings: {
          evmVersion: 'istanbul',
          metadata: { useLiteralContent: true },
        },
      }
    ]

  }
};
