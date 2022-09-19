// https://eth-goerli.g.alchemy.com/v2/-LWnLbtzCfn6QvaF7UGlMlKjDgBjxxxK
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.0",
  networks: {
    goerli: {
      url:"https://eth-goerli.g.alchemy.com/v2/-LWnLbtzCfn6QvaF7UGlMlKjDgBjxxxK",
      accounts: [
        "4bac32b8f79409447b0b38b8042d2477c580a57e4ce57ad569dd1c2a4220c51c"
      ]
    }
  }
};
