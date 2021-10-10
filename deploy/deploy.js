const path = require('path')
const Utils = require('../Utils');
const hre = require("hardhat")
const secretsObj = require("../.secrets.js");

module.exports = async ({getUnnamedAccounts, deployments, ethers, network}) => {

    try{

        const {deploy} = deployments;
        const accounts = await getUnnamedAccounts();

        let signers = await hre.ethers.getSigners()

        let account = accounts[0];

        Utils.infoMsg("Deploying Agreement Contract")

        //deploy AgreementToken contract
        let deployedAgreement = await deploy('Agreement', {
            from: account,
            log:  false
        });

        let agreementTokenAddress = deployedAgreement.address;

        Utils.successMsg(`Agreement Contract Address: ${agreementTokenAddress}`);



        Utils.infoMsg("Deploying Listing Contract")

        //deploy Listing contract
        let deployedListing = await deploy('Listing', {
            from: account,
            log:  false
        });

        let listingAddress = deployedListing.address;

        Utils.successMsg(`Listing Contract Address: ${listingAddress}`);


        Utils.infoMsg("Deploying Marshal Contract")

        //deploy Marshals contract
        let deployedMarshals = await deploy('Marshals', {
            from: account,
            log:  false
        });

        let marshalsAddress = deployedMarshals.address;

        Utils.successMsg(`Marshals Contract Address: ${marshalsAddress}`);


    } catch (e){
        console.log(e,e.stack)
    }

} //end for 

//module.exports.tags = ['ERC20TokenPlus'];

