# GetAgentAnalyticsRequest

## Example Usage

```typescript
import { GetAgentAnalyticsRequest } from "blackboxlabs-sdk/models/operations";

let value: GetAgentAnalyticsRequest = {
  orgId: "666a8497-aa8a-43a8-a757-82ea9cb511ed",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `orgId`                             | *string*                            | :heavy_check_mark:                  | Organization ID                     |
| `fromDate`                          | *string*                            | :heavy_minus_sign:                  | Start date for analytics (ISO 8601) |
| `toDate`                            | *string*                            | :heavy_minus_sign:                  | End date for analytics (ISO 8601)   |