# ApiResponseVecWebhookResponseData

## Example Usage

```typescript
import { ApiResponseVecWebhookResponseData } from "blackboxlabs-sdk/models";

let value: ApiResponseVecWebhookResponseData = {
  createdAt: "1718675347783",
  enabled: false,
  events: [
    "<value 1>",
    "<value 2>",
  ],
  failureCount: 548984,
  id: "b8ee7c03-ad15-4b4f-b685-1fc2d829f94a",
  name: "<value>",
  organizationId: "275717a1-e7bf-40cb-90da-208af65a53f9",
  successCount: 609133,
  updatedAt: "1735678148357",
  url: "https://superb-meal.org",
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