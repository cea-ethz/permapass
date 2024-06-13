export const DIDRegistry = {
  "31337": "0xbe2519a7d0ac9d3e32d5fffa28d3606bebed1ada",
  "11155111": "0xc6b83c85b2b436468c966c4b2ac568b625d9fff4",
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "name",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "value",
          type: "bytes",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "validTo",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "previousChange",
          type: "uint256",
        },
      ],
      name: "DIDAttributeChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "delegateType",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "address",
          name: "delegate",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "validTo",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "previousChange",
          type: "uint256",
        },
      ],
      name: "DIDDelegateChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "previousChange",
          type: "uint256",
        },
      ],
      name: "DIDOwnerChanged",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "delegateType",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "delegate",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "validity",
          type: "uint256",
        },
      ],
      name: "addDelegate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "uint8",
          name: "sigV",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "sigR",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "sigS",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "delegateType",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "delegate",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "validity",
          type: "uint256",
        },
      ],
      name: "addDelegateSigned",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "changeOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "uint8",
          name: "sigV",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "sigR",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "sigS",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "changeOwnerSigned",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "changed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "delegates",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
      ],
      name: "identityOwner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "nonce",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "owners",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "name",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "value",
          type: "bytes",
        },
      ],
      name: "revokeAttribute",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "uint8",
          name: "sigV",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "sigR",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "sigS",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "name",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "value",
          type: "bytes",
        },
      ],
      name: "revokeAttributeSigned",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "delegateType",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "delegate",
          type: "address",
        },
      ],
      name: "revokeDelegate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "uint8",
          name: "sigV",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "sigR",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "sigS",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "delegateType",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "delegate",
          type: "address",
        },
      ],
      name: "revokeDelegateSigned",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "name",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "value",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "validity",
          type: "uint256",
        },
      ],
      name: "setAttribute",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "uint8",
          name: "sigV",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "sigR",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "sigS",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "name",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "value",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "validity",
          type: "uint256",
        },
      ],
      name: "setAttributeSigned",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "identity",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "delegateType",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "delegate",
          type: "address",
        },
      ],
      name: "validDelegate",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
} as const;
