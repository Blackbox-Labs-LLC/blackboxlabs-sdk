# DeleteOrganizationSettingRequest

## Example Usage

```typescript
import { DeleteOrganizationSettingRequest } from "blackboxlabs-sdk/models/operations";

let value: DeleteOrganizationSettingRequest = {
  orgId: "cb7b902a-0b30-4f3c-bac8-0addff7cb82b",
  key: "<key>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `key`              | *string*           | :heavy_check_mark: | Setting key        |