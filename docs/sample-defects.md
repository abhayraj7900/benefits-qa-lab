# Sample Defect Report Template

No defect is pre-marked as observed. Use this template only after reproducing an issue.

| Field | Example guidance |
|---|---|
| Defect ID | BUG-000001 (assign a unique ID) |
| Summary | Short, specific statement such as “Inactive enrollment is labeled Active” |
| Environment | Browser/version, operating system, app version, viewport |
| Preconditions | Record state and account/data used |
| Steps to reproduce | Numbered actions another person can repeat |
| Expected result | Requirement-based behavior |
| Actual result | What actually appeared |
| Severity | Critical / High / Medium / Low based on impact |
| Priority | High / Medium / Low based on urgency |
| Evidence | Screenshot or relevant console text, with fictional data only |
| Status | Open → fixed → retested → closed; reopen if the issue remains |

Keep severity and priority distinct. A low-impact wording issue can have low severity but high priority when a deadline or user need makes it urgent.

## Fictional discussion prompts (not observed defects)

These examples are for interview discussion only. They are not issues found in this app or a real production system. Do not save one as a defect unless you reproduce it in a specific environment.

1. **Deadline boundary:** a fictional enrollment is accepted one day after a stated cutoff. Record exact date/setup and actual result, then retest after a fix.
2. **Coverage reconciliation:** the displayed fictional plan differs from its enrollment row. Compare employee ID, plan ID, and effective date; use safe sample evidence.
3. **Duplicate record:** a duplicate fictional employee ID appears in search. Check whether enrollment was duplicated and record exact setup.

The live tracker starts empty and contains only records entered by the tester.

## Sample defect report walkthroughs (fictional, not observed)

The app's learning section shows three static illustrative sample reports. They are not real defects and are not inserted into the tracker. For a real practice report, reproduce the behavior first and record the environment and actual observations.

### SAMPLE-BUG-01 — Late enrollment accepted

- **Setup:** fictional enrollment window closes 30 June.
- **Steps:** open the fictional enrollment form; enter employee EMP-2001; submit on 1 July.
- **Expected:** submission after the cutoff is rejected with a clear message.
- **Illustrative actual:** a confirmation appears. This is invented solely to explain defect fields, not an observation from this project.
- **Verification:** retest on 30 June and 1 July; compare enrollment date and status; record the observed outcomes and regression result.

### SAMPLE-BUG-02 — Plan coverage mismatch

- **Setup:** fictional EMP-2001 has a Dental plan selected.
- **Steps:** open benefits summary; compare its plan label and status against the fictional enrollment row.
- **Expected:** same employee ID, plan, coverage status, and effective date.
- **Illustrative actual:** summary says Vision. This is not an observed defect.
- **Verification:** repeat the case after a proposed fix, then check a second employee and another plan as regression.

### SAMPLE-BUG-03 — Duplicate employee result

- **Setup:** two fictional records use EMP-2002.
- **Steps:** search by employee ID; inspect the result list and associated enrollment rows.
- **Expected:** duplicate ID is rejected or safely identified, without duplicate enrollment.
- **Illustrative actual:** two enrollment rows appear. This is not an observed defect.
- **Verification:** retest duplicate rejection and confirm a unique record still works. Claim database validation only if an actual database is connected.
