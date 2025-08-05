# CreateTagRequest

## Example Usage

```typescript
import { CreateTagRequest } from "blackboxlabs-sdk/models/operations";

let value: CreateTagRequest = {
  orgId: "d7e809c3-2129-419f-98c1-ba9a1b29c239",
  createTagRequest: {
    color: "orange",
    name: "<value>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `orgId`                                                     | *string*                                                    | :heavy_check_mark:                                          | Organization ID                                             |
| `createTagRequest`                                          | [models.CreateTagRequest](../../models/createtagrequest.md) | :heavy_check_mark:                                          | N/A                                                         |