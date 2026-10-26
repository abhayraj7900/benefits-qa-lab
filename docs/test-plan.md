# Test Plan

## Objective
Check the core behavior of this fictional benefits portal and its QA practice tools. Testing teaches manual techniques and does not certify a production system.

## Scope
In scope: sign-in validation, logout, benefits display, navigation, case management, execution history, defects, derived metrics, CSV output, local persistence, SQL/learning content, and responsive/basic keyboard behavior. Excluded: production security, actual insurance calculations, real database, load testing, and cross-user authorization.

## Approach
Review requirements, prepare fictional data, run positive/negative/boundary checks, record actual observations, create defects for mismatches, retest fixes, and run focused regression checks. The 40 seeded cases begin Not Run. Automated Node checks are supplemental.

## Environment and data
Node.js 18+, a modern desktop/mobile browser, local server at `http://localhost:4173`, and browser local storage. Use EMP-1001 active, EMP-1002 inactive, EMP-1003 with missing optional benefit, and EMP-9999 unknown. Demo sign-in: employee@example.com / DemoPass123!.

## Entry and exit criteria
Entry: files are present and local server starts. Exit: planned checks have recorded outcomes, blockers are identified, defects have reproduction details, and unresolved risks are listed. Do not infer a pass for an unexecuted case.

## Roles and deliverables
Learner acts as tester. Deliverables: case executions, defect records, exported CSV, and a concise test summary. Keep screenshots separately when useful and avoid real personal data.

## Risks
Browser storage is user-editable and browser differences may affect rendering. No backend, production authentication, automated browser suite, or alternate employee selector is implemented.
