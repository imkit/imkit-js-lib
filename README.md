# IMKit Javascript API v3.0

# 關於 IMKit SDK

IMKit 是由樂堤科技 FUNTEK https://funtek.co 所研發的即時通訊軟體開發工具組 (SDK, Software Development Kits)，使用此 SDK 可快速將**即時通訊/聊天**功能安裝在您既有的 App 或網站內。

IMKit 除了包含 SDK 之外，概念上還有一個 (實際上是一組) Chat Server 跑在遠端，讓安裝在網站或 App 內的 SDK 可和 Chat Server 之間彼此聯繫，完成訊息傳遞的功能。

# 什麼是 In-Web Chat ?

IMKit 主要任務是讓您的用戶或會員之間可以在您的網站(Web)內直接對談。(不需要跳離您的網站，轉去其他的通訊軟體溝通，例如 [Facebook Messenger](https://www.messenger.com) / [WhatsApp](https://www.whatsapp.com) / [LINE](https://line.me/))
我們稱這種在網站內直接讓用戶或會員之間對談的功能，叫做 **In-Web Chat**。

# 安裝方式

我們提供兩種方式來執行 API：

1. 在 Node 環境下呼叫。
2. 在客端網頁下執行。


## 在 Node 環境

### 安裝方式

```sh
$ npm install --save https://github.com/imkit/imkit-js-lib
```

### 使用方式

```javascript
import { IMKitApi, IMKitSocket } from 'imkit-js-api-v3';

let api = new IMKitApi(apiConfig);
let socket = new IMKitSocket(socketConfig);
```
### 執行範例

在使用 IMKit API 之前，會先需要取得你們服務內的 token，比方說你們的平台內會有一個 Web Server 專門會在使用者註冊或登入時，核發一個 token 回來。
這邊為了方便您快速使用 IMKit API，我們在 IMKit 平台上有建立一個 Demo Web Server，我們在下面提供一個 signin.html，請下載後用瀏覽器打開此檔案，即可連到 Demo Web Server 並在頁面上顯示取得的 token。

接下來即可將此 token 拿來當作呼叫 API 時的參數。


```javascript



```


## 在客端網頁

### 安裝方式 

在網頁中引入以下描述

```html
<script src="https://cdn.jsdelivr.net/gh/imkit/imkit-js-lib/lib/imkit-js-api-v3.web.js"></script>
```

```javascript
let api = new IMKitApi(apiConfig);
let socket = new IMKitSocket(socketConfig);
```

### 執行範例

```javascript



```


