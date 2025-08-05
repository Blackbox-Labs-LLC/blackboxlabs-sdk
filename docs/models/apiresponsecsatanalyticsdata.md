# ApiResponseCSATAnalyticsData

## Example Usage

```typescript
import { ApiResponseCSATAnalyticsData } from "blackboxlabs-sdk/models";

let value: ApiResponseCSATAnalyticsData = {
  agentSatisfaction: [],
  averageScore: 8897.51,
  monthlyTrends: [
    {
      averageScore: 8842.63,
      month: "<value>",
      satisfactionRate: 1464.96,
      totalSurveys: 292868,
    },
  ],
  satisfactionRate: 7897.76,
  scoreDistribution: [
    {
      count: 602249,
      percentage: 6642.39,
      score: 853644,
    },
  ],
  surveysThisMonth: 509046,
  surveysThisWeek: 384449,
  surveysToday: 915635,
  topIssues: [
    {
      averageScore: 10.79,
      category: "<value>",
      count: 705923,
    },
  ],
  totalSurveys: 717101,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `agentSatisfaction`                                                    | [models.AgentSatisfactionScore](../models/agentsatisfactionscore.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `averageScore`                                                         | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `monthlyTrends`                                                        | [models.MonthlySurveyData](../models/monthlysurveydata.md)[]           | :heavy_check_mark:                                                     | N/A                                                                    |
| `satisfactionRate`                                                     | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `scoreDistribution`                                                    | [models.ScoreCount](../models/scorecount.md)[]                         | :heavy_check_mark:                                                     | N/A                                                                    |
| `surveysThisMonth`                                                     | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `surveysThisWeek`                                                      | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `surveysToday`                                                         | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `topIssues`                                                            | [models.IssueCategory](../models/issuecategory.md)[]                   | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalSurveys`                                                         | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |