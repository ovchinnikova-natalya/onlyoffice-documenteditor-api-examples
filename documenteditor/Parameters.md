# Parameters

## ApiBlockLvlSdt

* SetAlias

**Parameters:**

| Name     | Type     | Description         |
| -------- | -------- | ------------------- |
| _sAlias_ | _string_ | The alias attribute |



* SetLabel

**Parameters:**

| Name     | Type     | Description         |
| -------- | -------- | ------------------- |
| _sAlias_ | _string_ | The label attribute |



* SetLock

**Parameters:**

| Name        | Type      | Description                                                  |
| ----------- | --------- | ------------------------------------------------------------ |
| _sLockType_ | _SdtLock_ | **_unlocked_** - the content is available for editing and deleting **_contentLocked_** - the content is not available for editing           **_sdtContentLocked_**  - the content is not available for deleting                                        **_sdtLocked_ **- the content is not available for editing and deleting |



## ApiChart

* SetHorAxisLablesFontSize

**Parameters:**

| Name        | Type     | Description                                          |
| ----------- | -------- | ---------------------------------------------------- |
| _nFontSize_ | _number_ | The value of font size for labels of horizontal axis |



* SetHorAxisMajorTickMark, SetHorAxisMinorTickMark, SetVertAxisMajorTickMark, SetVertAxisMinorTickMark

**Parameters:**

| Name        | Type       | Description                                                  |
| ----------- | ---------- | ------------------------------------------------------------ |
| _sTickMark_ | _TickMark_ | **_None_** to not display major/minor tick marks                                 **_Cross_** to display major/minor tick marks on both sides of the axis   **_In_** to display major/minor tick marks inside the axis                         **_Out_** to display major/minor tick marks outside the axis. |



* SetHorAxisOrientation

**Parameters:**

| Name        | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| _blsMinMax_ | _bool_ | The **_true_** value will set the normal data direction for the horizontal axis (from minimum to maximum). The **_false_** value will set the inverted data direction for the horizontal axis (from maximum to minimum). |



* SetHorAxisTickLabelPosition

**Parameters:**

| Name                 | Type                | Description                                                  |
| -------------------- | ------------------- | ------------------------------------------------------------ |
| _sTickLabelPosition_ | _TickLabelPosition_ | **_none_** - to not display tick mark labels                    **_nextTo_** - to display tick mark labels next to the axis                                                    **_low_** - to display tick mark labels at the bottom of the plot area                                                                      **_high_** - to display tick mark labels at the top of the plot area |



* SetLegendFontSize

**Parameters:**

| Name        | Type     | Description                         |
| ----------- | -------- | ----------------------------------- |
| _nFontSize_ | _number_ | The value of font size for a legend |



* SetMajorHorizontalGridlines, SetMinorHorizontalGridlines, SetMajorVerticalGridlines, SetMinorVerticalGridlines

**Parameters:**

| Name      | Type        | Description                        |
| --------- | ----------- | ---------------------------------- |
| _oStroke_ | _ApiStroke_ | A stroke with properties specified |



* SetShowPointDataLabel

**Parameters:**

| Name             | Type        | Description                                                  |
| ---------------- | ----------- | ------------------------------------------------------------ |
| *nSeriesIndex*   | *number*    | The index of the source table column name                    |
| *nPointIndex*    | *number*    | The index of the source table row name                       |
| *bShowSerName*   | *boolean*   | Whether to show or hide the source table column names used for the data which the chart will be build from. |
| *bShowCatName*   | *boolean*   | Whether to show or hide the source table row names used for the data which the chart will be build from. |
| *bShowVal*       | *boolean*   | Whether to show or hide the chart data values.               |
| _*bShowPercent*_ | _*boolean*_ | Whether to show or hide the percent for the data values (works with stacked chart types). |



* SetVerAxisOrientation

**Parameters:**

| Name        | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| _blsMinMax_ | _bool_ | The **_true_** value will set the normal data direction for the vertical axis (from minimum to maximum). The **_false_** value will set the inverted data direction for the vertical axis (from maximum to minimum). |



* SetVertAxisLablesFontSize

**Parameters:**

| Name        | Type     | Description                                        |
| ----------- | -------- | -------------------------------------------------- |
| _nFontSize_ | _number_ | The value of font size for labels of vertical axis |



* SetVertAxisTickLabelPosition

**Parameters:**

| Name                 | Type                | Description                                                  |
| -------------------- | ------------------- | ------------------------------------------------------------ |
| _sTickLabelPosition_ | _TickLabelPosition_ | **_none_** - to not display tick mark labels                    **_nextTo_** - to display tick mark labels next to the axis                                                    **_low_** - to display tick mark labels to the left of the plot area                                                                      **_high_** - to display tick mark labels to the right of the plot area |



## ApiDocument

* GetElement

**Parameters:**

| Name     | Type       | Description                 |
| -------- | ---------- | --------------------------- |
| _*nPos*_ | _*number*_ | The position of the element |



* SetTrackRevision

**Parameters:**

| Name     | Type      | Description                                                  |
| -------- | --------- | ------------------------------------------------------------ |
| *sTrack* | _boolean_ | The **_true_** value is to track changes. The **_false_** value is not to track changes. |