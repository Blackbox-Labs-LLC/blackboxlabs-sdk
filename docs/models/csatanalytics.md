# CSATAnalytics

## Example Usage

```typescript
import { CSATAnalytics } from "blackboxlabs-sdk/models";

let value: CSATAnalytics = {
  agentSatisfaction: [],
  averageScore: 4586.33,
  monthlyTrends: [
    {
      averageScore: 8842.63,
      month: "<value>",
      satisfactionRate: 1464.96,
      totalSurveys: 292868,
    },
  ],
  satisfactionRate: 2085.88,
  scoreDistribution: [],
  surveysThisMonth: 139300,
  surveysThisWeek: 195752,
  surveysToday: 752572,
  topIssues: [
    {
      averageScore: 10.79,
      category: "<value>",
      count: 705923,
    },
  ],
  totalSurveys: 481894,
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