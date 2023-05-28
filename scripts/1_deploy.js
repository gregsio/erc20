const hre = require("hardhat");

async function main() {
    // fetch conctract to deploy
    const Token = await ethers.getContractFactory('Token')   

    //deploy contract
    const token = await Token.deploy()
    await token.deployed()
    console.log(`Token deployed at: ${token.address}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
