# Requirements

## Purpose and scope

This independent learning project models a small employee benefits portal and a manual QA practice workspace. It is for learning and portfolio demonstration, not a real employer system. Roles are **demo employee** (sign in and view the sample benefits) and **QA learner** (manage cases, execute tests, report defects, and study concepts). There is no administrator role or multi-user access control.

## Functional requirements

| ID | Requirement |
|---|---|
| FR-001 | The demo employee can submit the documented sample email and password and reach the benefits view. Invalid credentials show a clear error. |
| FR-002 | Sign-in requires both fields and validates a basic email format. Password is masked initially and can be shown or hidden. |
| FR-003 | A signed-in employee can sign out; the benefits view requires a signed-in session. |
| FR-004 | The active fictional employee can view ID, name, department, enrollment status, benefits, and effective date. |
| FR-005 | An inactive enrollment is represented with an explicit inactive status and explanation. |
| FR-006 | Missing optional benefits display a readable unavailable state; invalid or missing employee data must not crash the app. |
| FR-007 | The workspace provides at least 15 scenarios linked to requirements and priority. |
| FR-008 | The case library starts with at least 40 unique cases, each with steps, data, preconditions, expected result, priority, type, and Not Run status. |
| FR-009 | A learner can search, filter, inspect, add, edit, and confirm deletion of test definitions. |
| FR-010 | The app provides navigable overview, employee, QA, reporting, test-data, SQL, learning, and documentation sections. |
| FR-011 | The learner can record execution status, actual result, tester, date/time, and notes. A rerun adds history and does not erase earlier execution records. |
| FR-012 | The defect tracker captures summary, reproduction steps, expected and actual results, severity, priority, and environment; defects can be closed or reopened. |
| FR-013 | Dashboard and summary counts derive from saved definitions and execution/defect records. Execution history can be exported as CSV. |
| FR-014 | A test data section describes fictional valid, invalid, inactive, missing, and unknown values. |
| FR-015 | A learning section explains SQL and testing concepts and provides beginner interview practice. |
| FR-016 | Cases, executions, defects, and tester name persist in browser local storage. Reset requires confirmation. Malformed storage recovers to initial demo data. |

## Non-functional requirements

| ID | Requirement |
|---|---|
| NFR-001 | Layout adapts to desktop and narrow/mobile screens without page-wide horizontal overflow. Tables may scroll within their own container. |
| NFR-002 | Inputs have visible labels; password is masked by default; controls have keyboard-operable native semantics and focusable navigation. |
| NFR-003 | The app runs locally without a paid service, database, API key, or dependency download. Invalid saved data recovers safely. |
| NFR-004 | Text, controls, and status colors are readable and messages identify success or validation errors. |
| NFR-005 | Only fictional employee and benefit information is used. The demo does not claim production-grade security. |

## Business and validation rules

- An active enrollment displays assigned benefit labels and its effective date.
- Inactive enrollment must be identified; it is not described as active coverage.
- Missing optional benefit fields display “Not provided.” An unknown employee must be handled without an application crash.
- The documented demo login uses `employee@example.com` / `DemoPass123!`; it signs into fictional employee EMP-1001.
- Email must have a basic `name@domain.suffix` shape; email and password are required.
- Execution status is one of Pass, Fail, Blocked, or Not Run. Definitions begin Not Run. History is separate from definitions.
- Defect severity is Critical, High, Medium, or Low. Priority is High, Medium, or Low. Open defects can be closed and reopened.
- Dates are stored in ISO format and displayed using the browser locale.

## Assumptions and out of scope

Assume a recent browser with local storage and Node.js 18+ to serve files. Records are local to one browser profile. Real employee authentication, password recovery, role permissions, integrations, actual benefit enrollment, database-backed SQL execution, multiple users, medical/insurance advice, and production hosting are out of scope.

## Acceptance criteria

The app starts with `npm start`, serves its main page, permits the documented sign-in, renders the fictional active benefits, provides case CRUD and persistent execution history, creates and updates defects, derives reports from saved data, exports CSV, and offers linked educational documents. Seeded cases remain Not Run. See the README for checks and known limitations.

## Known limitations

Authentication is a client-side demo check; the active account is fixed. Inactive/missing-benefit scenarios are represented in documented sample data and test steps rather than an employee selector. Local storage can be edited by the browser user. Seeded test steps are concise prompts rather than observed execution evidence. Automated checks are small Node checks and do not exercise the app through a browser.
