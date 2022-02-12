import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deploy} = hre.deployments;
    const {deployer} = await hre.getNamedAccounts();
    await deploy('Registry', {
      from: deployer,
      args: [false],
      log: true,
    });

};

func.id = "deploy_registry"
func.tags = ["Registry"]
export default func;