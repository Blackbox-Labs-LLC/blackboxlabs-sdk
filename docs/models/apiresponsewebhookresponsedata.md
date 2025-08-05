# ApiResponseWebhookResponseData

## Example Usage

```typescript
import { ApiResponseWebhookResponseData } from "blackboxlabs-sdk/models";

let value: ApiResponseWebhookResponseData = {
  createdAt: "1735642203585",
  enabled: true,
  events: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  failureCount: 801701,
  id: "1060fe34-0056-4c0b-9dc8-923b978846dd",
  name: "<value>",
  organizationId: "f7fc92a1-d020-4c34-abed-4b1fde1c6e62",
  successCount: 808208,
  updatedAt: "1735686354143",
  url: "https://well-worn-pantyhose.net",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `createdAt`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `description`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `enabled`                | *boolean*                | :heavy_check_mark:       | N/A                      |
| `events`                 | *string*[]               | :heavy_check_mark:       | N/A                      |
| `failureCount`           | *number*                 | :heavy_check_mark:       | N/A                      |
| `headers`                | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `lastDelivery`           | *string*                 | :heavy_minus_sign:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `organizationId`         | *string*                 | :heavy_check_mark:       | N/A                      |
| `successCount`           | *number*                 | :heavy_check_mark:       | N/A                      |
| `updatedAt`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `url`                    | *string*                 | :heavy_check_mark:       | N/A                      |