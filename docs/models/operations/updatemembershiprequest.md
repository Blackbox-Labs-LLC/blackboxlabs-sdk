# UpdateMembershipRequest

## Example Usage

```typescript
import { UpdateMembershipRequest } from "blackboxlabs-sdk/models/operations";

let value: UpdateMembershipRequest = {
  orgId: "d1976539-4c1a-4840-85b3-4182ca5cedba",
  memberId: "28394fbc-49f2-4b90-9ac6-bc25d96a143a",
  updateMembershipRequest: {
    role: "<value>",
    status: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `orgId`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | Organization ID                                                           |
| `memberId`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | Member user ID                                                            |
| `updateMembershipRequest`                                                 | [models.UpdateMembershipRequest](../../models/updatemembershiprequest.md) | :heavy_check_mark:                                                        | N/A                                                                       |