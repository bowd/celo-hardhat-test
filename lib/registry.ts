import { Contract } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Registry } from '../typechain/Registry';
import hre from 'hardhat'

export const getRegistry = async (): Promise<Registry> => {
    const registryDeployment = await hre.deployments.get("Registry")
    const Registry = await hre.ethers.getContractFactory("Registry")
    return Registry.attach(registryDeployment.address) as Registry
}

export const registerContract = async (address: string, identifier: string): Promise<void> => {
    const registry = await getRegistry()
    const tx = await registry.setAddressFor(identifier, address)
    await tx.wait()
}

export async function getContractFromRegistry<
    TContract extends Contract
>(identifier: string, contractName?: string): Promise<TContract> {
    const registry = await getRegistry()
    const contract = await hre.ethers.getContractFactory(contractName ?? identifier)
    return contract.attach(await registry.getAddressForString(identifier)) as TContract
}