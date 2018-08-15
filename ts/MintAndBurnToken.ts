/* GENERATED BY TYPECHAIN VER. 0.2.4 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import {
  TypeChainContract,
  promisify,
  ITxParams,
  IPayableTxParams,
  DeferredTransactionWrapper,
  DeferredEventWrapper
} from "./typechain-runtime";

export class MintAndBurnToken extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: "mintingFinished",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_value", type: "uint256" }
        ],
        name: "approve",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_from", type: "address" },
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" }
        ],
        name: "transferFrom",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "version",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" }
        ],
        name: "transfer",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_spender", type: "address" }
        ],
        name: "allowance",
        outputs: [{ name: "remaining", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenName", type: "string" },
          { name: "_decimalUnits", type: "uint8" },
          { name: "_tokenSymbol", type: "string" }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "to", type: "address" },
          { indexed: false, name: "amount", type: "uint256" }
        ],
        name: "Mint",
        type: "event"
      },
      { anonymous: false, inputs: [], name: "MintFinished", type: "event" },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "burner", type: "address" },
          { indexed: false, name: "value", type: "uint256" }
        ],
        name: "Burn",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "previousOwner", type: "address" },
          { indexed: true, name: "newOwner", type: "address" }
        ],
        name: "OwnershipTransferred",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_from", type: "address" },
          { indexed: true, name: "_to", type: "address" },
          { indexed: false, name: "_value", type: "uint256" }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_owner", type: "address" },
          { indexed: true, name: "_spender", type: "address" },
          { indexed: false, name: "_value", type: "uint256" }
        ],
        name: "Approval",
        type: "event"
      },
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "mint",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [],
        name: "finishMinting",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_value", type: "uint256" }],
        name: "burn",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<MintAndBurnToken> {
    const contract = new MintAndBurnToken(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);

    // in case of missing smartcontract, code can be equal to "0x0" or "0x" depending on exact web3 implementation
    // to cover all these cases we just check against the source code length — there won't be any meaningful EVM program in less then 3 chars
    if (code.length < 4) {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get mintingFinished(): Promise<boolean> {
    return promisify(this.rawWeb3Contract.mintingFinished, []);
  }
  public get name(): Promise<string> {
    return promisify(this.rawWeb3Contract.name, []);
  }
  public get totalSupply(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.totalSupply, []);
  }
  public get decimals(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.decimals, []);
  }
  public get version(): Promise<string> {
    return promisify(this.rawWeb3Contract.version, []);
  }
  public get owner(): Promise<string> {
    return promisify(this.rawWeb3Contract.owner, []);
  }
  public get symbol(): Promise<string> {
    return promisify(this.rawWeb3Contract.symbol, []);
  }
  public balanceOf(_owner: BigNumber | string): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.balanceOf, [_owner.toString()]);
  }
  public allowance(
    _owner: BigNumber | string,
    _spender: BigNumber | string
  ): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.allowance, [
      _owner.toString(),
      _spender.toString()
    ]);
  }

  public approveTx(
    _spender: BigNumber | string,
    _value: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "approve", [
      _spender.toString(),
      _value.toString()
    ]);
  }
  public transferFromTx(
    _from: BigNumber | string,
    _to: BigNumber | string,
    _value: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "transferFrom", [
      _from.toString(),
      _to.toString(),
      _value.toString()
    ]);
  }
  public transferTx(
    _to: BigNumber | string,
    _value: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "transfer", [
      _to.toString(),
      _value.toString()
    ]);
  }
  public transferOwnershipTx(
    newOwner: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(
      this,
      "transferOwnership",
      [newOwner.toString()]
    );
  }
  public mintTx(
    _to: BigNumber | string,
    _amount: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "mint", [
      _to.toString(),
      _amount.toString()
    ]);
  }
  public finishMintingTx(): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "finishMinting", []);
  }
  public burnTx(
    _value: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "burn", [
      _value.toString()
    ]);
  }

  public MintEvent(eventFilter: {
    to?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { to: BigNumber | string; amount: BigNumber | number },
    { to?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new DeferredEventWrapper<
      { to: BigNumber | string; amount: BigNumber | number },
      { to?: BigNumber | string | Array<BigNumber | string> }
    >(this, "Mint", eventFilter);
  }
  public MintFinishedEvent(eventFilter: {}): DeferredEventWrapper<{}, {}> {
    return new DeferredEventWrapper<{}, {}>(this, "MintFinished", eventFilter);
  }
  public BurnEvent(eventFilter: {
    burner?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { burner: BigNumber | string; value: BigNumber | number },
    { burner?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new DeferredEventWrapper<
      { burner: BigNumber | string; value: BigNumber | number },
      { burner?: BigNumber | string | Array<BigNumber | string> }
    >(this, "Burn", eventFilter);
  }
  public OwnershipTransferredEvent(eventFilter: {
    previousOwner?: BigNumber | string | Array<BigNumber | string>;
    newOwner?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { previousOwner: BigNumber | string; newOwner: BigNumber | string },
    {
      previousOwner?: BigNumber | string | Array<BigNumber | string>;
      newOwner?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new DeferredEventWrapper<
      { previousOwner: BigNumber | string; newOwner: BigNumber | string },
      {
        previousOwner?: BigNumber | string | Array<BigNumber | string>;
        newOwner?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "OwnershipTransferred", eventFilter);
  }
  public TransferEvent(eventFilter: {
    _from?: BigNumber | string | Array<BigNumber | string>;
    _to?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    {
      _from: BigNumber | string;
      _to: BigNumber | string;
      _value: BigNumber | number;
    },
    {
      _from?: BigNumber | string | Array<BigNumber | string>;
      _to?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new DeferredEventWrapper<
      {
        _from: BigNumber | string;
        _to: BigNumber | string;
        _value: BigNumber | number;
      },
      {
        _from?: BigNumber | string | Array<BigNumber | string>;
        _to?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "Transfer", eventFilter);
  }
  public ApprovalEvent(eventFilter: {
    _owner?: BigNumber | string | Array<BigNumber | string>;
    _spender?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    {
      _owner: BigNumber | string;
      _spender: BigNumber | string;
      _value: BigNumber | number;
    },
    {
      _owner?: BigNumber | string | Array<BigNumber | string>;
      _spender?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new DeferredEventWrapper<
      {
        _owner: BigNumber | string;
        _spender: BigNumber | string;
        _value: BigNumber | number;
      },
      {
        _owner?: BigNumber | string | Array<BigNumber | string>;
        _spender?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "Approval", eventFilter);
  }
}