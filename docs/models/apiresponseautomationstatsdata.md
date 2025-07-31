# ApiResponseAutomationStatsData

## Example Usage

```typescript
import { ApiResponseAutomationStatsData } from "blackbox/models";

let value: ApiResponseAutomationStatsData = {
  disabledRules: 856412,
  enabledRules: 918064,
  executionsThisWeek: 156771,
  executionsToday: 727910,
  mostActiveRules: [
    {
      executionCount: 656225,
      ruleId: "ba21dd91-6d02-48f5-b23a-0cd45c369c74",
      ruleName: "<value>",
      successRate: 9507.41,
    },
  ],
  totalRules: 95863,
  triggerDistribution: [
    {
      count: 80213,
      trigger: "<value>",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `disabledRules`                                    | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `enabledRules`                                     | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `executionsThisWeek`                               | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `executionsToday`                                  | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `mostActiveRules`                                  | [models.RuleActivity](../models/ruleactivity.md)[] | :heavy_check_mark:                                 | N/A                                                |
| `totalRules`                                       | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `triggerDistribution`                              | [models.TriggerCount](../models/triggercount.md)[] | :heavy_check_mark:                                 | N/A                                                |