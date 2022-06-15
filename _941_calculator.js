function update_employee_hash_map(
    employee_erc_hash_map = null,
    num_of_employees_in_quarter = null,
    total_payroll_for_quarter = null
) {
    /*
    Update the employee ERC hash map with the new ERCs.
    */
    let avg_pay_per_employee, max_erc_per_employee;
    let total_erc_for_quarter = 0;

    // Local function to return a range of array given the first and last index.
    // Works similar to range function in python
    // Ex: range(0, 2) returns [0, 1]
    //     range(3, 10) returns [3, 4, 5, 6, 7, 8, 9]
    function range(start, end) {
        return Array(end - start).fill().map((_, idx) => start + idx)
    }

    if (employee_erc_hash_map === null) {
        employee_erc_hash_map = {};
    }

    let number_of_old_employees = Object.keys(employee_erc_hash_map).length;

    // Calculate the maximum credit per employee possible for this quarter
    avg_pay_per_employee = total_payroll_for_quarter / num_of_employees_in_quarter;
    if (avg_pay_per_employee >= 10000) {
        // If the average pay per employee is greater than $10,000, then the maximum
        // credit per employee possible is $5,000.
        max_erc_per_employee = 5000;
    } else {
        // If the average pay per employee is less than $10,000, then the maximum
        // credit per employee possible is 50% of the average pay per employee.
        max_erc_per_employee = avg_pay_per_employee / 2;
    }

    if (number_of_old_employees < num_of_employees_in_quarter) {
        // If there are new employees in this quarter, we should update the old ones with
        // the extra ERC (if needed) and add the value for the new ones, meanwhile keeping
        // track of the total ERC compensated.
        let number_of_new_employees = num_of_employees_in_quarter - number_of_old_employees;

        // Update the credit for old employees
        let new_erc, old_erc;
        for (let key, _pj_c = 0, _pj_a = Object.keys(employee_erc_hash_map), _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
            // For the old employees, we add the new credits in the already existing
            // credits and do not let it cross 5000
            key = _pj_a[_pj_c];
            old_erc = employee_erc_hash_map[key];
            new_erc = old_erc + max_erc_per_employee;
            if (new_erc > 5000) {
                new_erc = 5000;
            }
            employee_erc_hash_map[key] = new_erc;
            // Update the total ERC with the newly added value for each old employee
            total_erc_for_quarter += new_erc - old_erc;
        }

        // Add the credits and new employees in the ERC hash map
        let new_employees;
        new_employees = range(number_of_old_employees, num_of_employees_in_quarter);
        for (let i, _pj_c = 0, _pj_a = new_employees, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
            i = _pj_a[_pj_c];
            employee_erc_hash_map[i] = max_erc_per_employee;
        }
        // Update the total ERC with the total credits added for the new employees
        total_erc_for_quarter += max_erc_per_employee * number_of_new_employees;
    }

    else {
        // If the number of employees decreases, we should delete the old employees
        // which are not anymore in the quarter.
        let keys_to_remove = range(num_of_employees_in_quarter, number_of_old_employees);
        for (let key, _pj_c = 0, _pj_a = keys_to_remove, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
            key = _pj_a[_pj_c];
            delete employee_erc_hash_map[key];
        }

        // We should update the old ones with
        // the extra ERC (if needed) and keep track of the total ERC compensated.
        let new_erc, old_erc;
        for (let key, _pj_c = 0, _pj_a = Object.keys(employee_erc_hash_map), _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
            key = _pj_a[_pj_c];
            old_erc = employee_erc_hash_map[key];
            new_erc = old_erc + max_erc_per_employee;
            if (new_erc > 5000) {
                new_erc = 5000;
            }
            employee_erc_hash_map[key] = new_erc;
            total_erc_for_quarter += new_erc - old_erc;
        }
    }

    return [employee_erc_hash_map, total_erc_for_quarter];
}

function pushRefund2(event) {
    // GET THE ELEMENT THAT CALLED THE FUNCTION
    let source = event.target;
    console.log(source)

    // ELEMENT ARRAYS
    qtrs = Array.from(document.querySelectorAll('.is-2020')).map(el=>  ({
        'numEmploy': 'input'+el.getAttribute('data')+el.getAttribute('data'),
        'payRoll': 'input'+el.getAttribute('data'),
        'refund': 'input'+el.getAttribute('data')+el.getAttribute('data')+el.getAttribute('data')
    }))
    console.log(qtrs);
    let totalRefunds = [];
    for (let i=0 ; i < document.querySelectorAll('.is-2020').length;i++)
        totalRefunds.push(i)
    
    let pastData = [{}, 0];

    // Every time there is a change in data, we should recalculate all the ERC
    // refunds for all the quarters.
    for (let i = 0; i < totalRefunds.length; i++) {
        console.log(qtrs[i]['numEmploy']);
        let pastEmployees = parseFloat(document.getElementById(qtrs[i]['numEmploy']).value);
        let pastPayroll = parseInt(document.getElementById(qtrs[i]['payRoll']).value);
        if (parseInt(pastPayroll) && parseInt(pastEmployees)) {
            pastData = update_employee_hash_map(pastData[0], pastEmployees, pastPayroll);
            console.log(`Credit per employee until quarter:`, i + 1, pastData[0]);
            // Fill the refund value for the past quarter
            document.getElementById(qtrs[i]['refund']).value = pastData[1].toFixed(2).toLocaleString('en-US');
        } else {
            // If a quarter misses the data for the number of employees or the payroll, we should
            // stop further calculations.
            break;
        }
    }
    console.log('------------------------------------');
}

document.querySelectorAll('.fetch').forEach(el=>el.addEventListener('change',pushRefund2))
