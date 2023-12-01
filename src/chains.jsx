export const oasysChain = {
  hubm: {
    id: 248,
    name: 'Oasys Mainnet',
    network: 'hubm',
    nativeCurrency: {
      name: 'OAS',
      symbol: 'OAS',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.mainnet.oasys.games'],
      },
      public: {
        http: ['https://rpc.mainnet.oasys.games'],
      },
    },
    blockExplorers: {
      default: {
        name: 'blockscout',
        url: 'https://explorer.oasys.games',
      },
    },
  },
  hubt: {
    id: 9372,
    name: 'Oasys Testnet',
    network: 'hubt',
    nativeCurrency: {
      name: 'OAS',
      symbol: 'OAS',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.testnet.oasys.games'],
      },
      public: {
        http: ['https://rpc.testnet.oasys.games'],
      },
    },
    blockExplorers: {
      default: {
        name: 'blockscout',
        url: 'https://explorer.testnet.oasys.games',
      },
    },
  },
  localhost: {
    id: 31337,
    name: 'Localhost',
    network: 'localhost',
    nativeCurrency: {
      name: 'OAS',
      symbol: 'OAS',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['http://127.0.0.1:8545'],
      },
      public: {
        http: ['http://127.0.0.1:8545'],
      },
    },
    blockExplorers: {
      default: {
        name: 'blockscout',
        url: '',
      },
    },
  },
};
