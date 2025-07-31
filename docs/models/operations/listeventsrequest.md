# ListEventsRequest

## Example Usage

```typescript
import { ListEventsRequest } from "blackbox/models/operations";

let value: ListEventsRequest = {
  orgId: "c2752a94-f3b5-4f58-9c0c-dc76ad90641e",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `orgId`                                | *string*                               | :heavy_check_mark:                     | Organization ID                        |
| `page`                                 | *number*                               | :heavy_minus_sign:                     | Page number (default: 1)               |
| `perPage`                              | *number*                               | :heavy_minus_sign:                     | Items per page (default: 20, max: 100) |
| `eventType`                            | *string*                               | :heavy_minus_sign:                     | Filter by event type                   |
| `userId`                               | *string*                               | :heavy_minus_sign:                     | Filter by user ID                      |
| `ticketId`                             | *string*                               | :heavy_minus_sign:                     | Filter by ticket ID                    |
| `fromDate`                             | *string*                               | :heavy_minus_sign:                     | Filter events from date (ISO 8601)     |
| `toDate`                               | *string*                               | :heavy_minus_sign:                     | Filter events to date (ISO 8601)       |