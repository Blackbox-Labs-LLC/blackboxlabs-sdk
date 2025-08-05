# UpdateSurveyRequest

## Example Usage

```typescript
import { UpdateSurveyRequest } from "blackboxlabs-sdk/models/operations";

let value: UpdateSurveyRequest = {
  orgId: "4e9903ad-c3f0-493a-885f-c4c94ed7380a",
  surveyId: "7048bc2d-36fe-494d-ac99-bc1a8d5db92f",
  updateSurveyRequest: {},
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `orgId`                                                           | *string*                                                          | :heavy_check_mark:                                                | Organization ID                                                   |
| `surveyId`                                                        | *string*                                                          | :heavy_check_mark:                                                | Survey ID                                                         |
| `updateSurveyRequest`                                             | [models.UpdateSurveyRequest](../../models/updatesurveyrequest.md) | :heavy_check_mark:                                                | N/A                                                               |