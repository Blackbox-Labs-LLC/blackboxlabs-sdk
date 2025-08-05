# Macros
(*macros*)

## Overview

Reusable response templates, quick actions, and productivity tools

### Available Operations

* [list](#list)
* [create](#create)
* [getPopular](#getpopular)
* [render](#render)
* [get](#get)
* [update](#update)
* [delete](#delete)

## list

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_macros" method="get" path="/api/v0/organizations/{org_id}/macros" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.macros.list({
    orgId: "d951be70-ee36-4af6-9925-0882249b2f92",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { macrosList } from "blackbox/funcs/macrosList.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await macrosList(blackbox, {
    orgId: "d951be70-ee36-4af6-9925-0882249b2f92",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("macrosList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMacrosRequest](../../models/operations/listmacrosrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecMacroResponse](../../models/apiresponsevecmacroresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## create

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_macro" method="post" path="/api/v0/organizations/{org_id}/macros" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.macros.create({
    orgId: "5afbf042-8ef3-4dd1-8268-5b7cf47e4067",
    createMacroRequest: {
      content: "<value>",
      description: "why redesign finally outrageous excited segregate",
      name: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { macrosCreate } from "blackbox/funcs/macrosCreate.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await macrosCreate(blackbox, {
    orgId: "5afbf042-8ef3-4dd1-8268-5b7cf47e4067",
    createMacroRequest: {
      content: "<value>",
      description: "why redesign finally outrageous excited segregate",
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("macrosCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateMacroRequest](../../models/operations/createmacrorequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseMacroResponse](../../models/apiresponsemacroresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## getPopular

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_popular_macros" method="get" path="/api/v0/organizations/{org_id}/macros/popular" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.macros.getPopular({
    orgId: "3b519217-95b2-4199-b15b-63abcecb6cb9",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { macrosGetPopular } from "blackbox/funcs/macrosGetPopular.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await macrosGetPopular(blackbox, {
    orgId: "3b519217-95b2-4199-b15b-63abcecb6cb9",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("macrosGetPopular failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPopularMacrosRequest](../../models/operations/getpopularmacrosrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecMacroResponse](../../models/apiresponsevecmacroresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## render

### Example Usage

<!-- UsageSnippet language="typescript" operationID="render_macro_template" method="post" path="/api/v0/organizations/{org_id}/macros/render" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.macros.render({
    orgId: "672e8481-e174-418d-9c23-a28a7b2fa0ba",
    macroTemplateRequest: {
      macroId: "c1db7087-b8e8-48bc-a511-7bb191755ca0",
      variables: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { macrosRender } from "blackbox/funcs/macrosRender.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await macrosRender(blackbox, {
    orgId: "672e8481-e174-418d-9c23-a28a7b2fa0ba",
    macroTemplateRequest: {
      macroId: "c1db7087-b8e8-48bc-a511-7bb191755ca0",
      variables: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("macrosRender failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RenderMacroTemplateRequest](../../models/operations/rendermacrotemplaterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseMacroTemplateResponse](../../models/apiresponsemacrotemplateresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## get

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_macro" method="get" path="/api/v0/organizations/{org_id}/macros/{macro_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.macros.get({
    orgId: "adc41988-15d3-483e-9652-905a7a35785e",
    macroId: "63c10671-96d0-4d49-b720-2436668f5739",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { macrosGet } from "blackbox/funcs/macrosGet.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await macrosGet(blackbox, {
    orgId: "adc41988-15d3-483e-9652-905a7a35785e",
    macroId: "63c10671-96d0-4d49-b720-2436668f5739",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("macrosGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMacroRequest](../../models/operations/getmacrorequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseMacroResponse](../../models/apiresponsemacroresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## update

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_macro" method="put" path="/api/v0/organizations/{org_id}/macros/{macro_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.macros.update({
    orgId: "33b59510-35f2-4b87-bc94-f4151dee33d8",
    macroId: "71f36807-a98d-40fd-b987-39b797f043ee",
    updateMacroRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { macrosUpdate } from "blackbox/funcs/macrosUpdate.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await macrosUpdate(blackbox, {
    orgId: "33b59510-35f2-4b87-bc94-f4151dee33d8",
    macroId: "71f36807-a98d-40fd-b987-39b797f043ee",
    updateMacroRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("macrosUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateMacroRequest](../../models/operations/updatemacrorequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseMacroResponse](../../models/apiresponsemacroresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## delete

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_macro" method="delete" path="/api/v0/organizations/{org_id}/macros/{macro_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.macros.delete({
    orgId: "c43a73db-526f-423c-bfc4-a757540720eb",
    macroId: "4104291e-edef-4270-8149-0295904f18fb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { macrosDelete } from "blackbox/funcs/macrosDelete.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await macrosDelete(blackbox, {
    orgId: "c43a73db-526f-423c-bfc4-a757540720eb",
    macroId: "4104291e-edef-4270-8149-0295904f18fb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("macrosDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMacroRequest](../../models/operations/deletemacrorequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseString](../../models/apiresponsestring.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |