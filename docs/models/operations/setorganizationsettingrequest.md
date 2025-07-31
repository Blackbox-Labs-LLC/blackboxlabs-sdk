# SetOrganizationSettingRequest

## Example Usage

```typescript
import { SetOrganizationSettingRequest } from "blackbox/models/operations";

let value: SetOrganizationSettingRequest = {
  orgId: "8b6f9e9d-c8b7-42a8-b466-1c7816b0ee4b",
  setOrganizationSettingRequest: {
    key: "<key>",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `orgId`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | Organization ID                                                                       |
| `setOrganizationSettingRequest`                                                       | [models.SetOrganizationSettingRequest](../../models/setorganizationsettingrequest.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |