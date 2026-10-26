# Manual Test Execution Guide

1. Open Test Cases, choose a case, and read all details before starting.
2. Confirm preconditions and set up the fictional test data.
3. Follow each step in order without skipping. Record the actual result as observed.
4. Compare actual with expected. Choose Pass only when they match; choose Fail when they differ. Choose Blocked when a dependency prevents a meaningful run. Not Run means no execution was performed.
5. Enter tester initials/name and useful notes. Save to create a timestamped record.
6. Open execution history to inspect prior runs. Re-execution creates a new record and retains history.
7. For a reproducible mismatch, create a defect with exact steps, expected/actual results, environment, severity, and priority.
8. After a fix, retest the case and run related regression cases. Record each outcome separately.

Never label a case Pass based on reading its expected result. Do not use real employee or benefit information. For a useful daily report, list scope, cases run, Pass/Fail/Blocked/Not Run counts, defects by severity, unresolved risks, environment, and date.
