# ListTicketMessagesRequest

## Example Usage

```typescript
import { ListTicketMessagesRequest } from "blackbox/models/operations";

let value: ListTicketMessagesRequest = {
  orgId: "fe1a6a46-c625-4253-80e3-af7e4b1f7514",
  ticketId: "fe848530-1296-4d44-9e79-03f275a59866",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `orgId`                  | *string*                 | :heavy_check_mark:       | Organization ID          |
| `ticketId`               | *string*                 | :heavy_check_mark:       | Ticket ID                |
| `channel`                | *string*                 | :heavy_minus_sign:       | Filter by channel        |
| `senderId`               | *string*                 | :heavy_minus_sign:       | Filter by sender user ID |
| `page`                   | *number*                 | :heavy_minus_sign:       | Page number              |
| `perPage`                | *number*                 | :heavy_minus_sign:       | Items per page           |