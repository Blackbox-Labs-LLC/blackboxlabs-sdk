# GetOrganizationSettingRequest

## Example Usage

```typescript
import { GetOrganizationSettingRequest } from "blackboxlabs-sdk/models/operations";

let value: GetOrganizationSettingRequest = {
  orgId: "a15193b3-020a-4b10-ad7d-6c0943be4dd2",
  key: "<key>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orgId`            | *string*           | :heavy_check_mark: | Organization ID    |
| `key`              | *string*           | :heavy_check_mark: | Setting key        |