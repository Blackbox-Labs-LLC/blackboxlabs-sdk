# ApiResponseApiKeyResponseData

## Example Usage

```typescript
import { ApiResponseApiKeyResponseData } from "blackbox/models";

let value: ApiResponseApiKeyResponseData = {
  createdAt: "1723222767194",
  id: "f35d8931-565b-495a-95fd-2f8b236c6b78",
  name: "<value>",
  revoked: true,
  scopes: [
    "<value 1>",
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