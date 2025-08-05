# ExportSurveysRequest

## Example Usage

```typescript
import { ExportSurveysRequest } from "blackboxlabs-sdk/models/operations";

let value: ExportSurveysRequest = {
  orgId: "beb693f0-ee11-4523-8f5e-fcc09ee0c11c",
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