import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { WETH, WETHInterface } from "../../../../contracts/tests/mocks/WETH";
type WETHConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WETH__factory extends ContractFactory {
    constructor(...args: WETHConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<WETH & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): WETH__factory;
    static readonly bytecode = "0x60806040523461010e576100135f54610112565b601f81116100c7575b507f577261707065642045746865720000000000000000000000000000000000001a5f5560015461004c90610112565b601f811161007f575b6008630ae8aa8960e31b016001556002805460ff19166012179055604051610b16908161014b8239f35b60015f52601f0160051c7fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6908101905b8181106100bc5750610055565b5f81556001016100af565b5f8052601f0160051c7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563908101905b818110610103575061001c565b5f81556001016100f6565b5f80fd5b90600182811c92168015610140575b602083101461012c57565b634e487b7160e01b5f52602260045260245ffd5b91607f169161012156fe60806040526004361015610022575b3615610018575f80fd5b610020610a99565b005b5f3560e01c806306fdde031461062b578063095ea7b31461058857806318160ddd1461054f57806323b872dd146105025780632e1a7d4d14610446578063313ce5671461040857806370a08231146103a557806395d89b41146101b0578063a9059cbb14610160578063d0e30db01461012f5763dd62ed3e0361000e573461012b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b576100d66107a6565b73ffffffffffffffffffffffffffffffffffffffff6100f36107c9565b91165f52600460205273ffffffffffffffffffffffffffffffffffffffff60405f2091165f52602052602060405f2054604051908152f35b5f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b57610020610a99565b3461012b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b5760206101a661019c6107a6565b6024359033610898565b6040519015158152f35b3461012b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b576040515f600154908160011c6001831692831561039b575b60208210841461036e57818552849390811561030e5750600114610294575b5003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01681019067ffffffffffffffff8211818310176102675760408290528190610263908261075e565b0390f35b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60015f90815291507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8183106102f257505081016020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610215565b60209193508060019154838588010152019101909183926102be565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660208581019190915291151560051b840190910191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09050610215565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b90607f16906101f6565b3461012b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b5773ffffffffffffffffffffffffffffffffffffffff6103f16107a6565b165f526003602052602060405f2054604051908152f35b3461012b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b57602060ff60025416604051908152f35b3461012b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b57600435335f5260036020526104908160405f205410156107ec565b335f52600360205260405f206104a7828254610851565b9055805f81156104f9575b5f80809381933390f1156104ee576040519081527f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6560203392a2005b6040513d5f823e3d90fd5b506108fc6104b2565b3461012b5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b5760206101a661053e6107a6565b6105466107c9565b60443591610898565b3461012b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b57602047604051908152f35b3461012b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b576105bf6107a6565b73ffffffffffffffffffffffffffffffffffffffff60243591335f52600460205260405f208282165f526020528260405f205560405192835216907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b3461012b575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012b576040515f5f54908160011c60018316928315610754575b60208210841461036e57818552849390811561030e57506001146106dc575003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01681019067ffffffffffffffff8211818310176102675760408290528190610263908261075e565b5f80805291507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b81831061073857505081016020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610215565b6020919350806001915483858801015201910190918392610704565b90607f1690610670565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602060409481855280519182918282880152018686015e5f8582860101520116010190565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361012b57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361012b57565b156107f357565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4e6f7420656e6f7567682062616c616e636500000000000000000000000000006044820152fd5b9190820391821161085e57565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9190820180921161085e57565b73ffffffffffffffffffffffffffffffffffffffff1690815f5260036020526108c78360405f205410156107ec565b3382141580610a43575b61094d575b602073ffffffffffffffffffffffffffffffffffffffff7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92845f526003835260405f20610925878254610851565b90551693845f526003825260405f2061093f82825461088b565b9055604051908152a3600190565b815f52600460205260405f2073ffffffffffffffffffffffffffffffffffffffff33165f526020528260405f2054106109e557602073ffffffffffffffffffffffffffffffffffffffff7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92845f526004835260405f208233165f52835260405f206109da878254610851565b9055925050506108d6565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e6f7420656e6f75676820616c6c6f77616e63650000000000000000000000006044820152fd5b50815f52600460205260405f2073ffffffffffffffffffffffffffffffffffffffff33165f526020527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60405f205414156108d1565b335f52600360205260405f20610ab034825461088b565b90556040513481527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60203392a256fea264697066735822122055a12a0482e4f5a9115ea70387ef6415ac638932c03086a5fba29129dd1a704564736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "Withdrawal";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "guy";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "wad";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): WETHInterface;
    static connect(address: string, runner?: ContractRunner | null): WETH;
}
export {};
