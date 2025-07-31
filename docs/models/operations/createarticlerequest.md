# CreateArticleRequest

## Example Usage

```typescript
import { CreateArticleRequest } from "blackbox/models/operations";

let value: CreateArticleRequest = {
  orgId: "9ecd380f-b737-45d8-ae69-2d6c5331e6e6",
  createArticleRequest: {
    content: "<value>",
    public: true,
    title: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orgId`                                                             | *string*                                                            | :heavy_check_mark:                                                  | Organization ID                                                     |
| `createArticleRequest`                                              | [models.CreateArticleRequest](../../models/createarticlerequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |