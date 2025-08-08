# Organizations
(*organizations*)

## Overview

Multi-tenant organization management, member invitations, and settings

### Available Operations

* [getAllForUser](#getallforuser)
* [create](#create)
* [findOrganizationsByEmailDomain](#findorganizationsbyemaildomain)
* [joinOrganization](#joinorganization)
* [get](#get)
* [acceptInvitation](#acceptinvitation)
* [inviteUser](#inviteuser)
* [getMembers](#getmembers)
* [updateMembership](#updatemembership)
* [removeMember](#removemember)
* [getEffectivePermissions](#geteffectivepermissions)
* [listRoles](#listroles)
* [createRole](#createrole)
* [getRole](#getrole)
* [updateRole](#updaterole)
* [deleteRole](#deleterole)
* [assignRole](#assignrole)
* [revokeRole](#revokerole)
* [getSettings](#getsettings)
* [setSetting](#setsetting)
* [getSetting](#getsetting)
* [deleteSetting](#deletesetting)
* [getPermissionsCatalog](#getpermissionscatalog)

## getAllForUser

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_user_organizations" method="get" path="/api/v0/organizations" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.getAllForUser();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsGetAllForUser } from "blackboxlabs-sdk/funcs/organizationsGetAllForUser.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsGetAllForUser(blackbox);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGetAllForUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecOrganizationResponse](../../models/apiresponsevecorganizationresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## create

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_organization" method="post" path="/api/v0/organizations" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.create({
    domain: "hard-to-find-brace.com",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsCreate } from "blackboxlabs-sdk/funcs/organizationsCreate.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsCreate(blackbox, {
    domain: "hard-to-find-brace.com",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateOrganizationRequest](../../models/createorganizationrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseOrganizationResponse](../../models/apiresponseorganizationresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## findOrganizationsByEmailDomain

### Example Usage

<!-- UsageSnippet language="typescript" operationID="find_organizations_by_email_domain" method="get" path="/api/v0/organizations/by-domain" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.findOrganizationsByEmailDomain({
    email: "Corine19@yahoo.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsFindOrganizationsByEmailDomain } from "blackboxlabs-sdk/funcs/organizationsFindOrganizationsByEmailDomain.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsFindOrganizationsByEmailDomain(blackbox, {
    email: "Corine19@yahoo.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsFindOrganizationsByEmailDomain failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FindOrganizationsByEmailDomainRequest](../../models/operations/findorganizationsbyemaildomainrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecOrganizationByDomainResponse](../../models/apiresponsevecorganizationbydomainresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## joinOrganization

### Example Usage

<!-- UsageSnippet language="typescript" operationID="join_organization" method="post" path="/api/v0/organizations/join" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.joinOrganization({
    orgId: "e4d724fe-54bd-460a-ae9e-0a46cae348e1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsJoinOrganization } from "blackboxlabs-sdk/funcs/organizationsJoinOrganization.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsJoinOrganization(blackbox, {
    orgId: "e4d724fe-54bd-460a-ae9e-0a46cae348e1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsJoinOrganization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.JoinOrganizationRequest](../../models/joinorganizationrequest.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseString](../../models/apiresponsestring.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## get

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_organization" method="get" path="/api/v0/organizations/{org_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.get({
    orgId: "4a5f0d0a-2722-49f4-bfb8-03ade14ee505",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsGet } from "blackboxlabs-sdk/funcs/organizationsGet.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsGet(blackbox, {
    orgId: "4a5f0d0a-2722-49f4-bfb8-03ade14ee505",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationRequest](../../models/operations/getorganizationrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseOrganizationResponse](../../models/apiresponseorganizationresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## acceptInvitation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="accept_invitation" method="post" path="/api/v0/organizations/{org_id}/accept-invitation" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.acceptInvitation({
    orgId: "85544615-3097-4631-863a-19163b76201c",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsAcceptInvitation } from "blackboxlabs-sdk/funcs/organizationsAcceptInvitation.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsAcceptInvitation(blackbox, {
    orgId: "85544615-3097-4631-863a-19163b76201c",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsAcceptInvitation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AcceptInvitationRequest](../../models/operations/acceptinvitationrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseString](../../models/apiresponsestring.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## inviteUser

### Example Usage

<!-- UsageSnippet language="typescript" operationID="invite_user" method="post" path="/api/v0/organizations/{org_id}/invite" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.inviteUser({
    orgId: "e9af35d6-0d79-4d37-b1bb-3a94536e482b",
    inviteUserRequest: {
      email: "Stacy_Beahan49@yahoo.com",
      role: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsInviteUser } from "blackboxlabs-sdk/funcs/organizationsInviteUser.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsInviteUser(blackbox, {
    orgId: "e9af35d6-0d79-4d37-b1bb-3a94536e482b",
    inviteUserRequest: {
      email: "Stacy_Beahan49@yahoo.com",
      role: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsInviteUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.InviteUserRequest](../../models/operations/inviteuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseString](../../models/apiresponsestring.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## getMembers

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_members" method="get" path="/api/v0/organizations/{org_id}/members" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.getMembers({
    orgId: "a338f8a1-afd9-4f57-849f-c76fecdff9de",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsGetMembers } from "blackboxlabs-sdk/funcs/organizationsGetMembers.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsGetMembers(blackbox, {
    orgId: "a338f8a1-afd9-4f57-849f-c76fecdff9de",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGetMembers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMembersRequest](../../models/operations/getmembersrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecMembershipResponse](../../models/apiresponsevecmembershipresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateMembership

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_membership" method="put" path="/api/v0/organizations/{org_id}/members/{member_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.updateMembership({
    orgId: "d3b149c3-d413-4cba-8d2d-01cba1dee9f5",
    memberId: "e6a6b8a3-d8f1-4e1a-9166-49f5051e8a56",
    updateMembershipRequest: {
      role: "<value>",
      status: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsUpdateMembership } from "blackboxlabs-sdk/funcs/organizationsUpdateMembership.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsUpdateMembership(blackbox, {
    orgId: "d3b149c3-d413-4cba-8d2d-01cba1dee9f5",
    memberId: "e6a6b8a3-d8f1-4e1a-9166-49f5051e8a56",
    updateMembershipRequest: {
      role: "<value>",
      status: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsUpdateMembership failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateMembershipRequest](../../models/operations/updatemembershiprequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseString](../../models/apiresponsestring.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## removeMember

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_member" method="delete" path="/api/v0/organizations/{org_id}/members/{member_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.removeMember({
    orgId: "501a2871-b19e-4a1a-8116-fb5a410340a0",
    memberId: "16b8860a-fd24-4b81-b812-dcc7ed4098d5",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsRemoveMember } from "blackboxlabs-sdk/funcs/organizationsRemoveMember.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsRemoveMember(blackbox, {
    orgId: "501a2871-b19e-4a1a-8116-fb5a410340a0",
    memberId: "16b8860a-fd24-4b81-b812-dcc7ed4098d5",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsRemoveMember failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveMemberRequest](../../models/operations/removememberrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseString](../../models/apiresponsestring.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## getEffectivePermissions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_effective_permissions" method="get" path="/api/v0/organizations/{org_id}/permissions/effective" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.getEffectivePermissions({
    orgId: "418e7107-8fb5-4f9f-84c2-5c71bdaf2a12",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsGetEffectivePermissions } from "blackboxlabs-sdk/funcs/organizationsGetEffectivePermissions.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsGetEffectivePermissions(blackbox, {
    orgId: "418e7107-8fb5-4f9f-84c2-5c71bdaf2a12",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGetEffectivePermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEffectivePermissionsRequest](../../models/operations/geteffectivepermissionsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseEffectivePermissionsResponse](../../models/apiresponseeffectivepermissionsresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## listRoles

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_roles" method="get" path="/api/v0/organizations/{org_id}/roles" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.listRoles({
    orgId: "0a65906a-4e00-4e16-8aa0-3821f1253e55",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsListRoles } from "blackboxlabs-sdk/funcs/organizationsListRoles.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsListRoles(blackbox, {
    orgId: "0a65906a-4e00-4e16-8aa0-3821f1253e55",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsListRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRolesRequest](../../models/operations/listrolesrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecRoleResponse](../../models/apiresponsevecroleresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## createRole

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_role" method="post" path="/api/v0/organizations/{org_id}/roles" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.createRole({
    orgId: "7963d8f7-369d-43dc-8ae7-ed140414638f",
    createRoleRequest: {
      name: "<value>",
      permissions: 14710,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsCreateRole } from "blackboxlabs-sdk/funcs/organizationsCreateRole.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsCreateRole(blackbox, {
    orgId: "7963d8f7-369d-43dc-8ae7-ed140414638f",
    createRoleRequest: {
      name: "<value>",
      permissions: 14710,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsCreateRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRoleRequest](../../models/operations/createrolerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseRoleResponse](../../models/apiresponseroleresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## getRole

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_role" method="get" path="/api/v0/organizations/{org_id}/roles/{role_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.getRole({
    orgId: "dc2a3959-50ac-4611-ae78-d04d1203f676",
    roleId: "6cc27dd7-f5d7-4ed0-b4c3-c50505482eca",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsGetRole } from "blackboxlabs-sdk/funcs/organizationsGetRole.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsGetRole(blackbox, {
    orgId: "dc2a3959-50ac-4611-ae78-d04d1203f676",
    roleId: "6cc27dd7-f5d7-4ed0-b4c3-c50505482eca",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGetRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRoleRequest](../../models/operations/getrolerequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseRoleResponse](../../models/apiresponseroleresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateRole

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_role" method="put" path="/api/v0/organizations/{org_id}/roles/{role_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.updateRole({
    orgId: "6a722352-3cc6-42f1-9655-8ae17030f441",
    roleId: "986b5f5c-bba3-4b08-9ba5-a3a6bd401f04",
    updateRoleRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsUpdateRole } from "blackboxlabs-sdk/funcs/organizationsUpdateRole.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsUpdateRole(blackbox, {
    orgId: "6a722352-3cc6-42f1-9655-8ae17030f441",
    roleId: "986b5f5c-bba3-4b08-9ba5-a3a6bd401f04",
    updateRoleRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsUpdateRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRoleRequest](../../models/operations/updaterolerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseRoleResponse](../../models/apiresponseroleresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteRole

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_role" method="delete" path="/api/v0/organizations/{org_id}/roles/{role_id}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  await blackbox.organizations.deleteRole({
    orgId: "357dd0af-2faf-4258-804a-e559464754de",
    roleId: "640e7e34-c5f2-40c0-a6db-51e1b3c63f9e",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsDeleteRole } from "blackboxlabs-sdk/funcs/organizationsDeleteRole.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsDeleteRole(blackbox, {
    orgId: "357dd0af-2faf-4258-804a-e559464754de",
    roleId: "640e7e34-c5f2-40c0-a6db-51e1b3c63f9e",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("organizationsDeleteRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteRoleRequest](../../models/operations/deleterolerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## assignRole

### Example Usage

<!-- UsageSnippet language="typescript" operationID="assign_role" method="post" path="/api/v0/organizations/{org_id}/roles/{role_id}/assign" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.assignRole({
    orgId: "a7a8a6a1-9c63-4398-958a-50e248304ba0",
    roleId: "3234dc24-0ef6-4718-8e74-e6b0131a61a1",
    assignRoleRequest: {
      userId: "7339dd48-79e1-47a2-a271-6d3ffcb9966e",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsAssignRole } from "blackboxlabs-sdk/funcs/organizationsAssignRole.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsAssignRole(blackbox, {
    orgId: "a7a8a6a1-9c63-4398-958a-50e248304ba0",
    roleId: "3234dc24-0ef6-4718-8e74-e6b0131a61a1",
    assignRoleRequest: {
      userId: "7339dd48-79e1-47a2-a271-6d3ffcb9966e",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsAssignRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AssignRoleRequest](../../models/operations/assignrolerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseString](../../models/apiresponsestring.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## revokeRole

### Example Usage

<!-- UsageSnippet language="typescript" operationID="revoke_role" method="post" path="/api/v0/organizations/{org_id}/roles/{role_id}/revoke" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.revokeRole({
    orgId: "0b5af395-5a62-4fda-be3f-10080fcbd43e",
    roleId: "faac4588-aa6b-4c49-a785-eb9f4627ca89",
    assignRoleRequest: {
      userId: "ccd7f66a-4bbb-42ce-bf3b-a6cf819d3d0d",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsRevokeRole } from "blackboxlabs-sdk/funcs/organizationsRevokeRole.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsRevokeRole(blackbox, {
    orgId: "0b5af395-5a62-4fda-be3f-10080fcbd43e",
    roleId: "faac4588-aa6b-4c49-a785-eb9f4627ca89",
    assignRoleRequest: {
      userId: "ccd7f66a-4bbb-42ce-bf3b-a6cf819d3d0d",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsRevokeRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RevokeRoleRequest](../../models/operations/revokerolerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseString](../../models/apiresponsestring.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## getSettings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_all_organization_settings" method="get" path="/api/v0/organizations/{org_id}/settings" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.getSettings({
    orgId: "b40e719e-e92c-4aaf-92c8-bd159288bb3d",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsGetSettings } from "blackboxlabs-sdk/funcs/organizationsGetSettings.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsGetSettings(blackbox, {
    orgId: "b40e719e-e92c-4aaf-92c8-bd159288bb3d",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGetSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllOrganizationSettingsRequest](../../models/operations/getallorganizationsettingsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecOrganizationSettingResponse](../../models/apiresponsevecorganizationsettingresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## setSetting

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_organization_setting" method="post" path="/api/v0/organizations/{org_id}/settings" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.setSetting({
    orgId: "f0df1f27-29ee-4f1a-9dda-025b4406ccf5",
    setOrganizationSettingRequest: {
      key: "<key>",
      value: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsSetSetting } from "blackboxlabs-sdk/funcs/organizationsSetSetting.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsSetSetting(blackbox, {
    orgId: "f0df1f27-29ee-4f1a-9dda-025b4406ccf5",
    setOrganizationSettingRequest: {
      key: "<key>",
      value: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsSetSetting failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetOrganizationSettingRequest](../../models/operations/setorganizationsettingrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseOrganizationSettingResponse](../../models/apiresponseorganizationsettingresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## getSetting

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_organization_setting" method="get" path="/api/v0/organizations/{org_id}/settings/{key}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.getSetting({
    orgId: "18877b37-a04b-47af-b43e-6542a4890f25",
    key: "<key>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsGetSetting } from "blackboxlabs-sdk/funcs/organizationsGetSetting.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsGetSetting(blackbox, {
    orgId: "18877b37-a04b-47af-b43e-6542a4890f25",
    key: "<key>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGetSetting failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationSettingRequest](../../models/operations/getorganizationsettingrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseOptionOrganizationSettingResponse](../../models/apiresponseoptionorganizationsettingresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteSetting

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_organization_setting" method="delete" path="/api/v0/organizations/{org_id}/settings/{key}" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  await blackbox.organizations.deleteSetting({
    orgId: "00dc388b-7546-40f7-9504-e77239333dda",
    key: "<key>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsDeleteSetting } from "blackboxlabs-sdk/funcs/organizationsDeleteSetting.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsDeleteSetting(blackbox, {
    orgId: "00dc388b-7546-40f7-9504-e77239333dda",
    key: "<key>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("organizationsDeleteSetting failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOrganizationSettingRequest](../../models/operations/deleteorganizationsettingrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |

## getPermissionsCatalog

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_permissions_catalog" method="get" path="/api/v0/permissions/catalog" -->
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.organizations.getPermissionsCatalog();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { BlackboxCore } from "blackboxlabs-sdk/core.js";
import { organizationsGetPermissionsCatalog } from "blackboxlabs-sdk/funcs/organizationsGetPermissionsCatalog.js";

// Use `BlackboxCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const blackbox = new BlackboxCore({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const res = await organizationsGetPermissionsCatalog(blackbox);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("organizationsGetPermissionsCatalog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ApiResponseVecPermissionCatalogEntry](../../models/apiresponsevecpermissioncatalogentry.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BlackboxDefaultError | 4XX, 5XX                    | \*/\*                       |