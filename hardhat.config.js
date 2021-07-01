require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        compilers: [{
                version: "0.8.0"
            },
            {
                version: "0.8.6",
                settings: {
                    optimizer: {
                        // enabled thru details?
                        enabled: true,
                        runs: 1000,
                        details: {
                            peephole: true,
                            //default
                            inliner: true,
                            jumpdestRemover: true,
                            orderLiterals: true,
                            deduplicate: true,

                            cse: true,
                            constantOptimizer: true,
                            //default
                            yul: true,
                            yulDetails: {
                                stackAllocation: true
                            }
                        }
                    },
                },
            }
        ]
    },
};