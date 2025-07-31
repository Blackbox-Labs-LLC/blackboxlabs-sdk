# GetPopularTagsRequest

## Example Usage

```typescript
import { GetPopularTagsRequest } from "blackbox/models/operations";

let value: GetPopularTagsRequest = {
  orgId: "61be7dbb-883e-4ab2-b8d5-eb087f51762d",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `orgId`                          | *string*                         | :heavy_check_mark:               | Organization ID                  |
| `limit`                          | *number*                         | :heavy_minus_sign:               | Maximum number of tags to return |