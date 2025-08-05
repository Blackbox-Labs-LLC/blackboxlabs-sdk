# SystemUsage

## Example Usage

```typescript
import { SystemUsage } from "blackboxlabs-sdk/models";

let value: SystemUsage = {
  activeSessions: 85200,
  apiCallsToday: 429178,
  peakDayOfWeek: "<value>",
  peakHour: 555504,
  totalEventsThisMonth: 991505,
  totalEventsThisWeek: 772759,
  totalEventsToday: 851036,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `activeSessions`       | *number*               | :heavy_check_mark:     | N/A                    |
| `apiCallsToday`        | *number*               | :heavy_check_mark:     | N/A                    |
| `peakDayOfWeek`        | *string*               | :heavy_check_mark:     | N/A                    |
| `peakHour`             | *number*               | :heavy_check_mark:     | N/A                    |
| `totalEventsThisMonth` | *number*               | :heavy_check_mark:     | N/A                    |
| `totalEventsThisWeek`  | *number*               | :heavy_check_mark:     | N/A                    |
| `totalEventsToday`     | *number*               | :heavy_check_mark:     | N/A                    |