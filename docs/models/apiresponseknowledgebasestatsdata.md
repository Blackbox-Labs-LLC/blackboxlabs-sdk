# ApiResponseKnowledgeBaseStatsData

## Example Usage

```typescript
import { ApiResponseKnowledgeBaseStatsData } from "blackbox/models";

let value: ApiResponseKnowledgeBaseStatsData = {
  articlesCreatedThisMonth: 260912,
  mostViewedArticles: [],
  publicArticles: 341656,
  totalArticles: 726330,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `articlesCreatedThisMonth`                       | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `mostViewedArticles`                             | [models.ArticleView](../models/articleview.md)[] | :heavy_check_mark:                               | N/A                                              |
| `publicArticles`                                 | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `totalArticles`                                  | *number*                                         | :heavy_check_mark:                               | N/A                                              |