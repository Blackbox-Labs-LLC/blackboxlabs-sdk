# SendWebhooksRequest

## Example Usage

```typescript
import { SendWebhooksRequest } from "blackbox/models/operations";

let value: SendWebhooksRequest = {
  orgId: "eb6a797e-536f-4dff-9a6f-d29d1d01b2d6",
  eventType: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `orgId`               | *string*              | :heavy_check_mark:    | Organization ID       |
| `eventType`           | *string*              | :heavy_check_mark:    | Event type to trigger |
| `ticketId`            | *string*              | :heavy_minus_sign:    | Ticket ID for context |
| `userId`              | *string*              | :heavy_minus_sign:    | User ID for context   |