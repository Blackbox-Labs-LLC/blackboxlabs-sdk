# ApiResponseTicketAnalyticsData

## Example Usage

```typescript
import { ApiResponseTicketAnalyticsData } from "blackbox/models";

let value: ApiResponseTicketAnalyticsData = {
  closedTickets: 32544,
  dailyTicketTrends: [
    {
      count: 425982,
      date: "2024-01-05",
    },
  ],
  inProgressTickets: 666879,
  openTickets: 504521,
  priorityDistribution: [
    {
      count: 12205,
      percentage: 9102.7,
      priority: "<value>",
    },
  ],
  resolvedTickets: 205222,
  statusDistribution: [],
  ticketsCreatedThisMonth: 453171,
  ticketsCreatedThisWeek: 555506,
  ticketsCreatedToday: 143628,
  totalTickets: 680423,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `averageFirstResponseTimeHours`                      | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `averageResolutionTimeHours`                         | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `closedTickets`                                      | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `dailyTicketTrends`                                  | [models.DailyCount](../models/dailycount.md)[]       | :heavy_check_mark:                                   | N/A                                                  |
| `inProgressTickets`                                  | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `openTickets`                                        | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `priorityDistribution`                               | [models.PriorityCount](../models/prioritycount.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `resolvedTickets`                                    | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `statusDistribution`                                 | [models.StatusCount](../models/statuscount.md)[]     | :heavy_check_mark:                                   | N/A                                                  |
| `ticketsCreatedThisMonth`                            | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `ticketsCreatedThisWeek`                             | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `ticketsCreatedToday`                                | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `totalTickets`                                       | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |