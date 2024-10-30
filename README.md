# Alias converter tool

### How to use:

#### - Build the project 

```aiignore
yarn & yarn build
```

#### - Update the configuration config.json your addresses

```aiignore
{
  "l1Addresses": ["0xe69a535730858fd8dc386b448972a9f801ab4e12"],
  "l2Addresses": ["0xf7ab535730858fd8dc386b448972a9f801ab5f23"]
}
```

#### - Run the tool

```aiignore
yarn convert
```

Example of output

```
  ApplyL1ToL2Alias
L1 address:  0xe69a535730858fd8dc386b448972a9f801ab4e12 , L2 alias:  0xf7aB535730858FD8DC386b448972A9f801Ab5F23
    ✔  (604ms)

  UndoL1ToL2Alias
L1 address:  0xcEf138aDF30684774fc7f8bD6300e69915B7e2c4 , L2 alias:  0xe00238adf30684774fc7f8bd6300e69915b7f3d5
L1 address:  0xB340b0191351ce308FDfD779d73814c910fC4dbA , L2 alias:  0xc451b0191351ce308fdfd779d73814c910fc5ecb
L1 address:  0x13Cf099096295d394Df8ED7FF620f651DE778876 , L2 alias:  0x24e0099096295d394df8ed7ff620f651de779987
L1 address:  0x695C75B2Ecb7922623ABd860304904d6FF068fe4 , L2 alias:  0x7a6d75b2ecb7922623abd860304904d6ff06a0f5
L1 address:  0x3b858f6bEEcf1906710B08e8B472B8ba6E75e846 , L2 alias:  0x4c968f6beecf1906710b08e8b472b8ba6e75f957
L1 address:  0x5Db3D9F199F00028fc79CA75895737290B2ACa22 , L2 alias:  0x6ec4d9f199f00028fc79ca75895737290b2adb33
L1 address:  0xE61a6c2151b3e4e3a594C98c0A4987DcCC1C40D3 , L2 alias:  0xf72b6c2151b3e4e3a594c98c0a4987dccc1c51e4
```
