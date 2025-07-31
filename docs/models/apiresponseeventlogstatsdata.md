# ApiResponseEventLogStatsData

## Example Usage

```typescript
import { ApiResponseEventLogStatsData } from "blackbox/models";

let value: ApiResponseEventLogStatsData = {
  eventsThisMonth: 459502,
  eventsThisWeek: 502717,
  eventsToday: 42815,
  mostActiveUsers: [
    {
      count: 521990,
      userId: "1be7bd26-fa1e-48f4-8c7b-1e1e9ef1cbc6",
      userName: "Carleton28",
    },
  ],
  topEventTypes: [
    {
      count: 887730,
      eventType: "<value>",
    },
  ],
  totalEvents: 669438,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `eventsThisMonth`                                      | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `eventsThisWeek`                                       | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `eventsToday`                                          | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `mostActiveUsers`                                      | [models.UserEventCount](../models/usereventcount.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `topEventTypes`                                        | [models.EventTypeCount](../models/eventtypecount.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `totalEvents`                                          | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |