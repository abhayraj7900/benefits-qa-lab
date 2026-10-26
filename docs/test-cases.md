# Test Cases

The application seeds 40 unique detailed case definitions and starts every case at **Not Run**. Search/filter and case details are available on the Test Cases page. Use the table below to identify the seeded coverage; the UI shows precise preconditions, steps, data, and expected outcome for each case. Record a result only after executing the steps.

| Case ID | Case title | Requirement | Scenario | Priority | Type |
|---|---|---|---|---|---|
| TC-LOGIN-001 | Valid login | FR-001 | TS-001 | High | Functional |
| TC-LOGIN-002 | Incorrect password | FR-002 | TS-001 | High | Negative |
| TC-LOGIN-003 | Malformed email | FR-004 | TS-001 | High | UI |
| TC-LOGIN-004 | Empty email | FR-011 | TS-001 | High | Functional |
| TC-LOGIN-005 | Empty password | NFR-001 | TS-001 | High | Negative |
| TC-LOGIN-006 | Both fields empty | FR-001 | TS-001 | High | UI |
| TC-LOGIN-007 | Password masked by default | FR-002 | TS-006 | High | Functional |
| TC-LOGIN-008 | Show and hide password | FR-004 | TS-006 | High | Negative |
| TC-LOGIN-009 | Logout | FR-011 | TS-006 | High | UI |
| TC-LOGIN-010 | Protected benefits while signed out | NFR-001 | TS-006 | High | Functional |
| TC-BEN-011 | Active enrollment benefits | FR-001 | TS-007 | High | Negative |
| TC-BEN-012 | Inactive enrollment status | FR-002 | TS-007 | High | UI |
| TC-BEN-013 | Missing optional benefit | FR-004 | TS-007 | High | Functional |
| TC-BEN-014 | Unknown employee record | FR-011 | TS-007 | High | Negative |
| TC-QA-015 | Search test cases | NFR-001 | TS-011 | Medium | UI |
| TC-QA-016 | Filter by priority | FR-001 | TS-011 | Medium | Functional |
| TC-QA-017 | Filter by status | FR-002 | TS-011 | Medium | Negative |
| TC-QA-018 | Add a test case | FR-004 | TS-011 | Medium | UI |
| TC-QA-019 | Edit a test case | FR-011 | TS-011 | Medium | Functional |
| TC-QA-020 | Delete after confirmation | NFR-001 | TS-011 | Medium | Negative |
| TC-QA-021 | Save Pass execution | FR-001 | TS-011 | Medium | UI |
| TC-QA-022 | Save Fail execution | FR-002 | TS-011 | Medium | Functional |
| TC-QA-023 | Blocked execution notes | FR-004 | TS-011 | Medium | Negative |
| TC-QA-024 | Execution history retained | FR-011 | TS-011 | Medium | UI |
| TC-QA-025 | Re-execute test case | NFR-001 | TS-011 | Medium | Functional |
| TC-SYS-026 | Defect required fields | FR-001 | TS-013 | Medium | Negative |
| TC-SYS-027 | Create defect with severity | FR-002 | TS-013 | Medium | UI |
| TC-SYS-028 | Close a defect | FR-004 | TS-013 | Medium | Functional |
| TC-SYS-029 | Summary counts match saved records | FR-011 | TS-013 | Medium | Negative |
| TC-SYS-030 | CSV export opens as rows | NFR-001 | TS-013 | Medium | UI |
| TC-SYS-031 | Reload preserves records | FR-001 | TS-013 | Medium | Functional |
| TC-SYS-032 | Mobile navigation opens | FR-002 | TS-013 | Medium | Negative |
| TC-SYS-033 | Narrow table scrolls within container | FR-004 | TS-013 | Medium | UI |
| TC-SYS-034 | Keyboard tab through login | FR-011 | TS-013 | Medium | Functional |
| TC-SYS-035 | Enter submits valid login | NFR-001 | TS-013 | Medium | Negative |
| TC-SYS-036 | Invalid employee data handled | FR-001 | TS-013 | Medium | UI |
| TC-SYS-037 | Consistent benefit date format | FR-002 | TS-013 | Medium | Functional |
| TC-SYS-038 | Empty test case search | FR-004 | TS-013 | Medium | Negative |
| TC-SYS-039 | Reset asks confirmation | FR-011 | TS-013 | Medium | UI |
| TC-SYS-040 | Stored sample status is Not Run | NFR-001 | TS-013 | Medium | Functional |

The seeded case library is practice material. Adapt the generic expected outcomes to the exact steps and actual build behavior as you perform the exercises.
