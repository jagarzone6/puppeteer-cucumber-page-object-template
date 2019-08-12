class CreateEmployeePage {
    constructor(driver) {
        this.driver=driver;
        this.EMPLOYEE_FIRST_NAME_INPUT = "input#employee_first_name";
        this.EMPLOYEE_LAST_NAME_INPUT = "input#employee_last_name";
        this.EMAIL_INPUT = "input#employee_email";
        this.IDENTIFICATION_INPUT = "input#employee_identification";
        this.LEADER_NAME_INPUT = "input#employee_leader_name";
        this.EMPLOYEE_START_WORKING_ON_YEAR = "select#employee_start_working_on_1i";
        this.EMPLOYEE_START_WORKING_ON_MONTH = "select#employee_start_working_on_2i";
        this.EMPLOYEE_START_WORKING_ON_DAY = "select#employee_start_working_on_3i";
        this.CREATE_EMPLOYEE_BUTTON = "input[type='submit']";
    }
    async attemptToCreateNewEmployee(employee) {
        await this.driver.type(this.EMPLOYEE_FIRST_NAME_INPUT, employee.firstName);
        await this.driver.type(this.EMPLOYEE_LAST_NAME_INPUT, employee.lastName);
        await this.driver.type(this.EMAIL_INPUT, employee.email);
        await this.driver.type(this.IDENTIFICATION_INPUT, employee.id);
        await this.driver.type(this.LEADER_NAME_INPUT, employee.leaderName);
        await this.driver.select(this.EMPLOYEE_START_WORKING_ON_YEAR,JSON.stringify(parseInt(employee.year,10)));
        await this.driver.select(this.EMPLOYEE_START_WORKING_ON_MONTH,JSON.stringify(parseInt(employee.month,10)));
        await this.driver.select(this.EMPLOYEE_START_WORKING_ON_DAY,JSON.stringify(parseInt(employee.day,10)));
        return Promise.all([
            this.driver.waitForNavigation(),
            this.driver.click(this.CREATE_EMPLOYEE_BUTTON),
          ]);
    }
}

module.exports= CreateEmployeePage;