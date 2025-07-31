# WebhookDelivery

## Example Usage

```typescript
import { WebhookDelivery } from "blackbox/models";

let value: WebhookDelivery = {
  attemptCount: 683948,
  createdAt: "1721332115635",
  eventType: "<value>",
  id: "0139c108-3059-4eea-ba2d-fbc23305aa0a",
  payload: "<value>",
  status: "<value>",
  url: "https://impressionable-season.info",
  webhookId: "703f3ac0-071f-4256-8066-84ca316ecf9a",
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