# GetPopularMacrosRequest

## Example Usage

```typescript
import { GetPopularMacrosRequest } from "blackboxlabs-sdk/models/operations";

let value: GetPopularMacrosRequest = {
  orgId: "911edda3-d6b4-4094-b5f9-0f7b7710834f",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `orgId`                                                   | *string*                                                  | :heavy_check_mark:                                        | Organization ID                                           |
| `limit`                                                   | *number*                                                  | :heavy_minus_sign:                                        | Maximum number of macros to return (default: 10, max: 50) |