import { employeeConfig } from "../config/employee-config.js";


export class EmployeeForm {
    #formElement;
    #citiesElement;
    #countriesElement;
    #inputElements
    constructor(idParentForm) {
        const parentFormElement = document.getElementById(idParentForm);
        if (!parentFormElement) {
            throw `wrong parent id ${idParentForm}`;
        }
        parentFormElement.innerHTML = `
        <form id="employee-form">
            <input required name="name" placeholder="Enter employee name" class="form-input">
            <input required name="birthYear" type="number" placeholder="Enter year of birth" class="form-birthYear">
            <input required name="salary" type="number" placeholder="Enter salary" class="form-salary">
            <div class="form-select-group-c">
                <label id = "text_country" class ="select-label" >Select Country</label>
                <select name="country" id="countries" class="form-select">
                    <option value="uuuu"></option>
                    
                </select>
            </div>
            <div class="form-select-group">
                <label id = "text_city" class ="select-label">Select City</label>
                <select name="city" id="cities" class="form-select">
                    <option value="uuuu"></option>
                    
                </select>
            </div>
            <div class="form-buttons">
                <button class = "submit" type="submit">Submit</button>
                <button class = "reset" type="reset">Reset</button>
            </div>
        </form>
        `
        this.#formElement = document.getElementById("employee-form");
        this.#countriesElement = document.getElementById("countries");
        this.#citiesElement = document.getElementById("cities");
        this.#inputElements  = document.querySelectorAll("#employee-form [name]");
        this.setCountries();
        this.setCities();
        this.#countriesElement.addEventListener("change", () => this.setCities());
        
    }
    setCountries() {
        this.#countriesElement.innerHTML = Object.keys(employeeConfig.countries)
        .map(country => `<option value="${country}">${country}</option>`)

    }
    setCities() {
        this.#citiesElement.innerHTML = employeeConfig.countries[this.#countriesElement.value]
        .map(city => `<option value="${city}">${city}</option>`)
    }
    addFormHandler(handlerFun) {
    this.#formElement.addEventListener('submit', (event) => {
    event.preventDefault(); //canceling default handler of "submit"
    const control = this.checkInformation();
    if (control===true)
    {const employeeData = Array.from(this.#inputElements)
    .reduce((res, inputElement) => {
        res[inputElement.name] = inputElement.value;
        return res;
    }, {});
   handlerFun(employeeData);}

})
    }
    checkInformation()
    {
      const inputElementBirthYear = document.querySelector(".form-birthYear"); 
      const inputElementSalary = document.querySelector(".form-salary"); 
      const inputElementName = document.querySelector(".form-input");
      const pattern = /^[a-zA-Z]+$/;
      const iscontrolNameValid = pattern.test(inputElementName.value);
      if(!iscontrolNameValid){alert(`YOU CAN ENTER ONLY LETTERS IN FIlD "NAME"`);
      inputElementName.value ='';return false};
      if (inputElementSalary.value<employeeConfig.minSalary ||inputElementSalary.value>employeeConfig.maxSalary)
      {alert(`WRONG SALARY. SALARY MUST BE FROM ${employeeConfig.minSalary} until ${employeeConfig.maxSalary}` );
      inputElementSalary.value =''; return false};
      if (inputElementBirthYear.value<employeeConfig.minYear ||inputElementBirthYear.value>employeeConfig.maxYear)
      {alert(`WRONG YEAR OF BIRTH. YEAR OF BIRTH FROM ${employeeConfig.minYear} until ${employeeConfig.maxYear}`); 
      inputElementBirthYear.value=''; return false};

      return true;
      
    }
}
