# GetTicketAnalyticsRequest

## Example Usage

```typescript
import { GetTicketAnalyticsRequest } from "blackboxlabs-sdk/models/operations";

let value: GetTicketAnalyticsRequest = {
  orgId: "2bc5ef5e-a105-4bf4-9cba-d86bb9166b7b",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `orgId`                             | *string*                            | :heavy_check_mark:                  | Organization ID                     |
| `fromDate`                          | *string*                            | :heavy_minus_sign:                  | Start date for analytics (ISO 8601) |
| `toDate`                            | *string*                            | :heavy_minus_sign:                  | End date for analytics (ISO 8601)   |