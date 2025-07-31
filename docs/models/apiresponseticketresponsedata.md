# ApiResponseTicketResponseData

## Example Usage

```typescript
import { ApiResponseTicketResponseData } from "blackbox/models";

let value: ApiResponseTicketResponseData = {
  createdAt: "1729016095518",
  createdBy: "77b37b2f-b4d7-47cf-99a7-e5946a723723",
  createdByName: "<value>",
  description: "minion venture profane kaleidoscopic velvety french",
  id: "74d03c66-c997-408e-9945-7c0faabfb1c5",
  priority: "<value>",
  status: "<value>",
  subject: "<value>",
  tags: [
    {
      color: "red",
      id: "d477b2cb-e87d-4592-aa2a-8327f049e5b0",
      name: "<value>",
    },
  ],
  updatedAt: "1735678733312",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `assignedTo`                                                 | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `assignedToName`                                             | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `createdAt`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `createdBy`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `createdByName`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `priority`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `status`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `subject`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `tags`                                                       | [models.TicketTagResponse](../models/tickettagresponse.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `updatedAt`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |