# blackbox

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *blackbox* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=blackbox&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />

<!-- Start Summary [summary] -->
## Summary

Blackbox Customer Support API: Enterprise-grade customer support and ticketing system with advanced analytics, automation, and integrations. Built for modern teams who need powerful, scalable support infrastructure.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [blackbox](#blackbox)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add blackboxlabs-sdk
```

### PNPM

```bash
pnpm add blackboxlabs-sdk
```

### Bun

```bash
bun add blackboxlabs-sdk
```

### Yarn

```bash
yarn add blackboxlabs-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.attachments.getStats();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                | Type   | Scheme  | Environment Variable           |
| ------------------- | ------ | ------- | ------------------------------ |
| `blackboxAuthToken` | apiKey | API key | `BLACKBOX_BLACKBOX_AUTH_TOKEN` |

To authenticate with the API the `blackboxAuthToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.attachments.getStats();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [analytics](docs/sdks/analytics/README.md)

* [get](docs/sdks/analytics/README.md#get)
* [getAgents](docs/sdks/analytics/README.md#getagents)
* [getKnowledgeBase](docs/sdks/analytics/README.md#getknowledgebase)
* [getMacros](docs/sdks/analytics/README.md#getmacros)
* [getSystem](docs/sdks/analytics/README.md#getsystem)
* [getTickets](docs/sdks/analytics/README.md#gettickets)
* [getTrends](docs/sdks/analytics/README.md#gettrends)

### [apiKeys](docs/sdks/apikeys/README.md)

* [list](docs/sdks/apikeys/README.md#list)
* [create](docs/sdks/apikeys/README.md#create)
* [get](docs/sdks/apikeys/README.md#get)
* [delete](docs/sdks/apikeys/README.md#delete)
* [revoke](docs/sdks/apikeys/README.md#revoke)

### [attachments](docs/sdks/attachments/README.md)

* [getStats](docs/sdks/attachments/README.md#getstats)
* [download](docs/sdks/attachments/README.md#download)
* [list](docs/sdks/attachments/README.md#list)
* [upload](docs/sdks/attachments/README.md#upload)
* [delete](docs/sdks/attachments/README.md#delete)

### [authentication](docs/sdks/authentication/README.md)

* [disable2fa](docs/sdks/authentication/README.md#disable2fa)
* [enable2fa](docs/sdks/authentication/README.md#enable2fa)
* [login](docs/sdks/authentication/README.md#login)
* [logout](docs/sdks/authentication/README.md#logout)
* [register](docs/sdks/authentication/README.md#register)
* [requestPasswordReset](docs/sdks/authentication/README.md#requestpasswordreset)
* [resendVerification](docs/sdks/authentication/README.md#resendverification)
* [resetPassword](docs/sdks/authentication/README.md#resetpassword)
* [setup2fa](docs/sdks/authentication/README.md#setup2fa)
* [verifyEmail](docs/sdks/authentication/README.md#verifyemail)

### [automation](docs/sdks/automation/README.md)

* [execute](docs/sdks/automation/README.md#execute)
* [list](docs/sdks/automation/README.md#list)
* [create](docs/sdks/automation/README.md#create)
* [get](docs/sdks/automation/README.md#get)
* [update](docs/sdks/automation/README.md#update)
* [deleteRule](docs/sdks/automation/README.md#deleterule)
* [getStats](docs/sdks/automation/README.md#getstats)


### [csatSurveys](docs/sdks/csatsurveys/README.md)

* [list](docs/sdks/csatsurveys/README.md#list)
* [submit](docs/sdks/csatsurveys/README.md#submit)
* [getAnalytics](docs/sdks/csatsurveys/README.md#getanalytics)
* [export](docs/sdks/csatsurveys/README.md#export)
* [get](docs/sdks/csatsurveys/README.md#get)
* [update](docs/sdks/csatsurveys/README.md#update)
* [delete](docs/sdks/csatsurveys/README.md#delete)

### [eventLogs](docs/sdks/eventlogs/README.md)

* [list](docs/sdks/eventlogs/README.md#list)
* [create](docs/sdks/eventlogs/README.md#create)
* [export](docs/sdks/eventlogs/README.md#export)
* [getStats](docs/sdks/eventlogs/README.md#getstats)
* [get](docs/sdks/eventlogs/README.md#get)

### [knowledgeBase](docs/sdks/knowledgebase/README.md)

* [listArticles](docs/sdks/knowledgebase/README.md#listarticles)
* [createArticle](docs/sdks/knowledgebase/README.md#createarticle)
* [getArticle](docs/sdks/knowledgebase/README.md#getarticle)
* [updateArticle](docs/sdks/knowledgebase/README.md#updatearticle)
* [deleteArticle](docs/sdks/knowledgebase/README.md#deletearticle)
* [getPublicArticles](docs/sdks/knowledgebase/README.md#getpublicarticles)
* [searchPublicArticles](docs/sdks/knowledgebase/README.md#searchpublicarticles)

### [macros](docs/sdks/macros/README.md)

* [list](docs/sdks/macros/README.md#list)
* [create](docs/sdks/macros/README.md#create)
* [getPopular](docs/sdks/macros/README.md#getpopular)
* [render](docs/sdks/macros/README.md#render)
* [get](docs/sdks/macros/README.md#get)
* [update](docs/sdks/macros/README.md#update)
* [delete](docs/sdks/macros/README.md#delete)

### [messages](docs/sdks/messages/README.md)

* [get](docs/sdks/messages/README.md#get)
* [delete](docs/sdks/messages/README.md#delete)
* [list](docs/sdks/messages/README.md#list)
* [create](docs/sdks/messages/README.md#create)
* [count](docs/sdks/messages/README.md#count)
* [getLatest](docs/sdks/messages/README.md#getlatest)
* [search](docs/sdks/messages/README.md#search)

### [organizations](docs/sdks/organizations/README.md)

* [getAllForUser](docs/sdks/organizations/README.md#getallforuser)
* [create](docs/sdks/organizations/README.md#create)
* [get](docs/sdks/organizations/README.md#get)
* [acceptInvitation](docs/sdks/organizations/README.md#acceptinvitation)
* [inviteUser](docs/sdks/organizations/README.md#inviteuser)
* [getMembers](docs/sdks/organizations/README.md#getmembers)
* [updateMembership](docs/sdks/organizations/README.md#updatemembership)
* [removeMember](docs/sdks/organizations/README.md#removemember)
* [getSettings](docs/sdks/organizations/README.md#getsettings)
* [setSetting](docs/sdks/organizations/README.md#setsetting)
* [getSetting](docs/sdks/organizations/README.md#getsetting)
* [deleteSetting](docs/sdks/organizations/README.md#deletesetting)

### [tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list)
* [create](docs/sdks/tags/README.md#create)
* [getPopular](docs/sdks/tags/README.md#getpopular)
* [get](docs/sdks/tags/README.md#get)
* [update](docs/sdks/tags/README.md#update)
* [delete](docs/sdks/tags/README.md#delete)
* [getWithTickets](docs/sdks/tags/README.md#getwithtickets)

### [tickets](docs/sdks/tickets/README.md)

* [list](docs/sdks/tickets/README.md#list) - List tickets with filtering
* [create](docs/sdks/tickets/README.md#create) - Create a new support ticket
* [get](docs/sdks/tickets/README.md#get) - Get ticket details
* [update](docs/sdks/tickets/README.md#update)
* [delete](docs/sdks/tickets/README.md#delete)
* [addTags](docs/sdks/tickets/README.md#addtags)
* [removeTags](docs/sdks/tickets/README.md#removetags)

### [users](docs/sdks/users/README.md)

* [deleteAccount](docs/sdks/users/README.md#deleteaccount)
* [getLoginAttempts](docs/sdks/users/README.md#getloginattempts)
* [getLoginHistory](docs/sdks/users/README.md#getloginhistory)
* [changePassword](docs/sdks/users/README.md#changepassword)
* [getProfile](docs/sdks/users/README.md#getprofile)
* [updateProfile](docs/sdks/users/README.md#updateprofile)

### [webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list)
* [create](docs/sdks/webhooks/README.md#create)
* [listEvents](docs/sdks/webhooks/README.md#listevents)
* [send](docs/sdks/webhooks/README.md#send)
* [getStats](docs/sdks/webhooks/README.md#getstats)
* [get](docs/sdks/webhooks/README.md#get)
* [update](docs/sdks/webhooks/README.md#update)
* [delete](docs/sdks/webhooks/README.md#delete)
* [test](docs/sdks/webhooks/README.md#test)

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`analyticsGet`](docs/sdks/analytics/README.md#get)
- [`analyticsGetAgents`](docs/sdks/analytics/README.md#getagents)
- [`analyticsGetKnowledgeBase`](docs/sdks/analytics/README.md#getknowledgebase)
- [`analyticsGetMacros`](docs/sdks/analytics/README.md#getmacros)
- [`analyticsGetSystem`](docs/sdks/analytics/README.md#getsystem)
- [`analyticsGetTickets`](docs/sdks/analytics/README.md#gettickets)
- [`analyticsGetTrends`](docs/sdks/analytics/README.md#gettrends)
- [`apiKeysCreate`](docs/sdks/apikeys/README.md#create)
- [`apiKeysDelete`](docs/sdks/apikeys/README.md#delete)
- [`apiKeysGet`](docs/sdks/apikeys/README.md#get)
- [`apiKeysList`](docs/sdks/apikeys/README.md#list)
- [`apiKeysRevoke`](docs/sdks/apikeys/README.md#revoke)
- [`attachmentsDelete`](docs/sdks/attachments/README.md#delete)
- [`attachmentsDownload`](docs/sdks/attachments/README.md#download)
- [`attachmentsGetStats`](docs/sdks/attachments/README.md#getstats)
- [`attachmentsList`](docs/sdks/attachments/README.md#list)
- [`attachmentsUpload`](docs/sdks/attachments/README.md#upload)
- [`authenticationDisable2fa`](docs/sdks/authentication/README.md#disable2fa)
- [`authenticationEnable2fa`](docs/sdks/authentication/README.md#enable2fa)
- [`authenticationLogin`](docs/sdks/authentication/README.md#login)
- [`authenticationLogout`](docs/sdks/authentication/README.md#logout)
- [`authenticationRegister`](docs/sdks/authentication/README.md#register)
- [`authenticationRequestPasswordReset`](docs/sdks/authentication/README.md#requestpasswordreset)
- [`authenticationResendVerification`](docs/sdks/authentication/README.md#resendverification)
- [`authenticationResetPassword`](docs/sdks/authentication/README.md#resetpassword)
- [`authenticationSetup2fa`](docs/sdks/authentication/README.md#setup2fa)
- [`authenticationVerifyEmail`](docs/sdks/authentication/README.md#verifyemail)
- [`automationCreate`](docs/sdks/automation/README.md#create)
- [`automationDeleteRule`](docs/sdks/automation/README.md#deleterule)
- [`automationExecute`](docs/sdks/automation/README.md#execute)
- [`automationGet`](docs/sdks/automation/README.md#get)
- [`automationGetStats`](docs/sdks/automation/README.md#getstats)
- [`automationList`](docs/sdks/automation/README.md#list)
- [`automationUpdate`](docs/sdks/automation/README.md#update)
- [`csatSurveysDelete`](docs/sdks/csatsurveys/README.md#delete)
- [`csatSurveysExport`](docs/sdks/csatsurveys/README.md#export)
- [`csatSurveysGet`](docs/sdks/csatsurveys/README.md#get)
- [`csatSurveysGetAnalytics`](docs/sdks/csatsurveys/README.md#getanalytics)
- [`csatSurveysList`](docs/sdks/csatsurveys/README.md#list)
- [`csatSurveysSubmit`](docs/sdks/csatsurveys/README.md#submit)
- [`csatSurveysUpdate`](docs/sdks/csatsurveys/README.md#update)
- [`eventLogsCreate`](docs/sdks/eventlogs/README.md#create)
- [`eventLogsExport`](docs/sdks/eventlogs/README.md#export)
- [`eventLogsGet`](docs/sdks/eventlogs/README.md#get)
- [`eventLogsGetStats`](docs/sdks/eventlogs/README.md#getstats)
- [`eventLogsList`](docs/sdks/eventlogs/README.md#list)
- [`knowledgeBaseCreateArticle`](docs/sdks/knowledgebase/README.md#createarticle)
- [`knowledgeBaseDeleteArticle`](docs/sdks/knowledgebase/README.md#deletearticle)
- [`knowledgeBaseGetArticle`](docs/sdks/knowledgebase/README.md#getarticle)
- [`knowledgeBaseGetPublicArticles`](docs/sdks/knowledgebase/README.md#getpublicarticles)
- [`knowledgeBaseListArticles`](docs/sdks/knowledgebase/README.md#listarticles)
- [`knowledgeBaseSearchPublicArticles`](docs/sdks/knowledgebase/README.md#searchpublicarticles)
- [`knowledgeBaseUpdateArticle`](docs/sdks/knowledgebase/README.md#updatearticle)
- [`macrosCreate`](docs/sdks/macros/README.md#create)
- [`macrosDelete`](docs/sdks/macros/README.md#delete)
- [`macrosGet`](docs/sdks/macros/README.md#get)
- [`macrosGetPopular`](docs/sdks/macros/README.md#getpopular)
- [`macrosList`](docs/sdks/macros/README.md#list)
- [`macrosRender`](docs/sdks/macros/README.md#render)
- [`macrosUpdate`](docs/sdks/macros/README.md#update)
- [`messagesCount`](docs/sdks/messages/README.md#count)
- [`messagesCreate`](docs/sdks/messages/README.md#create)
- [`messagesDelete`](docs/sdks/messages/README.md#delete)
- [`messagesGet`](docs/sdks/messages/README.md#get)
- [`messagesGetLatest`](docs/sdks/messages/README.md#getlatest)
- [`messagesList`](docs/sdks/messages/README.md#list)
- [`messagesSearch`](docs/sdks/messages/README.md#search)
- [`organizationsAcceptInvitation`](docs/sdks/organizations/README.md#acceptinvitation)
- [`organizationsCreate`](docs/sdks/organizations/README.md#create)
- [`organizationsDeleteSetting`](docs/sdks/organizations/README.md#deletesetting)
- [`organizationsGet`](docs/sdks/organizations/README.md#get)
- [`organizationsGetAllForUser`](docs/sdks/organizations/README.md#getallforuser)
- [`organizationsGetMembers`](docs/sdks/organizations/README.md#getmembers)
- [`organizationsGetSetting`](docs/sdks/organizations/README.md#getsetting)
- [`organizationsGetSettings`](docs/sdks/organizations/README.md#getsettings)
- [`organizationsInviteUser`](docs/sdks/organizations/README.md#inviteuser)
- [`organizationsRemoveMember`](docs/sdks/organizations/README.md#removemember)
- [`organizationsSetSetting`](docs/sdks/organizations/README.md#setsetting)
- [`organizationsUpdateMembership`](docs/sdks/organizations/README.md#updatemembership)
- [`tagsCreate`](docs/sdks/tags/README.md#create)
- [`tagsDelete`](docs/sdks/tags/README.md#delete)
- [`tagsGet`](docs/sdks/tags/README.md#get)
- [`tagsGetPopular`](docs/sdks/tags/README.md#getpopular)
- [`tagsGetWithTickets`](docs/sdks/tags/README.md#getwithtickets)
- [`tagsList`](docs/sdks/tags/README.md#list)
- [`tagsUpdate`](docs/sdks/tags/README.md#update)
- [`ticketsAddTags`](docs/sdks/tickets/README.md#addtags)
- [`ticketsCreate`](docs/sdks/tickets/README.md#create) - Create a new support ticket
- [`ticketsDelete`](docs/sdks/tickets/README.md#delete)
- [`ticketsGet`](docs/sdks/tickets/README.md#get) - Get ticket details
- [`ticketsList`](docs/sdks/tickets/README.md#list) - List tickets with filtering
- [`ticketsRemoveTags`](docs/sdks/tickets/README.md#removetags)
- [`ticketsUpdate`](docs/sdks/tickets/README.md#update)
- [`usersChangePassword`](docs/sdks/users/README.md#changepassword)
- [`usersDeleteAccount`](docs/sdks/users/README.md#deleteaccount)
- [`usersGetLoginAttempts`](docs/sdks/users/README.md#getloginattempts)
- [`usersGetLoginHistory`](docs/sdks/users/README.md#getloginhistory)
- [`usersGetProfile`](docs/sdks/users/README.md#getprofile)
- [`usersUpdateProfile`](docs/sdks/users/README.md#updateprofile)
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create)
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete)
- [`webhooksGet`](docs/sdks/webhooks/README.md#get)
- [`webhooksGetStats`](docs/sdks/webhooks/README.md#getstats)
- [`webhooksList`](docs/sdks/webhooks/README.md#list)
- [`webhooksListEvents`](docs/sdks/webhooks/README.md#listevents)
- [`webhooksSend`](docs/sdks/webhooks/README.md#send)
- [`webhooksTest`](docs/sdks/webhooks/README.md#test)
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update)

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Blackbox } from "blackboxlabs-sdk";
import { openAsBlob } from "node:fs";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.attachments.upload({
    orgId: "d4685daa-bb2d-4708-a998-e495193d4754",
    ticketId: "e94f03a5-65d7-4092-b500-fd8b30fa4583",
    messageId: "c2f38b71-19bc-4869-9679-a4ba44aebf2b",
    requestBody: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.attachments.getStats({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.attachments.getStats();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`BlackboxError`](./src/models/errors/blackboxerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { Blackbox } from "blackboxlabs-sdk";
import * as errors from "blackbox/models/errors";

const blackbox = new Blackbox({
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  try {
    const result = await blackbox.attachments.getStats();

    console.log(result);
  } catch (error) {
    if (error instanceof errors.BlackboxError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`BlackboxError`](./src/models/errors/blackboxerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`BlackboxError`](./src/models/errors/blackboxerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                            | Description              |
| --- | --------------------------------- | ------------------------ |
| 0   | `http://localhost:8080`           | Local development server |
| 1   | `https://staging.api.blckbox.dev` | Staging server           |
| 2   | `https://api.blckbox.dev`         | Production server        |

#### Example

```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  serverIdx: 2,
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.attachments.getStats();

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Blackbox } from "blackboxlabs-sdk";

const blackbox = new Blackbox({
  serverURL: "https://api.blckbox.dev",
  blackboxAuthToken: process.env["BLACKBOX_BLACKBOX_AUTH_TOKEN"] ?? "",
});

async function run() {
  const result = await blackbox.attachments.getStats();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Blackbox } from "blackboxlabs-sdk";
import { HTTPClient } from "blackbox/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Blackbox({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Blackbox } from "blackboxlabs-sdk";

const sdk = new Blackbox({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `BLACKBOX_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=blackbox&utm_campaign=typescript)
