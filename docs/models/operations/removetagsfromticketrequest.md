# RemoveTagsFromTicketRequest

## Example Usage

```typescript
import { RemoveTagsFromTicketRequest } from "blackbox/models/operations";

let value: RemoveTagsFromTicketRequest = {
  orgId: "09d0860c-5656-44cb-9135-73c8d99fa60f",
  ticketId: "f9fe9214-25e9-4dc5-b46a-fcaa7cfdf525",
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