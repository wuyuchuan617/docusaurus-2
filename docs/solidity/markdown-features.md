---
sidebar_position: 4
tags:
  - 智能合約
---

# 如何寫智能合約

&nbsp;

&nbsp;

### Resources

---

&nbsp;

&nbsp;

&nbsp;

### 目標

---

- 以 Solidity 0.8.17 語言為標準

- 部署合約、與合約互動

- 部署 ERC-20 Token、NFT

&nbsp;

### 大綱

---

1. 對區塊鏈世界說聲 Hi：Hello World 部署合約

2. 區塊鏈上的撲滿：如何在區塊鏈上存錢、領錢

3. 實況主捐款合約：如何部署合約讓實況主可以收捐款

4. 那些年我們一起發的代幣 - ERC20

5. NFT 號稱元宇宙元年的基石 - ERC721

&nbsp;

&nbsp;

### 什麼是智能合約？

---

**智能合約**部署在**以太坊**，部署以後會取得**位置**，使用者透過**位置**、**合約介面**去分合約互動，合約會在多個**節點**執行、驗證、儲存，多數的節點必須驗算出相同的結果，才能確定這次的執行是正確的，**節點**共同組成**區塊鏈網絡**。

1. **智能合約 Smart Contract**：App、軟體

2. **位置 Address**：App 專屬 ID

3. **合約介面 ABI**：合約提供什麼功能

4. **區塊鏈技術 Blockchain**：手機（比特幣、以太坊、Solana）

5. **節點 Node**：Iphone，一個節點包含：**以太坊虛擬機（VM）**、**資料儲存區（Storage）**

6. **以太坊 Ethereum**：iOS App Store

&nbsp;

限制：

- 產生隨機數（多數的節點必須驗算出相同的結果）

- 資料儲存（每個節點都要驗證，每個節點都要儲存，儲存成本高）

&nbsp;

### 智能合約的結構 - SPDX License Identifier, Pragmas

---

![](https://media.heptabase.com/v1/images/2d3f178f-b4a0-4f0c-89b7-3bc5a3b5a982/2c41ab38-0bdc-4a7e-9474-2cc3d27e2e73/image.png)&nbsp;

1. SPDX 版權宣告 License Identifier

2. 編譯指示 Pragmas

&nbsp;

空白的 .sol 檔，會出現的 Warning

1. **No Contract Compiled Yet**

2. **SPDX license identifier not provided in source file.**\
   SPDX (The Software Package Data Exchange)，在合約第一行加入宣告版權

3. **Source file does not specify required compiler version!**

```ts
// SPDX-License-Identifier: GPL-3.0   // 宣告版權

pragma solidity >=0.8.2 <0.9.0;       // 指定編譯器版本，開關編譯器使用

contract ContractName {}              // 宣告一個合約實體 (contract, ContractName, Scope)
```

&nbsp;

&nbsp;

### Remix IDE

---

<https://remix.ethereum.org/>

&nbsp;

![](https://media.heptabase.com/v1/images/2d3f178f-b4a0-4f0c-89b7-3bc5a3b5a982/b2d93c08-eeb7-42bb-b0c2-b8c3203fc4e8/image.png)&nbsp;

![](https://media.heptabase.com/v1/images/2d3f178f-b4a0-4f0c-89b7-3bc5a3b5a982/53cb026d-ceb0-4fe4-aa5f-12b76921a903/image.png)&nbsp;

![](https://media.heptabase.com/v1/images/2d3f178f-b4a0-4f0c-89b7-3bc5a3b5a982/2e3c1482-6995-450a-a850-ae810c4d858b/image.png)&nbsp;

![](https://media.heptabase.com/v1/images/2d3f178f-b4a0-4f0c-89b7-3bc5a3b5a982/169b754c-efc9-4da1-8204-b646e302c218/image.png)&nbsp;

![](https://media.heptabase.com/v1/images/2d3f178f-b4a0-4f0c-89b7-3bc5a3b5a982/055773ca-ccbc-4f27-b830-c4b1925495c9/image.png)&nbsp;

### Value Types 數值型態

---

- 靜態型態 (Statically typed language)：所有所有變數都需要宣告型態 ，在編譯的時後就會做檢查

- 每個型態都有預設值，不存在 undefined, null

- 主要分為：

  - 數值型態（Value Types）:

  - 參考型態（Reference Types）

  - 映射型態（Mapping Types）

&nbsp;

#### 數值型態（Value Types）

1. bool (預設值為 false)

2. int, unit, intN, unitN (預設值為 0)

   - int : 有號整數 （Signed Integer)

   - unit：無號整數（Unsigned Integer）

   - N 必須是 8 的倍數，且落在 8 - 256 區間

   ```ts
   int A = -123
   unit B = 123
   int8 c = -6
   unit256 D = 123456789

   int = int256
   unit = unit256
   ```

3. address 位址

   ```ts
   address X = 0x9A76....                   // 儲存一個以太坊位址，大小為 20 Bytes
   address payable Y = payable(0x9A76....)  // 允許轉錢（以太）到該位址
   ```

4. enum 列舉 (預設值為第一個 Element)

   ```ts
   enum Color { Blue, Green}
   Color C = Color.Blue   // 0
   Color D = Color.Green  // 1
   ```

&nbsp;

### Reference Types 參考型態

---

- 要指定存放位置， memory or storage

1. bytes 位元組

   - var.length

   - var\[idx\]

2. string

   - 無法修改字串內容

   - 無法取得特定字串位置 S\[0\]

   - 比較時要用 hash() 方式來比較，先把字串做 abi 編碼，再把編碼後的結果拿去算雜湊值

     `keccak256(abi.encodePacked(S1)) === keccak256(abi.encodePacked(S2))`

   - 字串串接 `string.concat( s1, s2 ) `

   - 字串長度要先轉成 bytes 才能取得 `bytes(str).length`。如果是 UTF-8 的話，長度為位元長度，不是單純字串長度。

&nbsp;

**資料存放的位置**

- 資料是建築物，參考型態是門牌，不儲存不儲存資料，但儲存指到資料的位置

1. 記憶體（memory）：\
   執行結束就會消失

2. 儲存空間（storage）：\
   儲存在合約的儲存空間，合約被銷毀才會消失，會寫到所有節點上，大量地存取 storage 時，燃料費會超級貴

3. 呼叫資料（calldata）：\
   唯獨（read-only）的特殊資料區，用來儲存函式的參數。

&nbsp;

#### 不同資料位置的移動

- storage 移動到 memory or calldata 必然複製一份，就是需要成本

- memory 移動到 memory 只是複製 reference，因此修改一個會改到另一個

- storage 移動到 local storage （專門指到 storage 空間的參考）也只會建立參考

&nbsp;

### Mapping Types 映射型態

&nbsp;
