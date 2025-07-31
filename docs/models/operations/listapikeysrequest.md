# ListApiKeysRequest

## Example Usage

```typescript
import { ListApiKeysRequest } from "blackbox/models/operations";

let value: ListApiKeysRequest = {};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `page`                                 | *number*                               | :heavy_minus_sign:                     | Page number (default: 1)               |
| `perPage`                              | *number*                               | :heavy_minus_sign:                     | Items per page (default: 20, max: 100) |
| `includeRevoked`                       | *boolean*                              | :heavy_minus_sign:                     | Include revoked keys (default: false)  |