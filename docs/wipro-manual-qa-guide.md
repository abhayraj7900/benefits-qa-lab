# Wipro Manual QA Portfolio Guide

This guide explains the manual testing skills demonstrated by Benefits QA Lab. Examples are fictional practice material, not Wipro/client requirements.

## Implemented project skills

- HTML, CSS, browser JavaScript; Node.js built-in HTTP server and static build script.
- Git/GitHub source control and Vercel static hosting.
- Manual scenarios, test cases, editable definitions, execution records, timestamps, tester notes, and rerun history.
- Defect reports with reproduction steps, expected/actual, severity, priority, test-case link, environment, optional screenshot, and Open / In Progress / Fixed / Retest / Closed statuses.
- RTM coverage using requirement IDs, direct case links, and separately saved additional links.
- Data persistence in browser `localStorage`, including cases, runs, defects, RTM links, and attached evidence. There is no backend database; each browser profile has its own records.
- Educational SQL only. There is no connected database, DB2 instance, SQL execution, or real data reconciliation.
- Node checks cover source-level features and HTTP asset delivery. They do not automate browser behavior.

## Manual test design topics

Practice eligibility, enrollment deadlines, invalid/missing/duplicate employee records, plan selection and coverage reconciliation, boundary values, and signed-out access. The portal does not implement an actual enrollment workflow; those scenarios are fictional test-design exercises.

For each manual execution, record requirement/scenario/case IDs, preconditions, data, steps, expected result, actual result, status, tester, date, and notes. Select Pass, Fail, or Blocked only after observing behavior. Seeded definitions begin Not Run.

## Defect lifecycle

Record a reproducible issue only after observing it. Link the relevant case and document exact steps, expected/actual, environment, impact/severity, urgency/priority, and fictional-data-only evidence. Move through Open, In Progress, Fixed, Retest, and Closed. Retest after a fix and run related regression cases; reopen if the behavior still fails.

The UI contains three fictional sample defect reports for practice. They are not saved tracker defects and do not claim an issue was discovered in this project or a production system. The tracker starts empty.

## Summary and pass-rate formula

Case outcomes use the latest saved execution per case so reruns do not double-count cases. Execution runs counts every saved run. Not Run counts cases with no execution. Pass rate = `Pass / (Pass + Fail + Blocked) * 100`; the rate is 0% when no cases have been executed. CSV export contains the execution-history records shown in the report.

## SQL learning boundary

Examples cover SELECT, WHERE, ORDER BY, GROUP BY, HAVING, INNER/LEFT JOIN, COUNT/SUM/AVG, subqueries, primary/foreign keys, and duplicate/missing/orphan/inconsistent-data checks. They use fictional tables. A hypothetical BenefitPlans table for numeric aggregates is labeled because it is not part of the sample schema. Queries are not run against an actual database or DB2.

## Performance, load, and stress concepts

Performance testing studies speed, responsiveness, and stability. Load testing checks expected and peak usage. Stress testing pushes beyond expected capacity and examines failure/recovery. The fictional enrollment-volume example is a planning exercise only. No load/stress test has been run and no performance measurements are recorded. A real exercise needs authorization, an agreed environment and targets, a suitable tool, and recorded concurrency, duration, latency, errors, and recovery behavior.

## SDLC, STLC, and QA

- **SDLC:** planning, requirements, design, development, testing, release, and maintenance.
- **STLC:** requirement analysis, test planning, test design, test data/environment preparation, execution, defect reporting/retesting, and closure.
- **RTM:** maps requirements to scenarios/cases and highlights uncovered requirements.
- **Severity:** impact of a defect. **Priority:** urgency for addressing it.
- **System testing:** end-to-end checks of integrated workflows against requirements. **QA:** improve confidence and process; execution records describe observed behavior.

## Interview walkthrough

Explain an example from requirement to scenario, test case, manual execution, defect report, retest, and summary. Be clear about what is implemented versus educational: browser-local storage is used, SQL examples are not executed, and there is no real database, automated browser suite, or stress-test run.
