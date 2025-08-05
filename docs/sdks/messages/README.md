# Messages
(*messages*)

## Overview

Ticket communication, threaded conversations, and message history

### Available Operations

* [get](#get)
* [delete](#delete)
* [list](#list)
* [create](#create)
* [count](#count)
* [getLatest](#getlatest)
* [search](#search)

## get

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_message" method="get" path="/api/v0/organizations/{org_id}/messages/{message_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.messages.get({
    orgId: "555212e0-54c9-4fbb-a756-9c23d7cf1974",
    messageId: "f7dfbb86-a872-4d89-a685-7062f06e4401",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { messagesGet } from "blackbox/funcs/messagesGet.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await messagesGet(blackbox, {
    orgId: "555212e0-54c9-4fbb-a756-9c23d7cf1974",
    messageId: "f7dfbb86-a872-4d89-a685-7062f06e4401",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMessageRequest](../../models/operations/getmessagerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseMessageResponse](../../models/apiresponsemessageresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## delete

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_message" method="delete" path="/api/v0/organizations/{org_id}/messages/{message_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  await blackbox.messages.delete({
    orgId: "c8e03fdc-7431-430e-8a72-8a7bfcd1358d",
    messageId: "53486180-d80c-446e-bb3e-913341110f1e",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { messagesDelete } from "blackbox/funcs/messagesDelete.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await messagesDelete(blackbox, {
    orgId: "c8e03fdc-7431-430e-8a72-8a7bfcd1358d",
    messageId: "53486180-d80c-446e-bb3e-913341110f1e",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("messagesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMessageRequest](../../models/operations/deletemessagerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## list

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_ticket_messages" method="get" path="/api/v0/organizations/{org_id}/tickets/{ticket_id}/messages" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.messages.list({
    orgId: "12d2f739-a6f4-4308-85ac-384032c2343b",
    ticketId: "2319475e-0056-4605-9ecb-b1c2a639f707",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { messagesList } from "blackbox/funcs/messagesList.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await messagesList(blackbox, {
    orgId: "12d2f739-a6f4-4308-85ac-384032c2343b",
    ticketId: "2319475e-0056-4605-9ecb-b1c2a639f707",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTicketMessagesRequest](../../models/operations/listticketmessagesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecMessageResponse](../../models/apiresponsevecmessageresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## create

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_message" method="post" path="/api/v0/organizations/{org_id}/tickets/{ticket_id}/messages" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.messages.create({
    orgId: "4bbce17a-130f-46a5-99bc-529cfd1a0644",
    ticketId: "1abf258a-6636-4940-ab90-7f598910a6c6",
    createMessageRequest: {
      channel: "<value>",
      content: "<value>",
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
import { messagesCreate } from "blackbox/funcs/messagesCreate.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await messagesCreate(blackbox, {
    orgId: "4bbce17a-130f-46a5-99bc-529cfd1a0644",
    ticketId: "1abf258a-6636-4940-ab90-7f598910a6c6",
    createMessageRequest: {
      channel: "<value>",
      content: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateMessageRequest](../../models/operations/createmessagerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseMessageResponse](../../models/apiresponsemessageresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## count

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_message_count" method="get" path="/api/v0/organizations/{org_id}/tickets/{ticket_id}/messages/count" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.messages.count({
    orgId: "855bcc8c-a9d9-40c4-9aaa-33ee9a281feb",
    ticketId: "940aa8c7-3bef-4c1c-859c-791070c0d385",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { messagesCount } from "blackbox/funcs/messagesCount.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await messagesCount(blackbox, {
    orgId: "855bcc8c-a9d9-40c4-9aaa-33ee9a281feb",
    ticketId: "940aa8c7-3bef-4c1c-859c-791070c0d385",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCount failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMessageCountRequest](../../models/operations/getmessagecountrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseU64](../../models/apiresponseu64.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## getLatest

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_latest_message" method="get" path="/api/v0/organizations/{org_id}/tickets/{ticket_id}/messages/latest" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.messages.getLatest({
    orgId: "4fede711-fd33-479a-9c43-99bdc3dc4253",
    ticketId: "cb9b9e39-774c-4365-bda4-3769ddfc5048",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { messagesGetLatest } from "blackbox/funcs/messagesGetLatest.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await messagesGetLatest(blackbox, {
    orgId: "4fede711-fd33-479a-9c43-99bdc3dc4253",
    ticketId: "cb9b9e39-774c-4365-bda4-3769ddfc5048",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesGetLatest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLatestMessageRequest](../../models/operations/getlatestmessagerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseOptionMessageResponse](../../models/apiresponseoptionmessageresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## search

### Example Usage

<!-- UsageSnippet language="typescript" operationID="search_messages" method="get" path="/api/v0/organizations/{org_id}/tickets/{ticket_id}/messages/search" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.messages.search({
    orgId: "12b5c905-8ba5-4205-bdfd-7232de9ca2a8",
    ticketId: "c1d87dc5-a425-4868-8949-c84fe1771075",
    q: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackbox/core.js";
import { messagesSearch } from "blackbox/funcs/messagesSearch.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await messagesSearch(blackbox, {
    orgId: "12b5c905-8ba5-4205-bdfd-7232de9ca2a8",
    ticketId: "c1d87dc5-a425-4868-8949-c84fe1771075",
    q: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchMessagesRequest](../../models/operations/searchmessagesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecMessageResponse](../../models/apiresponsevecmessageresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |