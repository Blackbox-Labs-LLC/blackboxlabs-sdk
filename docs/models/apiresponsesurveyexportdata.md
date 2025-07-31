# ApiResponseSurveyExportData

## Example Usage

```typescript
import { ApiResponseSurveyExportData } from "blackbox/models";

let value: ApiResponseSurveyExportData = {
  analytics: {
    agentSatisfaction: [
      {
        agentId: "6fa493f6-c6a2-4568-820c-407a9dbc7c2c",
        agentName: "<value>",
        averageScore: 4998.37,
        satisfactionRate: 6337.68,
        totalSurveys: 945819,
      },
    ],
    averageScore: 8442.04,
    monthlyTrends: [
      {
        averageScore: 8842.63,
        month: "<value>",
        satisfactionRate: 1464.96,
        totalSurveys: 292868,
      },
    ],
    satisfactionRate: 3501.65,
    scoreDistribution: [],
    surveysThisMonth: 646529,
    surveysThisWeek: 697700,
    surveysToday: 340874,
    topIssues: [],
    totalSurveys: 212687,
  },
  exportDate: "<value>",
  surveys: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `analytics`                                            | [models.CSATAnalytics](../models/csatanalytics.md)     | :heavy_check_mark:                                     | N/A                                                    |
| `exportDate`                                           | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `surveys`                                              | [models.SurveyResponse](../models/surveyresponse.md)[] | :heavy_check_mark:                                     | N/A                                                    |