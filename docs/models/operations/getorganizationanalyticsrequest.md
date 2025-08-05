# GetOrganizationAnalyticsRequest

## Example Usage

```typescript
import { GetOrganizationAnalyticsRequest } from "blackboxlabs-sdk/models/operations";

let value: GetOrganizationAnalyticsRequest = {
  orgId: "f032804a-6e00-4cbe-81af-d2cf9e1aea5d",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `orgId`                             | *string*                            | :heavy_check_mark:                  | Organization ID                     |
| `fromDate`                          | *string*                            | :heavy_minus_sign:                  | Start date for analytics (ISO 8601) |
| `toDate`                            | *string*                            | :heavy_minus_sign:                  | End date for analytics (ISO 8601)   |