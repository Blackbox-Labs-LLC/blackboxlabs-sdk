# ListWebhooksRequest

## Example Usage

```typescript
import { ListWebhooksRequest } from "blackbox/models/operations";

let value: ListWebhooksRequest = {
  orgId: "e7679426-2f0d-4a06-907b-58e525fc1e8b",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `orgId`                  | *string*                 | :heavy_check_mark:       | Organization ID          |
| `enabled`                | *boolean*                | :heavy_minus_sign:       | Filter by enabled status |
| `eventType`              | *string*                 | :heavy_minus_sign:       | Filter by event type     |
| `nameSearch`             | *string*                 | :heavy_minus_sign:       | Search by name           |
| `urlSearch`              | *string*                 | :heavy_minus_sign:       | Search by URL            |
| `page`                   | *number*                 | :heavy_minus_sign:       | Page number              |
| `perPage`                | *number*                 | :heavy_minus_sign:       | Items per page           |