# GetSystemAnalyticsRequest

## Example Usage

```typescript
import { GetSystemAnalyticsRequest } from "blackbox/models/operations";

let value: GetSystemAnalyticsRequest = {
  orgId: "0beec015-a8b0-4473-8923-8b06bb31a228",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `orgId`                             | *string*                            | :heavy_check_mark:                  | Organization ID                     |
| `fromDate`                          | *string*                            | :heavy_minus_sign:                  | Start date for analytics (ISO 8601) |
| `toDate`                            | *string*                            | :heavy_minus_sign:                  | End date for analytics (ISO 8601)   |