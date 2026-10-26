# SQL Practice

SQL examples are educational and are not executed by the portal. The app has no SQL engine or database.

## Fictional schema and sample rows

`Employees(employee_id, employee_name, department, enrollment_status)`

| employee_id | employee_name | department | enrollment_status |
|---:|---|---|---|
| 1001 | Avery Morgan | People Operations | Active |
| 1002 | Jordan Lee | Engineering | Inactive |
| 1003 | Riley Shah | Finance | Active |

`Benefits(benefit_id, employee_id, benefit_type, coverage_status)` contains fictional rows: (11,1001,Health,Active), (12,1001,Dental,Active), (13,1002,Health,Inactive), (14,1003,Health,Active). Riley's optional dental/vision fields are missing in the portal sample; the small SQL table omits rows for those benefits.

| Topic | Example | Expected sample output | Practice question | Answer |
|---|---|---|---|---|
| SELECT | `SELECT employee_id, employee_name FROM Employees;` | 1001 Avery Morgan; 1002 Jordan Lee; 1003 Riley Shah | Which columns show each employee and department? | `SELECT employee_name, department FROM Employees;` |
| WHERE | `SELECT employee_name FROM Employees WHERE enrollment_status='Active';` | Avery Morgan; Riley Shah | Find Engineering employees. | `SELECT employee_name FROM Employees WHERE department='Engineering';` |
| ORDER BY | `SELECT employee_name FROM Employees ORDER BY employee_name;` | Avery, Jordan, Riley | Sort departments alphabetically. | `SELECT department FROM Employees ORDER BY department;` |
| DISTINCT | `SELECT DISTINCT enrollment_status FROM Employees;` | Active; Inactive | List benefit types once. | `SELECT DISTINCT benefit_type FROM Benefits;` |
| COUNT | `SELECT COUNT(*) FROM Employees;` | 3 | Count active employees. | `SELECT COUNT(*) FROM Employees WHERE enrollment_status='Active';` |
| GROUP BY | `SELECT enrollment_status, COUNT(*) FROM Employees GROUP BY enrollment_status;` | Active 2; Inactive 1 | Count employees by department. | `SELECT department, COUNT(*) FROM Employees GROUP BY department;` |
| INNER JOIN | `SELECT e.employee_name,b.benefit_type FROM Employees e INNER JOIN Benefits b ON e.employee_id=b.employee_id;` | Matching employee-benefit pairs only | Show each matched name and benefit. | Same query with the two selected columns. |
| LEFT JOIN | `SELECT e.employee_name,b.benefit_type FROM Employees e LEFT JOIN Benefits b ON e.employee_id=b.employee_id;` | All employees; unmatched benefits are NULL | Keep employees without a benefit row. | Same query using LEFT JOIN. |
| IS NULL | `SELECT * FROM Benefits WHERE coverage_status IS NULL;` | No rows in sample | Find missing coverage status. | `SELECT * FROM Benefits WHERE coverage_status IS NULL;` |
| INSERT | `INSERT INTO Employees(employee_id,employee_name,department,enrollment_status) VALUES(1004,'Casey Park','Support','Active');` | New fictional row | Insert employee 1005. | Change values in the example to 1005 and Taylor Kim. |
| UPDATE | `UPDATE Employees SET enrollment_status='Inactive' WHERE employee_id=1003;` | Riley becomes Inactive | Change employee 1002 to Active. | `UPDATE Employees SET enrollment_status='Active' WHERE employee_id=1002;` |
| DELETE | `DELETE FROM Benefits WHERE benefit_id=999;` | No row matches | Remove benefit row 12. | `DELETE FROM Benefits WHERE benefit_id=12;` |

INSERT, UPDATE, and DELETE examples modify a hypothetical practice database only. Always use a WHERE clause when changing or deleting targeted rows.
