# ExportEventsRequest

## Example Usage

```typescript
import { ExportEventsRequest } from "blackboxlabs-sdk/models/operations";

let value: ExportEventsRequest = {
  orgId: "edc95a92-2ac3-4c72-bd93-10827ef15336",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `orgId`                            | *string*                           | :heavy_check_mark:                 | Organization ID                    |
| `format`                           | *string*                           | :heavy_minus_sign:                 | Export format (csv)                |
| `eventType`                        | *string*                           | :heavy_minus_sign:                 | Filter by event type               |
| `userId`                           | *string*                           | :heavy_minus_sign:                 | Filter by user ID                  |
| `ticketId`                         | *string*                           | :heavy_minus_sign:                 | Filter by ticket ID                |
| `fromDate`                         | *string*                           | :heavy_minus_sign:                 | Filter events from date (ISO 8601) |
| `toDate`                           | *string*                           | :heavy_minus_sign:                 | Filter events to date (ISO 8601)   |