# ApiKeys
(*apiKeys*)

## Overview

### Available Operations

* [list](#list)
* [create](#create)
* [get](#get)
* [delete](#delete)
* [revoke](#revoke)

## list

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_api_keys" method="get" path="/api/v0/users/api-keys" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.apiKeys.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { apiKeysList } from "blackbox/funcs/apiKeysList.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await apiKeysList(blackbox);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiKeysList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiKeysRequest](../../models/operations/listapikeysrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecApiKeyResponse](../../models/apiresponsevecapikeyresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## create

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_api_key" method="post" path="/api/v0/users/api-keys" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.apiKeys.create({
    name: "<value>",
    scopes: [
      "<value 1>",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { apiKeysCreate } from "blackbox/funcs/apiKeysCreate.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await apiKeysCreate(blackbox, {
    name: "<value>",
    scopes: [
      "<value 1>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiKeysCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateApiKeyRequest](../../models/createapikeyrequest.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseCreateApiKeyResponse](../../models/apiresponsecreateapikeyresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## get

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_api_key" method="get" path="/api/v0/users/api-keys/{key_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.apiKeys.get({
    keyId: "66760d63-bc4c-4eba-9f66-728d076e4afd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { apiKeysGet } from "blackbox/funcs/apiKeysGet.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await apiKeysGet(blackbox, {
    keyId: "66760d63-bc4c-4eba-9f66-728d076e4afd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiKeysGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiKeyRequest](../../models/operations/getapikeyrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseApiKeyResponse](../../models/apiresponseapikeyresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## delete

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_api_key" method="delete" path="/api/v0/users/api-keys/{key_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.apiKeys.delete({
    keyId: "d30aa790-7049-4dd6-9089-24cd5bc5bd07",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { apiKeysDelete } from "blackbox/funcs/apiKeysDelete.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await apiKeysDelete(blackbox, {
    keyId: "d30aa790-7049-4dd6-9089-24cd5bc5bd07",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiKeysDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiKeyRequest](../../models/operations/deleteapikeyrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseString](../../models/apiresponsestring.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## revoke

### Example Usage

<!-- UsageSnippet language="typescript" operationID="revoke_api_key" method="post" path="/api/v0/users/api-keys/{key_id}/revoke" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.apiKeys.revoke({
    keyId: "70d05b12-db01-4e93-afb7-c26ecf254345",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { apiKeysRevoke } from "blackbox/funcs/apiKeysRevoke.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await apiKeysRevoke(blackbox, {
    keyId: "70d05b12-db01-4e93-afb7-c26ecf254345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiKeysRevoke failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RevokeApiKeyRequest](../../models/operations/revokeapikeyrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseString](../../models/apiresponsestring.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |