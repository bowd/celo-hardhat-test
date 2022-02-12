import { expect } from "chai";
import { parseUnits } from "ethers/lib/utils";

import { ethers, deployments } from "hardhat";
import hre from 'hardhat'

import { getContractFromRegistry, getRegistry } from "../lib/registry";
import { GoldToken } from "../typechain/GoldToken";

describe("GoldToken.sol", async function () {
  it("Should allow for Celo transfer via the erc20 contract", async function () {
    await deployments.fixture("GoldToken")
    const goldToken = await getContractFromRegistry<GoldToken>("GoldToken")

    const [alice, bob] = await ethers.getSigners()

    goldToken.connect(alice)
    const bobBalanceBefore = await goldToken.balanceOf(bob.address)
    const tx = await goldToken.transfer(bob.address, parseUnits("1.0"))
    await tx.wait()

    const bobBalanceAfter = await goldToken.balanceOf(bob.address)
    expect(bobBalanceAfter.gt(bobBalanceBefore), "balance should be greater")
  });
});
