# GetTrendAnalyticsRequest

## Example Usage

```typescript
import { GetTrendAnalyticsRequest } from "blackboxlabs-sdk/models/operations";

let value: GetTrendAnalyticsRequest = {
  orgId: "d1cc9bd0-e2ed-48a3-9765-bf3156945374",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `orgId`                                       | *string*                                      | :heavy_check_mark:                            | Organization ID                               |
| `fromDate`                                    | *string*                                      | :heavy_minus_sign:                            | Start date for trends (ISO 8601)              |
| `toDate`                                      | *string*                                      | :heavy_minus_sign:                            | End date for trends (ISO 8601)                |
| `metric`                                      | *string*                                      | :heavy_minus_sign:                            | Metric to analyze (tickets, messages, events) |
| `interval`                                    | *string*                                      | :heavy_minus_sign:                            | Time interval (daily, weekly, monthly)        |