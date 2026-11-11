import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../../../../common";
import type { USDCLikePermitMock, USDCLikePermitMockInterface } from "../../../../contracts/tests/mocks/USDCLikePermitMock";
type USDCLikePermitMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class USDCLikePermitMock__factory extends ContractFactory {
    constructor(...args: USDCLikePermitMockConstructorParams);
    getDeployTransaction(name: string, symbol: string, initialAccount: AddressLike, initialBalance: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(name: string, symbol: string, initialAccount: AddressLike, initialBalance: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<USDCLikePermitMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): USDCLikePermitMock__factory;
    static readonly bytecode = "0x61016080604052611c8f803803809161001882856104a9565b83398101906080818303126104a55780516001600160401b0381116104a557826100439183016104cc565b602082015190926001600160401b0382116104a5576100639183016104cc565b604082015190926001600160a01b0382169290918390036104a557606001519060409384519161009386846104a9565b60018352603160f81b6020840190815281519092906001600160401b0381116103b557600354600181811c9116801561049b575b602082101461039757601f8111610438575b50806020601f82116001146103d4575f916103c9575b508160011b915f199060031b1c1916176003555b8051906001600160401b0382116103b55760045490600182811c921680156103ab575b60208310146103975781601f849311610329575b50602090601f83116001146102c3575f926102b8575b50508160011b915f199060031b1c1916176004555b61016e81610521565b6101205261017b836106a8565b6101405260208151910120918260e05251902080610100524660a05284519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f84528683015260608201524660808201523060a082015260a081526101e660c0826104a9565b5190206080523060c05281156102a557600254908082018092116102915760207fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef915f936002558484528382528584208181540190558551908152a3516114ae90816107e18239608051816110b2015260a0518161116f015260c05181611083015260e0518161110101526101005181611127015261012051816107c3015261014051816107ec0152f35b634e487b7160e01b5f52601160045260245ffd5b63ec442f0560e01b5f525f60045260245ffd5b015190505f80610150565b60045f9081528281209350601f198516905b81811061031157509084600195949392106102f9575b505050811b01600455610165565b01515f1960f88460031b161c191690555f80806102eb565b929360206001819287860151815501950193016102d5565b60045f529091507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f840160051c8101916020851061038d575b90601f859493920160051c01905b81811061037f575061013a565b5f8155849350600101610372565b9091508190610364565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610126565b634e487b7160e01b5f52604160045260245ffd5b90508301515f6100ef565b60035f9081528181209250601f198416905b81811061042057509083600194939210610408575b5050811b01600355610103565b8501515f1960f88460031b161c191690555f806103fb565b9192602060018192868a0151815501940192016103e6565b60035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c81019160208410610491575b601f0160051c01905b81811061048657506100d9565b5f8155600101610479565b9091508190610470565b90607f16906100c7565b5f80fd5b601f909101601f19168101906001600160401b038211908210176103b557604052565b81601f820112156104a5578051906001600160401b0382116103b55760405192610500601f8401601f1916602001856104a9565b828452602083830101116104a557815f9260208093018386015e8301015290565b908151602081105f1461059b575090601f81511161055b57602081519101516020821061054c571790565b5f198260200360031b1b161790565b604460209160405192839163305a27a960e01b83528160048401528051918291826024860152018484015e5f828201840152601f01601f19168101030190fd5b6001600160401b0381116103b557600554600181811c9116801561069e575b602082101461039757601f811161066b575b50602092601f821160011461060a57928192935f926105ff575b50508160011b915f199060031b1c19161760055560ff90565b015190505f806105e6565b601f1982169360055f52805f20915f5b868110610653575083600195961061063b575b505050811b0160055560ff90565b01515f1960f88460031b161c191690555f808061062d565b9192602060018192868501518155019401920161061a565b60055f52601f60205f20910160051c810190601f830160051c015b81811061069357506105cc565b5f8155600101610686565b90607f16906105ba565b908151602081105f146106d3575090601f81511161055b57602081519101516020821061054c571790565b6001600160401b0381116103b557600654600181811c911680156107d6575b602082101461039757601f81116107a3575b50602092601f821160011461074257928192935f92610737575b50508160011b915f199060031b1c19161760065560ff90565b015190505f8061071e565b601f1982169360065f52805f20915f5b86811061078b5750836001959610610773575b505050811b0160065560ff90565b01515f1960f88460031b161c191690555f8080610765565b91926020600181928685015181550194019201610752565b60065f52601f60205f20910160051c810190601f830160051c015b8181106107cb5750610704565b5f81556001016107be565b90607f16906106f256fe6080806040526004361015610012575f80fd5b5f3560e01c90816306fdde0314610c6857508063095ea7b314610c2457806318160ddd14610be957806323b872dd14610a5557806330adf81f146109fd578063313ce567146109c45780633644e5151461098457806370a08231146109225780637ecebe00146108bf57806384b0196e1461078d57806395d89b411461066f5780639fd5a6cf14610383578063a9059cbb14610334578063d505accf146101515763dd62ed3e146100c1575f80fd5b3461014d5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d576100f8610d6b565b73ffffffffffffffffffffffffffffffffffffffff610115610d8e565b91165f52600160205273ffffffffffffffffffffffffffffffffffffffff60405f2091165f52602052602060405f2054604051908152f35b5f80fd5b3461014d5760e07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d57610188610d6b565b610190610d8e565b604435906064359260843560ff8116810361014d57844211610308576102aa9461025d6102a1926102896101eb8673ffffffffffffffffffffffffffffffffffffffff165f52600760205260405f2080549060018201905590565b9360405193849160208301968b8b8b8a919273ffffffffffffffffffffffffffffffffffffffff60a09497969592978160c08601997f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98752166020860152166040840152606083015260808201520152565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101845283610db1565b61029c60c4359360a43593519020611195565b611306565b909591956113a0565b73ffffffffffffffffffffffffffffffffffffffff80821694168481036102d857506102d693506111d6565b005b84907f4b800e46000000000000000000000000000000000000000000000000000000005f5260045260245260445ffd5b847f62791302000000000000000000000000000000000000000000000000000000005f5260045260245ffd5b3461014d5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d5761037861036e610d6b565b6024359033610f4a565b602060405160018152f35b3461014d5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d576103ba610d6b565b6103c2610d8e565b6044359060843560643567ffffffffffffffff821161014d573660238301121561014d5781600401356103f481610e1f565b926104026040519485610db1565b818452366024838301011161014d57815f9260246020930183870137840101527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81141580610666575b61063e575f9161050561057e6105398888610531896105058a996104978673ffffffffffffffffffffffffffffffffffffffff165f52600760205260405f2080549060018201905590565b604051958694602086019889919273ffffffffffffffffffffffffffffffffffffffff60a09497969592978160c08601997f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98752166020860152166040840152606083015260808201520152565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610db1565b519020611195565b9260405192839160208301957f1626ba7e0000000000000000000000000000000000000000000000000000000087526024840152604060448401526064830190610d28565b5190865afa3d15610637573d61059381610e1f565b906105a16040519283610db1565b81523d5f602083013e5b81610629575b816105ee575b50156105c6576102d6926111d6565b7f8baa579f000000000000000000000000000000000000000000000000000000005f5260045ffd5b905060208180518101031261014d57602001517f1626ba7e0000000000000000000000000000000000000000000000000000000014846105b7565b9050602081511015906105b1565b60606105ab565b7f1a15a3cc000000000000000000000000000000000000000000000000000000005f5260045ffd5b5042811061044c565b3461014d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d576040515f6004546106ad81610e59565b808452906001811690811561074b57506001146106ed575b6106e9836106d581850382610db1565b604051918291602083526020830190610d28565b0390f35b60045f9081527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b939250905b808210610731575090915081016020016106d56106c5565b919260018160209254838588010152019101909291610719565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660208086019190915291151560051b840190910191506106d590506106c5565b3461014d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d576108636107e77f0000000000000000000000000000000000000000000000000000000000000000611253565b6108107f00000000000000000000000000000000000000000000000000000000000000006112cf565b6020610871604051926108238385610db1565b5f84525f3681376040519586957f0f00000000000000000000000000000000000000000000000000000000000000875260e08588015260e0870190610d28565b908582036040870152610d28565b4660608501523060808501525f60a085015283810360c08501528180845192838152019301915f5b8281106108a857505050500390f35b835185528695509381019392810192600101610899565b3461014d5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d5773ffffffffffffffffffffffffffffffffffffffff61090b610d6b565b165f526007602052602060405f2054604051908152f35b3461014d5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d5773ffffffffffffffffffffffffffffffffffffffff61096e610d6b565b165f525f602052602060405f2054604051908152f35b3461014d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d5760206109bc61106c565b604051908152f35b3461014d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d57602060405160128152f35b3461014d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d5760206040517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98152f35b3461014d5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d57610a8c610d6b565b610a94610d8e565b6044359073ffffffffffffffffffffffffffffffffffffffff831692835f52600160205260405f2073ffffffffffffffffffffffffffffffffffffffff33165f5260205260405f20547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103610b10575b506103789350610f4a565b838110610bb5578415610b89573315610b5d57610378945f52600160205260405f2073ffffffffffffffffffffffffffffffffffffffff33165f526020528360405f209103905584610b05565b7f94280d62000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b7fe602df05000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b83907ffb8f41b2000000000000000000000000000000000000000000000000000000005f523360045260245260445260645ffd5b3461014d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d576020600254604051908152f35b3461014d5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d57610378610c5e610d6b565b60243590336111d6565b3461014d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014d575f600354610ca381610e59565b808452906001811690811561074b5750600114610cca576106e9836106d581850382610db1565b60035f9081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b939250905b808210610d0e575090915081016020016106d56106c5565b919260018160209254838588010152019101909291610cf6565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602080948051918291828752018686015e5f8582860101520116010190565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361014d57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361014d57565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610df257604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff8111610df257601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b90600182811c92168015610ea0575b6020831014610e7357565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b91607f1691610e68565b5f9291815491610eb983610e59565b8083529260018116908115610f0e5750600114610ed557505050565b5f9081526020812093945091925b838310610ef4575060209250010190565b600181602092949394548385870101520191019190610ee3565b905060209495507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091509291921683830152151560051b010190565b73ffffffffffffffffffffffffffffffffffffffff169081156110405773ffffffffffffffffffffffffffffffffffffffff1691821561101457815f525f60205260405f2054818110610fe257817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f525f825260405f20818154019055604051908152a3565b827fe450d38c000000000000000000000000000000000000000000000000000000005f5260045260245260445260645ffd5b7fec442f05000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b7f96c6fd1e000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630148061116c575b156110d4577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815261116660c082610db1565b51902090565b507f000000000000000000000000000000000000000000000000000000000000000046146110ab565b6042906111a061106c565b90604051917f19010000000000000000000000000000000000000000000000000000000000008352600283015260228201522090565b73ffffffffffffffffffffffffffffffffffffffff16908115610b895773ffffffffffffffffffffffffffffffffffffffff16918215610b5d5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591835f526001825260405f20855f5282528060405f2055604051908152a3565b60ff81146112b25760ff811690601f821161128a5760405191611277604084610db1565b6020808452838101919036833783525290565b7fb3512b0c000000000000000000000000000000000000000000000000000000005f5260045ffd5b506040516112cc816112c5816005610eaa565b0382610db1565b90565b60ff81146112f35760ff811690601f821161128a5760405191611277604084610db1565b506040516112cc816112c5816006610eaa565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611395579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa1561138a575f5173ffffffffffffffffffffffffffffffffffffffff81161561138057905f905f90565b505f906001905f90565b6040513d5f823e3d90fd5b5050505f9160039190565b600481101561144b57806113b2575050565b600181036113e2577ff645eedf000000000000000000000000000000000000000000000000000000005f5260045ffd5b6002810361141657507ffce698f7000000000000000000000000000000000000000000000000000000005f5260045260245ffd5b6003146114205750565b7fd78bce0c000000000000000000000000000000000000000000000000000000005f5260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffdfea2646970667358221220c2ee6ad07255b4474f09f7ec5f86b161246e918984e39e08a28c7adaef4e150964736f6c634300081e0033";
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
        readonly inputs: readonly [];
        readonly name: "InvalidSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PermitExpired";
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
        readonly inputs: readonly [];
        readonly name: "PERMIT_TYPEHASH";
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
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    }];
    static createInterface(): USDCLikePermitMockInterface;
    static connect(address: string, runner?: ContractRunner | null): USDCLikePermitMock;
}
export {};
