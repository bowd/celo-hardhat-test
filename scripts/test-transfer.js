async function main() {
    // We get the contract to deploy
    const GoldToken = await ethers.getContractFactory("GoldToken");

    const signer = new ethers.Wallet("0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0")
    const goldToken = await GoldToken.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3", )
    goldToken.connect(signer)

    console.log(await goldToken.balanceOf("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199"))
    const tx = await goldToken.transfer("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199", 10000000000);
    await tx.wait()
    console.log(await goldToken.balanceOf("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199"))
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });