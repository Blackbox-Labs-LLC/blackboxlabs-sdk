# CreateRoleRequest

## Example Usage

```typescript
import { CreateRoleRequest } from "blackboxlabs-sdk/models/operations";

let value: CreateRoleRequest = {
  orgId: "4a8424e9-ec44-44c1-9898-94aa97695713",
  createRoleRequest: {
    name: "<value>",
    permissions: 834658,
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `orgId`                                                       | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `createRoleRequest`                                           | [models.CreateRoleRequest](../../models/createrolerequest.md) | :heavy_check_mark:                                            | N/A                                                           |