# UpdateTicketRequest

## Example Usage

```typescript
import { UpdateTicketRequest } from "blackbox/models/operations";

let value: UpdateTicketRequest = {
  orgId: "a4d6662e-4e8b-49a6-af2f-faa07de51fe2",
  ticketId: "683e9506-ade4-48c4-b0c6-52f96f2896ae",
  updateTicketRequest: {},
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `orgId`                                                           | *string*                                                          | :heavy_check_mark:                                                | Organization ID                                                   |
| `ticketId`                                                        | *string*                                                          | :heavy_check_mark:                                                | Ticket ID                                                         |
| `updateTicketRequest`                                             | [models.UpdateTicketRequest](../../models/updateticketrequest.md) | :heavy_check_mark:                                                | N/A                                                               |