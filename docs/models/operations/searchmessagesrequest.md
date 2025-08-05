# SearchMessagesRequest

## Example Usage

```typescript
import { SearchMessagesRequest } from "blackboxlabs-sdk/models/operations";

let value: SearchMessagesRequest = {
  orgId: "3a57e170-ec5b-49e0-8ed9-e099103f80b3",
  ticketId: "45a602a5-6d6e-4372-a44e-1354451a6366",
  q: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `ticketId`         | *string*           | :heavy_check_mark: | Ticket ID          |
| `q`                | *string*           | :heavy_check_mark: | Search query       |
| `page`             | *number*           | :heavy_minus_sign: | Page number        |
| `perPage`          | *number*           | :heavy_minus_sign: | Items per page     |