// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IAgreement{

    struct AgreementDetails{
        uint256 price;
        uint256 time;
        string ipfs_hash;
        bool is_public;
        address token;
        address owner;
        address client;
    }


    function getAgreementDetails(uint256 id) external view returns(AgreementDetails memory);
}