# GetPublicArticlesRequest

## Example Usage

```typescript
import { GetPublicArticlesRequest } from "blackbox/models/operations";

let value: GetPublicArticlesRequest = {
  orgId: "6c654a14-60cc-406a-8c89-c364486b8294",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `page`             | *number*           | :heavy_minus_sign: | Page number        |
| `perPage`          | *number*           | :heavy_minus_sign: | Items per page     |