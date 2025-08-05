# ListSurveysRequest

## Example Usage

```typescript
import { ListSurveysRequest } from "blackboxlabs-sdk/models/operations";

let value: ListSurveysRequest = {
  orgId: "68b4958d-c426-4dc2-a195-f319ba408a22",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `orgId`                    | *string*                   | :heavy_check_mark:         | Organization ID            |
| `ticketId`                 | *string*                   | :heavy_minus_sign:         | Filter by ticket ID        |
| `userId`                   | *string*                   | :heavy_minus_sign:         | Filter by user ID          |
| `minScore`                 | *number*                   | :heavy_minus_sign:         | Minimum score filter       |
| `maxScore`                 | *number*                   | :heavy_minus_sign:         | Maximum score filter       |
| `hasComment`               | *boolean*                  | :heavy_minus_sign:         | Filter by comment presence |
| `fromDate`                 | *string*                   | :heavy_minus_sign:         | Start date (ISO 8601)      |
| `toDate`                   | *string*                   | :heavy_minus_sign:         | End date (ISO 8601)        |
| `page`                     | *number*                   | :heavy_minus_sign:         | Page number                |
| `perPage`                  | *number*                   | :heavy_minus_sign:         | Items per page             |