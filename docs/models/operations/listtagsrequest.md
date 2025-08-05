# ListTagsRequest

## Example Usage

```typescript
import { ListTagsRequest } from "blackboxlabs-sdk/models/operations";

let value: ListTagsRequest = {
  orgId: "10b9d5d8-d2d8-45ca-9fa0-4a099401b448",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `page`             | *number*           | :heavy_minus_sign: | Page number        |
| `perPage`          | *number*           | :heavy_minus_sign: | Items per page     |