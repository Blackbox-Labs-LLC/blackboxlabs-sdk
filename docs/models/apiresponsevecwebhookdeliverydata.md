# ApiResponseVecWebhookDeliveryData

## Example Usage

```typescript
import { ApiResponseVecWebhookDeliveryData } from "blackbox/models";

let value: ApiResponseVecWebhookDeliveryData = {
  attemptCount: 713611,
  createdAt: "1725790533143",
  eventType: "<value>",
  id: "5d57e020-9246-4f21-87b6-0099dbee3726",
  payload: "<value>",
  status: "<value>",
  url: "https://official-gradient.net",
  webhookId: "33dee84c-2ba3-4f54-ae1f-35c727845dc7",
  webhookName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `attemptCount`     | *number*           | :heavy_check_mark: | N/A                |
| `createdAt`        | *string*           | :heavy_check_mark: | N/A                |
| `deliveredAt`      | *string*           | :heavy_minus_sign: | N/A                |
| `errorMessage`     | *string*           | :heavy_minus_sign: | N/A                |
| `eventType`        | *string*           | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `nextRetry`        | *string*           | :heavy_minus_sign: | N/A                |
| `payload`          | *any*              | :heavy_check_mark: | N/A                |
| `responseBody`     | *string*           | :heavy_minus_sign: | N/A                |
| `responseCode`     | *number*           | :heavy_minus_sign: | N/A                |
| `status`           | *string*           | :heavy_check_mark: | N/A                |
| `url`              | *string*           | :heavy_check_mark: | N/A                |
| `webhookId`        | *string*           | :heavy_check_mark: | N/A                |
| `webhookName`      | *string*           | :heavy_check_mark: | N/A                |