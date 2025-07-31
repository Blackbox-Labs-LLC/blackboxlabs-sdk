# KnowledgeBaseStats

## Example Usage

```typescript
import { KnowledgeBaseStats } from "blackbox/models";

let value: KnowledgeBaseStats = {
  articlesCreatedThisMonth: 390006,
  mostViewedArticles: [
    {
      articleId: "9ef593ce-99cd-409f-87ab-e11bb35515a1",
      title: "<value>",
      views: 374169,
    },
  ],
  publicArticles: 8908,
  totalArticles: 420377,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `articlesCreatedThisMonth`                       | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `mostViewedArticles`                             | [models.ArticleView](../models/articleview.md)[] | :heavy_check_mark:                               | N/A                                              |
| `publicArticles`                                 | *number*                                         | :heavy_check_mark:                               | N/A                                              |
| `totalArticles`                                  | *number*                                         | :heavy_check_mark:                               | N/A                                              |