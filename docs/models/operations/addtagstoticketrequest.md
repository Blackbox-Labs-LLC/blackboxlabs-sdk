# AddTagsToTicketRequest

## Example Usage

```typescript
import { AddTagsToTicketRequest } from "blackboxlabs-sdk/models/operations";

let value: AddTagsToTicketRequest = {
  orgId: "6fc2c847-4581-4633-85d1-082539a5f8b9",
  ticketId: "e2124ea1-70e7-48fe-9547-7ec9acf85828",
  tagManagementRequest: {
    tagIds: [
      "1dc7cc4f-6422-4d70-a9e8-2ac14133006a",
      "0d424648-216a-49a8-b1cc-5de81e0c6bd5",
    ],
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orgId`                                                             | *string*                                                            | :heavy_check_mark:                                                  | Organization ID                                                     |
| `ticketId`                                                          | *string*                                                            | :heavy_check_mark:                                                  | Ticket ID                                                           |
| `tagManagementRequest`                                              | [models.TagManagementRequest](../../models/tagmanagementrequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |