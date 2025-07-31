# CreateApiKeyRequest

## Example Usage

```typescript
import { CreateApiKeyRequest } from "blackbox/models";

let value: CreateApiKeyRequest = {
  name: "<value>",
  scopes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `expiresInDays`    | *number*           | :heavy_minus_sign: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `scopes`           | *string*[]         | :heavy_check_mark: | N/A                |