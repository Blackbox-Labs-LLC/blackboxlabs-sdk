# TestWebhookRequest

## Example Usage

```typescript
import { TestWebhookRequest } from "blackboxlabs-sdk/models/operations";

let value: TestWebhookRequest = {
  orgId: "dba0ace9-6e8b-4e39-adf0-a685a1059d1d",
  webhookId: "01159ab1-a227-487f-b2a8-2101d1bcc4ac",
  testWebhookRequest: {
    eventType: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `orgId`                                                         | *string*                                                        | :heavy_check_mark:                                              | Organization ID                                                 |
| `webhookId`                                                     | *string*                                                        | :heavy_check_mark:                                              | Webhook ID                                                      |
| `testWebhookRequest`                                            | [models.TestWebhookRequest](../../models/testwebhookrequest.md) | :heavy_check_mark:                                              | N/A                                                             |