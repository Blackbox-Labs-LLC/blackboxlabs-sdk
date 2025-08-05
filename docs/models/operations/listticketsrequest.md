# ListTicketsRequest

## Example Usage

```typescript
import { ListTicketsRequest } from "blackboxlabs-sdk/models/operations";

let value: ListTicketsRequest = {
  orgId: "23366ec4-e91c-4f23-9260-5483dd81cbdc",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `orgId`                                                       | *string*                                                      | :heavy_check_mark:                                            | Organization ID                                               |
| `status`                                                      | *string*                                                      | :heavy_minus_sign:                                            | Filter by ticket status (open, in_progress, resolved, closed) |
| `priority`                                                    | *string*                                                      | :heavy_minus_sign:                                            | Filter by priority level (low, medium, high, urgent)          |
| `assignedTo`                                                  | *string*                                                      | :heavy_minus_sign:                                            | Filter by assigned user ID                                    |
| `createdBy`                                                   | *string*                                                      | :heavy_minus_sign:                                            | Filter by creator user ID                                     |
| `tagIds`                                                      | *string*                                                      | :heavy_minus_sign:                                            | Filter by tag IDs (comma-separated UUIDs)                     |
| `page`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Page number (default: 1)                                      |
| `perPage`                                                     | *number*                                                      | :heavy_minus_sign:                                            | Items per page (default: 20, max: 100)                        |