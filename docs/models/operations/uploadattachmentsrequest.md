# UploadAttachmentsRequest

## Example Usage

```typescript
import { UploadAttachmentsRequest } from "blackboxlabs-sdk/models/operations";

// No examples available for this model
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `orgId`                      | *string*                     | :heavy_check_mark:           | Organization ID              |
| `ticketId`                   | *string*                     | :heavy_check_mark:           | Ticket ID                    |
| `messageId`                  | *string*                     | :heavy_check_mark:           | Message ID                   |
| `requestBody`                | *ReadableStream<Uint8Array>* | :heavy_check_mark:           | Files to upload              |