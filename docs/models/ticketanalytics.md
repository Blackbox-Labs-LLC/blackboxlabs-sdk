# TicketAnalytics

## Example Usage

```typescript
import { TicketAnalytics } from "blackboxlabs-sdk/models";

let value: TicketAnalytics = {
  closedTickets: 983671,
  dailyTicketTrends: [
    {
      count: 425982,
      date: "2024-01-05",
    },
  ],
  inProgressTickets: 127859,
  openTickets: 909840,
  priorityDistribution: [],
  resolvedTickets: 685444,
  statusDistribution: [],
  ticketsCreatedThisMonth: 287362,
  ticketsCreatedThisWeek: 315085,
  ticketsCreatedToday: 748970,
  totalTickets: 200381,
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