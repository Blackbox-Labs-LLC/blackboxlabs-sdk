# ApiResponseWebhookStatsData

## Example Usage

```typescript
import { ApiResponseWebhookStatsData } from "blackboxlabs-sdk/models";

let value: ApiResponseWebhookStatsData = {
  deliveriesThisWeek: 910951,
  deliveriesToday: 601754,
  enabledWebhooks: 111577,
  eventDistribution: [
    {
      deliveryCount: 179981,
      eventType: "<value>",
      successRate: 2385.75,
    },
  ],
  mostActiveWebhooks: [
    {
      deliveryCount: 970976,
      successRate: 1627.79,
      webhookId: "f0ddc169-9503-4c27-a347-cf5b27b9438e",
      webhookName: "<value>",
    },
  ],
  recentFailures: [
    {
      attemptCount: 722205,
      createdAt: "1717606916726",
      eventType: "<value>",
      id: "17e97227-00f3-49ef-a061-d7df3536da40",
      payload: "<value>",
      status: "<value>",
      url: "https://poor-minion.org/",
      webhookId: "c4c4b8de-f16b-4bad-9c5d-b644808080e3",
      webhookName: "<value>",
    },
  ],
  successRate: 8709.78,
  totalWebhooks: 234986,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `averageResponseTime`                                        | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `deliveriesThisWeek`                                         | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `deliveriesToday`                                            | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `enabledWebhooks`                                            | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `eventDistribution`                                          | [models.EventTypeDelivery](../models/eventtypedelivery.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `mostActiveWebhooks`                                         | [models.WebhookActivity](../models/webhookactivity.md)[]     | :heavy_check_mark:                                           | N/A                                                          |
| `recentFailures`                                             | [models.WebhookDelivery](../models/webhookdelivery.md)[]     | :heavy_check_mark:                                           | N/A                                                          |
| `successRate`                                                | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `totalWebhooks`                                              | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |