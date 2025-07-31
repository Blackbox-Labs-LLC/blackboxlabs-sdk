# ListMessageAttachmentsRequest

## Example Usage

```typescript
import { ListMessageAttachmentsRequest } from "blackbox/models/operations";

let value: ListMessageAttachmentsRequest = {
  orgId: "87eaa323-a520-46a1-9d95-7dbce4953595",
  ticketId: "43a6e51d-c21e-4936-8148-07ecd2cd542a",
  messageId: "c004ce15-33b8-4d1c-9fee-87059085e05f",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `ticketId`         | *string*           | :heavy_check_mark: | Ticket ID          |
| `messageId`        | *string*           | :heavy_check_mark: | Message ID         |