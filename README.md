# Imkit Js Api v3

描述描述

## Installing

### NodeJs

```sh
$ npm install --save https://github.com/imkit/imkit-js-lib
```

### Bower

```sh
$ bower install https://github.com/imkit/imkit-js-lib
```

## Use

### NodeJs

```javascript
import { IMKitApi, IMKitSocket } from 'imkit-js-api-v3';

let api = new IMKitApi(apiConfig);
let socket = new IMKitSocket(socketConfig);
```

### Bower

```html
<script src="bower_components/imkit-js-api-v3/lib/imkit-js-api-v3.js"></script>
or
<script src="bower_components/imkit-js-api-v3/lib/imkit-js-api-v3.min.js"></script>
```

```javascript
let api = new IMKitApi(apiConfig);
let socket = new IMKitSocket(socketConfig);
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/gh/imkit/imkit-js-lib/lib/imkit-js-api-v3.min.js"></script>
```

```javascript
let api = new IMKitApi(apiConfig);
let socket = new IMKitSocket(socketConfig);
```
