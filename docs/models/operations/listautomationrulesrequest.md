# ListAutomationRulesRequest

## Example Usage

```typescript
import { ListAutomationRulesRequest } from "blackbox/models/operations";

let value: ListAutomationRulesRequest = {
  orgId: "43ee139e-3d75-4772-8e89-9592d983362e",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `orgId`                  | *string*                 | :heavy_check_mark:       | Organization ID          |
| `enabled`                | *boolean*                | :heavy_minus_sign:       | Filter by enabled status |
| `trigger`                | *string*                 | :heavy_minus_sign:       | Filter by trigger type   |
| `nameSearch`             | *string*                 | :heavy_minus_sign:       | Search by name           |
| `page`                   | *number*                 | :heavy_minus_sign:       | Page number              |
| `perPage`                | *number*                 | :heavy_minus_sign:       | Items per page           |