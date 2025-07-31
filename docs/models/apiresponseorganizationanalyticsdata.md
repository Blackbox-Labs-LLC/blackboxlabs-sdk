# ApiResponseOrganizationAnalyticsData

## Example Usage

```typescript
import { ApiResponseOrganizationAnalyticsData } from "blackbox/models";

let value: ApiResponseOrganizationAnalyticsData = {
  agentAnalytics: {
    activeAgentsToday: 613854,
    agentActivity: [
      {
        agentId: "117b4c38-70c3-4e84-be27-3c4c5565fb32",
        agentName: "<value>",
        eventsToday: 581887,
        lastActivity: "<value>",
        status: "<value>",
      },
    ],
    averageTicketsPerAgent: 3914.79,
    topPerformers: [],
    totalAgents: 137624,
  },
  knowledgeBaseStats: {
    articlesCreatedThisMonth: 881133,
    mostViewedArticles: [],
    publicArticles: 636271,
    totalArticles: 840664,
  },
  macroUsageStats: {
    macrosUsedThisMonth: 979643,
    macrosUsedToday: 517584,
    mostUsedMacros: [
      {
        macroId: "b9de4563-1d1e-49bd-9bd4-ae318506c45d",
        name: "<value>",
        usageCount: 760539,
      },
    ],
    totalMacros: 862408,
  },
  systemUsage: {
    activeSessions: 1000000,
    apiCallsToday: 678341,
    peakDayOfWeek: "<value>",
    peakHour: 84169,
    totalEventsThisMonth: 253401,
    totalEventsThisWeek: 665136,
    totalEventsToday: 783217,
  },
  ticketAnalytics: {
    closedTickets: 439536,
    dailyTicketTrends: [],
    inProgressTickets: 490745,
    openTickets: 375372,
    priorityDistribution: [
      {
        count: 12205,
        percentage: 9102.7,
        priority: "<value>",
      },
    ],
    resolvedTickets: 395475,
    statusDistribution: [],
    ticketsCreatedThisMonth: 634240,
    ticketsCreatedThisWeek: 159278,
    ticketsCreatedToday: 921586,
    totalTickets: 283070,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `agentAnalytics`                                             | [models.AgentAnalytics](../models/agentanalytics.md)         | :heavy_check_mark:                                           | N/A                                                          |
| `knowledgeBaseStats`                                         | [models.KnowledgeBaseStats](../models/knowledgebasestats.md) | :heavy_check_mark:                                           | N/A                                                          |
| `macroUsageStats`                                            | [models.MacroUsageStats](../models/macrousagestats.md)       | :heavy_check_mark:                                           | N/A                                                          |
| `systemUsage`                                                | [models.SystemUsage](../models/systemusage.md)               | :heavy_check_mark:                                           | N/A                                                          |
| `ticketAnalytics`                                            | [models.TicketAnalytics](../models/ticketanalytics.md)       | :heavy_check_mark:                                           | N/A                                                          |