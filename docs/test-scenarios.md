# Test Scenarios

| Scenario ID | Feature | Scenario description | Requirement | Priority |
|---|---|---|---|---|
| TS-001 | Login | Successful login using valid credentials | FR-001 | High |
| TS-002 | Login | Reject incorrect password | FR-001 | High |
| TS-003 | Login | Required-field validation for empty inputs | FR-002 | High |
| TS-004 | Login | Email format validation | FR-002 | High |
| TS-005 | Login | Password is masked by default | NFR-002 | Medium |
| TS-006 | Login | Logout ends the employee session | FR-003 | High |
| TS-007 | Benefits | Active enrollment and assigned benefits display | FR-004 | High |
| TS-008 | Benefits | Inactive enrollment is clearly identified | FR-005 | High |
| TS-009 | Benefits | Missing optional benefit displays gracefully | FR-006 | Medium |
| TS-010 | Benefits | Unknown employee record does not crash portal | FR-006 | High |
| TS-011 | Navigation | All workspace sections are reachable | FR-010 | Medium |
| TS-012 | Responsive | Navigation and tables fit mobile viewport | NFR-001 | Medium |
| TS-013 | Persistence | User test records remain after reload | FR-016 | High |
| TS-014 | Errors | Malformed saved data recovers safely | NFR-003 | Medium |
| TS-015 | Accessibility | Forms and navigation usable with keyboard | NFR-002 | Medium |

## Additional benefits enrollment practice scenarios

All entries below are fictional portfolio examples, not Wipro or client requirements. The demo does not implement an employee enrollment or plan-selection workflow; use these for test-design practice.

| Scenario ID | Feature | Scenario | Requirement | Priority | Preconditions | Test data |
|---|---|---|---|---|---|---|
| TS-016 | Eligibility | Eligible active employee can select an available plan | FR-017 | High | Fictional eligible employee is available | EMP-1001; Health plan |
| TS-017 | Enrollment | Submit before the enrollment deadline | FR-018 | High | Fictional enrollment window has closing date | One day before cutoff |
| TS-018 | Enrollment | At/after deadline follows documented rule | FR-018 | High | Same fictional deadline | At cutoff and one day after |
| TS-019 | Employee data | Missing or malformed required employee fields handled safely | FR-019 | High | Fictional employee input form | Blank ID; malformed email |
| TS-020 | Employee data | Duplicate employee ID does not duplicate enrollment | FR-019 | High | Two fictional rows share an ID | EMP-2001 entered twice |
| TS-021 | Benefits | Selected plan and coverage match enrollment record | FR-020 | High | Fictional plan fixtures available | EMP-1001; Health and Dental |
| TS-022 | Access control | Signed-out user cannot access protected benefits | FR-021 | High | No employee session | Direct route navigation |
| TS-023 | Boundary | Enrollment eligibility date limits behave consistently | FR-018 | Medium | Fictional start/end dates defined | First/last valid dates and adjacent dates |
| TS-024 | Data integrity | Missing, duplicate, orphaned, and inconsistent rows detected | FR-019 | Medium | Educational relational tables only | Missing benefit; unmatched employee key |

## Detailed baseline scenario setup and expected results

All examples use fictional data. These expected results are practice criteria, not observed outcomes.

| Scenario | Preconditions | Test data | Expected result |
|---|---|---|---|
| TS-001 Valid login | Open login page; use documented demo account | employee@example.com / DemoPass123! | Employee reaches benefits view |
| TS-002 Invalid password | Remain signed out | employee@example.com / WrongPass! | Error shown; no session |
| TS-003 Required fields | Open login page | Blank email and password | Required validation blocks sign-in |
| TS-004 Email format | Open login page | not-an-email | Email validation blocks sign-in |
| TS-005 Password masking | Open login page | Fictional password text | Password masked by default |
| TS-006 Logout | Sign in with demo account | employee@example.com / DemoPass123! | Logout ends session |
| TS-007 Active benefits | Use fictional active employee | EMP-1001 / Avery Morgan | Active status and assigned benefits displayed |
| TS-008 Inactive status | Review fictional inactive record | EMP-1002 | Inactive clearly labeled; no active coverage implied |
| TS-009 Missing optional benefit | Use fictional record with omitted optional values | EMP-1003; dental/vision blank | Safe unavailable state displayed |
| TS-010 Unknown employee | Use documented unknown ID | EMP-9999 | No crash; readable unavailable/error behavior |
| TS-011 Navigation | Open QA workspace | All existing sidebar sections | Each section opens |
| TS-012 Responsive | Use narrow viewport | Phone-width view; wide table | Navigation usable; table scroll stays contained |
| TS-013 Persistence | Save a fictional case/run | Saved case or execution | Record remains after reload in same browser profile |
| TS-014 Corrupt storage | Use disposable profile / backup first | Malformed app localStorage JSON | App safely falls back without crashing |
| TS-015 Keyboard access | Use keyboard only | Tab, Shift+Tab, Enter | Navigation and form actions operable |
