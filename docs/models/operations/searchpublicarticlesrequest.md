# SearchPublicArticlesRequest

## Example Usage

```typescript
import { SearchPublicArticlesRequest } from "blackboxlabs-sdk/models/operations";

let value: SearchPublicArticlesRequest = {
  orgId: "2a2c7896-0cf8-49f2-b899-a8fd1f977d81",
  q: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `q`                | *string*           | :heavy_check_mark: | Search query       |
| `page`             | *number*           | :heavy_minus_sign: | Page number        |
| `perPage`          | *number*           | :heavy_minus_sign: | Items per page     |