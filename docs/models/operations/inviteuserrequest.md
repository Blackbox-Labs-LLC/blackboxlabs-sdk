# InviteUserRequest

## Example Usage

```typescript
import { InviteUserRequest } from "blackbox/models/operations";

let value: InviteUserRequest = {
  orgId: "8a7abe95-d452-4e2e-ae07-f780207cc081",
  inviteUserRequest: {
    email: "Kayleigh.Lowe98@hotmail.com",
    role: "<value>",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `orgId`                                                       | *string*                                                      | :heavy_check_mark:                                            | Organization ID                                               |
| `inviteUserRequest`                                           | [models.InviteUserRequest](../../models/inviteuserrequest.md) | :heavy_check_mark:                                            | N/A                                                           |