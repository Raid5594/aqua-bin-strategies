import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../../../common";
import type { ERC20PermitMock, ERC20PermitMockInterface } from "../../../contracts/mocks/ERC20PermitMock";
type ERC20PermitMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20PermitMock__factory extends ContractFactory {
    constructor(...args: ERC20PermitMockConstructorParams);
    getDeployTransaction(name: string, symbol: string, initialAccount: AddressLike, initialBalance: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(name: string, symbol: string, initialAccount: AddressLike, initialBalance: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ERC20PermitMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ERC20PermitMock__factory;
    static readonly bytecode = "0x61016080604052611d0780380380916100188285610504565b83398101906080818303126105005780516001600160401b0381116105005782610043918301610527565b602082015190926001600160401b03821161050057610063918301610527565b604082015190926001600160a01b0382169290918390036105005760600151906040938451916100938684610504565b60018352603160f81b6020840190815281519092906001600160401b03811161041057600354600181811c911680156104f6575b60208210146103f257601f8111610493575b50806020601f821160011461042f575f91610424575b508160011b915f199060031b1c1916176003555b8051906001600160401b0382116104105760045490600182811c92168015610406575b60208310146103f25781601f849311610384575b50602090601f831160011461031e575f92610313575b50508160011b915f199060031b1c1916176004555b61016e8161057c565b6101205261017b83610703565b6101405260208151910120918260e05251902080610100524660a05284519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f84528683015260608201524660808201523060a082015260a081526101e660c082610504565b5190206080523060c05233156103005760088054336001600160a01b0319821681179092556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a381156102ed57600254908082018092116102d95760207fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef915f936002558484528382528584208181540190558551908152a3516114cb908161083c8239608051816110c3015260a05181611180015260c05181611094015260e051816111120152610100518161113801526101205181610719015261014051816107420152f35b634e487b7160e01b5f52601160045260245ffd5b63ec442f0560e01b5f525f60045260245ffd5b631e4fbdf760e01b5f525f60045260245ffd5b015190505f80610150565b60045f9081528281209350601f198516905b81811061036c5750908460019594939210610354575b505050811b01600455610165565b01515f1960f88460031b161c191690555f8080610346565b92936020600181928786015181550195019301610330565b60045f529091507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f840160051c810191602085106103e8575b90601f859493920160051c01905b8181106103da575061013a565b5f81558493506001016103cd565b90915081906103bf565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610126565b634e487b7160e01b5f52604160045260245ffd5b90508301515f6100ef565b60035f9081528181209250601f198416905b81811061047b57509083600194939210610463575b5050811b01600355610103565b8501515f1960f88460031b161c191690555f80610456565b9192602060018192868a015181550194019201610441565b60035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c810191602084106104ec575b601f0160051c01905b8181106104e157506100d9565b5f81556001016104d4565b90915081906104cb565b90607f16906100c7565b5f80fd5b601f909101601f19168101906001600160401b0382119082101761041057604052565b81601f82011215610500578051906001600160401b038211610410576040519261055b601f8401601f191660200185610504565b8284526020838301011161050057815f9260208093018386015e8301015290565b908151602081105f146105f6575090601f8151116105b65760208151910151602082106105a7571790565b5f198260200360031b1b161790565b604460209160405192839163305a27a960e01b83528160048401528051918291826024860152018484015e5f828201840152601f01601f19168101030190fd5b6001600160401b03811161041057600554600181811c911680156106f9575b60208210146103f257601f81116106c6575b50602092601f821160011461066557928192935f9261065a575b50508160011b915f199060031b1c19161760055560ff90565b015190505f80610641565b601f1982169360055f52805f20915f5b8681106106ae5750836001959610610696575b505050811b0160055560ff90565b01515f1960f88460031b161c191690555f8080610688565b91926020600181928685015181550194019201610675565b60055f52601f60205f20910160051c810190601f830160051c015b8181106106ee5750610627565b5f81556001016106e1565b90607f1690610615565b908151602081105f1461072e575090601f8151116105b65760208151910151602082106105a7571790565b6001600160401b03811161041057600654600181811c91168015610831575b60208210146103f257601f81116107fe575b50602092601f821160011461079d57928192935f92610792575b50508160011b915f199060031b1c19161760065560ff90565b015190505f80610779565b601f1982169360065f52805f20915f5b8681106107e657508360019596106107ce575b505050811b0160065560ff90565b01515f1960f88460031b161c191690555f80806107c0565b919260206001819286850151815501940192016107ad565b60065f52601f60205f20910160051c810190601f830160051c015b818110610826575061075f565b5f8155600101610819565b90607f169061074d56fe6080806040526004361015610012575f80fd5b5f3560e01c90816306fdde0314610d0b57508063095ea7b314610cc757806318160ddd14610c8c57806323b872dd14610af8578063313ce56714610abf5780633644e51514610a7f57806340c10f191461097657806370a0823114610914578063715018a6146108785780637ecebe001461081557806384b0196e146106e35780638da5cb5b1461069257806395d89b41146105745780639dc29fac14610460578063a9059cbb14610411578063d505accf14610260578063dd62ed3e146101d45763f2fde38b146100e2575f80fd5b346101d05760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d05773ffffffffffffffffffffffffffffffffffffffff61012e610e0e565b6101366111a6565b1680156101a45773ffffffffffffffffffffffffffffffffffffffff600854827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600855167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b7f1e4fbdf7000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b5f80fd5b346101d05760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d05761020b610e0e565b73ffffffffffffffffffffffffffffffffffffffff610228610e31565b91165f52600160205273ffffffffffffffffffffffffffffffffffffffff60405f2091165f52602052602060405f2054604051908152f35b346101d05760e07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d057610297610e0e565b61029f610e31565b604435906064359260843560ff811681036101d0578442116103e5576103a061039773ffffffffffffffffffffffffffffffffffffffff9283851697885f52600760205260405f20908154916001830190556040519060208201927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c984528b6040840152878a1660608401528a608084015260a083015260c082015260c0815261034a60e082610f45565b51902061035561107d565b90604051917f190100000000000000000000000000000000000000000000000000000000000083526002830152602282015260c43591604260a4359220611323565b909291926113bd565b168481036103b557506103b393506111f3565b005b84907f4b800e46000000000000000000000000000000000000000000000000000000005f5260045260245260445ffd5b847f62791302000000000000000000000000000000000000000000000000000000005f5260045260245ffd5b346101d05760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d05761045561044b610e0e565b6024359033610fb3565b602060405160018152f35b346101d05760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d057610497610e0e565b73ffffffffffffffffffffffffffffffffffffffff602435916104b86111a6565b16801561054857805f525f60205260405f2054828110610516576020835f947fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef938587528684520360408620558060025403600255604051908152a3005b907fe450d38c000000000000000000000000000000000000000000000000000000005f5260045260245260445260645ffd5b7f96c6fd1e000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b346101d0575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d0576040515f6004546105b281610e54565b808452906001811690811561065057506001146105f2575b6105ee836105da81850382610f45565b604051918291602083526020830190610dcb565b0390f35b60045f9081527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b939250905b808210610636575090915081016020016105da6105ca565b91926001816020925483858801015201910190929161061e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660208086019190915291151560051b840190910191506105da90506105ca565b346101d0575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d057602073ffffffffffffffffffffffffffffffffffffffff60085416604051908152f35b346101d0575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d0576107b961073d7f0000000000000000000000000000000000000000000000000000000000000000611270565b6107667f00000000000000000000000000000000000000000000000000000000000000006112ec565b60206107c7604051926107798385610f45565b5f84525f3681376040519586957f0f00000000000000000000000000000000000000000000000000000000000000875260e08588015260e0870190610dcb565b908582036040870152610dcb565b4660608501523060808501525f60a085015283810360c08501528180845192838152019301915f5b8281106107fe57505050500390f35b8351855286955093810193928101926001016107ef565b346101d05760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d05773ffffffffffffffffffffffffffffffffffffffff610861610e0e565b165f526007602052602060405f2054604051908152f35b346101d0575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d0576108ae6111a6565b5f73ffffffffffffffffffffffffffffffffffffffff6008547fffffffffffffffffffffffff00000000000000000000000000000000000000008116600855167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b346101d05760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d05773ffffffffffffffffffffffffffffffffffffffff610960610e0e565b165f525f602052602060405f2054604051908152f35b346101d05760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d0576109ad610e0e565b73ffffffffffffffffffffffffffffffffffffffff602435916109ce6111a6565b16908115610a535760025490808201809211610a265760207fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef915f9360025584845283825260408420818154019055604051908152a3005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7fec442f05000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b346101d0575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d0576020610ab761107d565b604051908152f35b346101d0575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d057602060405160128152f35b346101d05760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d057610b2f610e0e565b610b37610e31565b6044359073ffffffffffffffffffffffffffffffffffffffff831692835f52600160205260405f2073ffffffffffffffffffffffffffffffffffffffff33165f5260205260405f20547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103610bb3575b506104559350610fb3565b838110610c58578415610c2c573315610c0057610455945f52600160205260405f2073ffffffffffffffffffffffffffffffffffffffff33165f526020528360405f209103905584610ba8565b7f94280d62000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b7fe602df05000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b83907ffb8f41b2000000000000000000000000000000000000000000000000000000005f523360045260245260445260645ffd5b346101d0575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d0576020600254604051908152f35b346101d05760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d057610455610d01610e0e565b60243590336111f3565b346101d0575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d0575f600354610d4681610e54565b80845290600181169081156106505750600114610d6d576105ee836105da81850382610f45565b60035f9081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b939250905b808210610db1575090915081016020016105da6105ca565b919260018160209254838588010152019101909291610d99565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602080948051918291828752018686015e5f8582860101520116010190565b6004359073ffffffffffffffffffffffffffffffffffffffff821682036101d057565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036101d057565b90600182811c92168015610e9b575b6020831014610e6e57565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b91607f1691610e63565b5f9291815491610eb483610e54565b8083529260018116908115610f095750600114610ed057505050565b5f9081526020812093945091925b838310610eef575060209250010190565b600181602092949394548385870101520191019190610ede565b905060209495507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091509291921683830152151560051b010190565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610f8657604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff169081156105485773ffffffffffffffffffffffffffffffffffffffff16918215610a5357815f525f60205260405f205481811061104b57817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f525f825260405f20818154019055604051908152a3565b827fe450d38c000000000000000000000000000000000000000000000000000000005f5260045260245260445260645ffd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630148061117d575b156110e5577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815261117760c082610f45565b51902090565b507f000000000000000000000000000000000000000000000000000000000000000046146110bc565b73ffffffffffffffffffffffffffffffffffffffff6008541633036111c757565b7f118cdaa7000000000000000000000000000000000000000000000000000000005f523360045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff16908115610c2c5773ffffffffffffffffffffffffffffffffffffffff16918215610c005760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591835f526001825260405f20855f5282528060405f2055604051908152a3565b60ff81146112cf5760ff811690601f82116112a75760405191611294604084610f45565b6020808452838101919036833783525290565b7fb3512b0c000000000000000000000000000000000000000000000000000000005f5260045ffd5b506040516112e9816112e2816005610ea5565b0382610f45565b90565b60ff81146113105760ff811690601f82116112a75760405191611294604084610f45565b506040516112e9816112e2816006610ea5565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084116113b2579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa156113a7575f5173ffffffffffffffffffffffffffffffffffffffff81161561139d57905f905f90565b505f906001905f90565b6040513d5f823e3d90fd5b5050505f9160039190565b600481101561146857806113cf575050565b600181036113ff577ff645eedf000000000000000000000000000000000000000000000000000000005f5260045ffd5b6002810361143357507ffce698f7000000000000000000000000000000000000000000000000000000005f5260045260245ffd5b60031461143d5750565b7fd78bce0c000000000000000000000000000000000000000000000000000000005f5260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffdfea26469706673582212207e0b644e34dd08394e04c2b0815295a9ab7206fe6f0c55bf78322d2b4f4aa1cb64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "initialAccount";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "initialBalance";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ECDSAInvalidSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "length";
            readonly type: "uint256";
        }];
        readonly name: "ECDSAInvalidSignatureLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "ECDSAInvalidSignatureS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "allowance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidApprover";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "ERC2612ExpiredSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "ERC2612InvalidSigner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentNonce";
            readonly type: "uint256";
        }];
        readonly name: "InvalidAccountNonce";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidShortString";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "OwnableInvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "OwnableUnauthorizedAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "str";
            readonly type: "string";
        }];
        readonly name: "StringTooLong";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "EIP712DomainChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
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
            readonly name: "account";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "eip712Domain";
        readonly outputs: readonly [{
            readonly internalType: "bytes1";
            readonly name: "fields";
            readonly type: "bytes1";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "version";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "verifyingContract";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "extensions";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
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
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
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
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC20PermitMockInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC20PermitMock;
}
export {};
