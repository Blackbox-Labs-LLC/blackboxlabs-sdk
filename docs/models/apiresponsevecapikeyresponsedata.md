# ApiResponseVecApiKeyResponseData

## Example Usage

```typescript
import { ApiResponseVecApiKeyResponseData } from "blackbox/models";

let value: ApiResponseVecApiKeyResponseData = {
  createdAt: "1717897248426",
  id: "0d098653-1164-4e86-bf59-39a22ed8fc17",
  name: "<value>",
  revoked: false,
  scopes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `createdAt`        | *string*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *string*           | :heavy_minus_sign: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `lastUsed`         | *string*           | :heavy_minus_sign: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `revoked`          | *boolean*          | :heavy_check_mark: | N/A                |
| `scopes`           | *string*[]         | :heavy_check_mark: | N/A                |