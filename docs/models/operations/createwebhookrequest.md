# CreateWebhookRequest

## Example Usage

```typescript
import { CreateWebhookRequest } from "blackbox/models/operations";

let value: CreateWebhookRequest = {
  orgId: "a9cd3172-23fa-4f86-baf8-0ff7c1aaecd9",
  createWebhookRequest: {
    description: "https://api.example.com/webhooks/blackbox",
    enabled: false,
    events: [],
    name: "<value>",
    url: "https://blind-festival.net/",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orgId`                                                             | *string*                                                            | :heavy_check_mark:                                                  | Organization ID                                                     |
| `createWebhookRequest`                                              | [models.CreateWebhookRequest](../../models/createwebhookrequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |