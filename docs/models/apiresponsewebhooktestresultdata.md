# ApiResponseWebhookTestResultData

## Example Usage

```typescript
import { ApiResponseWebhookTestResultData } from "blackbox/models";

let value: ApiResponseWebhookTestResultData = {
  responseTimeMs: 144162,
  success: false,
  webhookId: "a472ab2b-c19d-4c5c-a4d3-84a69c20e862",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `errorMessage`     | *string*           | :heavy_minus_sign: | N/A                |
| `responseCode`     | *number*           | :heavy_minus_sign: | N/A                |
| `responseTimeMs`   | *number*           | :heavy_check_mark: | N/A                |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |
| `webhookId`        | *string*           | :heavy_check_mark: | N/A                |