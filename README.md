# Employee Benefits Portal — Manual Testing & QA Practice Lab

A beginner-friendly local demo for learning manual software testing. It combines a fictional employee benefits portal with test case management, execution history, defect tracking, reports, and short QA learning materials. It is an independent learning project and is not affiliated with Wipro.

## Features

- Responsive employee sign-in and fictional benefits dashboard.
- 15 requirements-linked test scenarios and 40 seeded test definitions, initially **Not Run**.
- Requirements / RTM view with requirement-to-case links and covered/not covered status.
- Search/filter and add, edit, view, and confirmed delete for test cases.
- Manual Pass, Fail, Blocked, or Not Run execution records with timestamps, tester, notes, and preserved history.
- Defect reporting, severity and priority, open/closed workflow.
- Optional screenshot attachment for a defect (image files up to 750 KB), saved with and previewed from its defect record.
- Metrics derived from saved records and execution CSV export.
- Fictional test data, 12 SQL learning examples, testing glossary, and 25 interview questions.
- Browser local storage persistence with a confirmed reset control.

## Technology and prerequisites

The inspected workspace had no application code and no cached React dependencies. To keep setup reliable and avoid network installs, this implementation uses plain HTML, CSS, and JavaScript served by Node's built-in HTTP module. Node.js 18 or newer is required. There is no database, API, package installation step, or external service. Google Fonts are an optional stylesheet enhancement; system fonts are used as fallback.

## Run locally

1. Install Node.js 18+ if it is not already installed.
2. Open a terminal in this project folder.
3. Run `npm start`.
4. Open `http://localhost:4173` in your browser. Stop the server with Ctrl+C.

To use a different port in PowerShell: `$env:PORT=5000; npm start`, then open `http://localhost:5000`.

## Demo sign-in

- Email: `employee@example.com`
- Password: `DemoPass123!`

The app has three fictional employee records: one active record used by the demo login, one inactive record, and one active record with optional benefits missing. Signing in always displays the active example; test cases and the test-data page describe the other records for manual test practice. Authentication is a hard-coded local demonstration, is not production-secure, and is not suitable for real accounts. Passwords are not written to local storage.

## Using the lab

Use the left navigation (or the menu button on a small screen). Open **Test Cases** to search or filter, inspect a case, or add/edit/delete a definition. Open **Test Execution**, select a case, read its preconditions, steps, data, and expected result, perform the steps, then record what you actually observed and select a status. Only use Pass or Fail after performing the test. History is append-only through the interface; rerunning adds another record. **Defect Reports** captures a summary, severity, priority, reproduction steps, expected/actual results, and environment. **Summary Report** reflects stored execution and defect data and can export execution records to CSV.

## Checks

Run the included Node checks with `npm test`. Create a dependency-free static production bundle with `npm run build`; output is written to `dist/`. These checks cover seeded definitions and local server response. They supplement, and do not replace, the documented manual checklist. Browser visual review, real keyboard/assistive-technology checks, mobile-device behavior, and the correctness of human-recorded observations still need a person.

## Persistence and reset

Cases, tester name, executions, defects, requirement-to-case links, and attached evidence are stored in this browser's local storage. Evidence attachments are optional image files up to 750 KB each. Data stays in the same browser profile on reload. **Reset demo data** asks for confirmation and restores the original cases while clearing executions and defects. Clearing browser site data also removes the saved records. Malformed or incomplete saved JSON falls back to initial data.

## Documentation

See [requirements](docs/requirements.md), [test plan](docs/test-plan.md), [scenarios](docs/test-scenarios.md), [test cases](docs/test-cases.md), [sample defects](docs/sample-defects.md), [execution guide](docs/test-execution-guide.md), [SQL practice](docs/sql-practice.md), [glossary](docs/testing-glossary.md), [interview questions](docs/interview-questions.md), and [summary template](docs/test-summary-template.md).

## Limitations and future improvements

This is a single-user browser demo with no real authorization, database, server-side data validation, or secure credential handling. The seeded case steps are beginner practice prompts and should be expanded with observed, case-specific expected results as you learn. The benefits view uses the signed-in active sample; alternate record behavior is represented in documented data and scenarios, not an employee-selection/authentication feature. No automated browser engine is included. Future work could add a real test framework, selectable employee fixtures, import/export for cases and defects, and accessible screen-reader testing.

## Security note

Use only fictional data. The demo account is public sample data. Do not put personal information, real passwords, benefit records, secrets, or API keys in this app.

## First manual execution checklist

1. Start the app and open Test Cases.
2. Search `TC-LOGIN-001` and open its steps.
3. Go to Employee Login and sign in with the demo credentials.
4. Check that Avery's fictional benefits appear, then sign out.
5. In Test Execution, select the login case, perform it, compare actual and expected, and save the result.
6. Open Summary Report and verify the saved execution appears; export its CSV.
