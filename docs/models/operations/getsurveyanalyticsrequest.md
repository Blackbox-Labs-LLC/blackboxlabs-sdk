# GetSurveyAnalyticsRequest

## Example Usage

```typescript
import { GetSurveyAnalyticsRequest } from "blackboxlabs-sdk/models/operations";

let value: GetSurveyAnalyticsRequest = {
  orgId: "6d72c7cd-ca39-441d-88f3-0cfae668b555",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `orgId`                             | *string*                            | :heavy_check_mark:                  | Organization ID                     |
| `fromDate`                          | *string*                            | :heavy_minus_sign:                  | Start date for analytics (ISO 8601) |
| `toDate`                            | *string*                            | :heavy_minus_sign:                  | End date for analytics (ISO 8601)   |