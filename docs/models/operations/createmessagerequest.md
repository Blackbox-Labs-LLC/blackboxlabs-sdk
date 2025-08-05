# CreateMessageRequest

## Example Usage

```typescript
import { CreateMessageRequest } from "blackboxlabs-sdk/models/operations";

let value: CreateMessageRequest = {
  orgId: "26e3a13d-b759-4549-8143-9c6f4cf19020",
  ticketId: "3bc56ae9-107d-4a2d-af0a-24f24bf0e6c4",
  createMessageRequest: {
    channel: "<value>",
    content: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orgId`                                                             | *string*                                                            | :heavy_check_mark:                                                  | Organization ID                                                     |
| `ticketId`                                                          | *string*                                                            | :heavy_check_mark:                                                  | Ticket ID                                                           |
| `createMessageRequest`                                              | [models.CreateMessageRequest](../../models/createmessagerequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |