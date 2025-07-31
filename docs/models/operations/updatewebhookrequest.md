# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "blackbox/models/operations";

let value: UpdateWebhookRequest = {
  orgId: "f5aa9e8d-33b8-4ea9-a2a0-4723114fb58c",
  webhookId: "95e576d4-ad3b-4180-ad1f-080efe1735fd",
  updateWebhookRequest: {},
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orgId`                                                             | *string*                                                            | :heavy_check_mark:                                                  | Organization ID                                                     |
| `webhookId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Webhook ID                                                          |
| `updateWebhookRequest`                                              | [models.UpdateWebhookRequest](../../models/updatewebhookrequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |