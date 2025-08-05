# ListMacrosRequest

## Example Usage

```typescript
import { ListMacrosRequest } from "blackboxlabs-sdk/models/operations";

let value: ListMacrosRequest = {
  orgId: "cec216aa-2f9b-416d-be11-238603b9b2fe",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `orgId`                                 | *string*                                | :heavy_check_mark:                      | Organization ID                         |
| `page`                                  | *number*                                | :heavy_minus_sign:                      | Page number (default: 1)                |
| `perPage`                               | *number*                                | :heavy_minus_sign:                      | Items per page (default: 20, max: 100)  |
| `search`                                | *string*                                | :heavy_minus_sign:                      | Search in name, description, or content |
| `createdBy`                             | *string*                                | :heavy_minus_sign:                      | Filter by creator user ID               |