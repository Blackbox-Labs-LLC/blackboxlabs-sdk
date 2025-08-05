# ListArticlesRequest

## Example Usage

```typescript
import { ListArticlesRequest } from "blackboxlabs-sdk/models/operations";

let value: ListArticlesRequest = {
  orgId: "dfdd56a4-bda2-4016-9572-9b3e9fa2ab64",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `orgId`                     | *string*                    | :heavy_check_mark:          | Organization ID             |
| `public`                    | *boolean*                   | :heavy_minus_sign:          | Filter by public visibility |
| `authorId`                  | *string*                    | :heavy_minus_sign:          | Filter by author user ID    |
| `search`                    | *string*                    | :heavy_minus_sign:          | Search in title and content |
| `page`                      | *number*                    | :heavy_minus_sign:          | Page number                 |
| `perPage`                   | *number*                    | :heavy_minus_sign:          | Items per page              |