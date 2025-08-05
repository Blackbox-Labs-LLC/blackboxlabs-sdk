# SubmitSurveyRequest

## Example Usage

```typescript
import { SubmitSurveyRequest } from "blackboxlabs-sdk/models/operations";

let value: SubmitSurveyRequest = {
  orgId: "0213b6f5-5b36-4267-9e75-44d394818761",
  submitSurveyRequest: {
    score: 442710,
    ticketId: "93b88feb-2915-4203-9345-2daf4c49bf99",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `orgId`                                                           | *string*                                                          | :heavy_check_mark:                                                | Organization ID                                                   |
| `submitSurveyRequest`                                             | [models.SubmitSurveyRequest](../../models/submitsurveyrequest.md) | :heavy_check_mark:                                                | N/A                                                               |