# AssignRoleRequest

## Example Usage

```typescript
import { AssignRoleRequest } from "blackboxlabs-sdk/models/operations";

let value: AssignRoleRequest = {
  orgId: "f8fe2777-1b37-44e9-a816-031c5e5d6130",
  roleId: "8edc00bf-b572-46d5-b3dc-0a3d9be69c67",
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