# GetTagWithTicketsRequest

## Example Usage

```typescript
import { GetTagWithTicketsRequest } from "blackboxlabs-sdk/models/operations";

let value: GetTagWithTicketsRequest = {
  orgId: "09180fb0-329d-40fe-b7d7-cb135e5c36ab",
  tagId: "236f406a-ded9-41da-ab8e-467a7f91ed33",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `tagId`            | *string*           | :heavy_check_mark: | Tag ID             |
| `page`             | *number*           | :heavy_minus_sign: | Page number        |
| `perPage`          | *number*           | :heavy_minus_sign: | Items per page     |