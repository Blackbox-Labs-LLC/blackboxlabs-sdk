# RevokeRoleRequest

## Example Usage

```typescript
import { RevokeRoleRequest } from "blackboxlabs-sdk/models/operations";

let value: RevokeRoleRequest = {
  orgId: "8bad78e5-0c5c-49b9-9452-4acfb58ead64",
  roleId: "18a8f02e-079c-4e85-b881-843e02e20939",
  assignRoleRequest: {
    userId: "5908dfa4-ffe0-47ef-b60e-da90a9c4528c",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `orgId`                                                       | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `roleId`                                                      | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `assignRoleRequest`                                           | [models.AssignRoleRequest](../../models/assignrolerequest.md) | :heavy_check_mark:                                            | N/A                                                           |