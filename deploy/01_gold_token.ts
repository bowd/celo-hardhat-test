import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { getRegistry, registerContract } from '../lib/registry';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deploy} = hre.deployments;
    const {deployer} = await hre.getNamedAccounts();
    const deployment = await deploy('GoldToken', {
      from: deployer,
      args: [false],
      log: true,
    });

    await registerContract(deployment.address, "GoldToken")
};

func.id = "deploy_gold_token"
func.tags = ["GoldToken"]
func.dependencies = ["Registry"]
export default func;