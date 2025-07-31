# DeleteAttachmentRequest

## Example Usage

```typescript
import { DeleteAttachmentRequest } from "blackbox/models/operations";

let value: DeleteAttachmentRequest = {
  orgId: "011e9497-ac39-4834-9e06-036973dd9a95",
  ticketId: "4e173af9-67a4-472d-ba30-8c1d63886689",
  messageId: "8008beec-7c6a-4b0f-a160-75b61fb57397",
  attachmentId: "bad95893-1dd3-4b62-aade-3996a058b4b6",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `ticketId`         | *string*           | :heavy_check_mark: | Ticket ID          |
| `messageId`        | *string*           | :heavy_check_mark: | Message ID         |
| `attachmentId`     | *string*           | :heavy_check_mark: | Attachment ID      |