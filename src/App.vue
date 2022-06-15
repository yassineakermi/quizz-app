<template>
  <div class="container card">
    <form v-if="step == 4">
      <div class="row form-row">
        <div class="col" style="text-align: center">2019 Revenue</div>
        <div class="col" style="text-align: center">2020 Revenue</div>
        <div class="col" style="text-align: center">2021 Revenue</div>
      </div>
      <div class="row form-row">
        <div class="col">
          <input
            name="input11"
            id="input11"
            type="text"
            class="form-control"
            placeholder="Quarter 1 2019 "
            aria-label="Quarter 1 2019"
          />
        </div>
        <div class="col">
          <input
            data="1"
            name="input12"
            id="input12"
            type="text"
            class="form-control"
            placeholder="Quarter 1 2020"
            aria-label="Quarter 1 2020"
          />
        </div>
        <div class="col">
          <input
            data="5"
            name="input13"
            id="input13"
            type="text"
            class="form-control"
            placeholder="Quarter 1 2021"
            aria-label="Quarter 1 2021"
          />
        </div>
      </div>
      <div class="row form-row">
        <div class="col">
          <input
            name="input21"
            id="input21"
            type="text"
            class="form-control"
            placeholder="Quarter 2 2019 "
            aria-label="Quarter 2 2019"
          />
        </div>
        <div class="col">
          <input
            data="2"
            name="input22"
            id="input22"
            type="text"
            class="form-control"
            placeholder="Quarter 2 2020"
            aria-label="Quarter 2 2020"
          />
        </div>
        <div class="col">
          <input
            data="6"
            name="input23"
            id="input23"
            type="text"
            class="form-control"
            placeholder="Quarter 2 2021"
            aria-label="Quarter 2 2021"
          />
        </div>
      </div>
      <div class="row form-row">
        <div class="col">
          <input
            name="input31"
            id="input31"
            type="text"
            class="form-control"
            placeholder="Quarter 3 2019 "
            aria-label="Quarter 3 2019"
          />
        </div>
        <div class="col">
          <input
            data="3"
            name="input32"
            id="input32"
            type="text"
            class="form-control"
            placeholder="Quarter 3 2020"
            aria-label="Quarter 3 2020"
          />
        </div>
        <div class="col">
          <input
            data="7"
            name="input33"
            id="input33"
            type="text"
            class="form-control"
            placeholder="Quarter 3 2021"
            aria-label="Quarter 3 2021"
          />
        </div>
      </div>
      <div class="row form-row">
        <div class="col">
          <input
            name="input41"
            id="input41"
            type="text"
            class="form-control"
            placeholder="Quarter 4 2019 "
            aria-label="Quarter 4 2019"
          />
        </div>
        <div class="col">
          <input
            data="4"
            name="input42"
            id="input42"
            type="text"
            class="form-control"
            placeholder="Quarter 4 2020"
            aria-label="Quarter 4 2020"
          />
        </div>
        <div class="col">
          <input
            data="8"
            name="input43"
            id="input43"
            type="text"
            class="form-control"
            placeholder="Quarter 4 2021"
            aria-label="Quarter 4 2021"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center p-2">
        <button @click="prev()" class="btn btn btn-danger m-2">Previous</button>
        <button @click="next()" class="btn btn btn-primary m-2">Next</button>
      </div>
    </form>
    <div v-if="step == 0">
      <h2>Disclaimer</h2>
      <hr />
      <p>
        The estimates provided by this calculator are for illustrative purposes
        only and should not be relied upon as an accurate indication of the
        Employee Retention Credit amount your business is or may be entitled to.
        No determination or opinion as to eligibility is hereby offered, and
        your use of this calculator tool in no way creates any legal
        relationship between you and ERTCFunding LLC. Eligibility is complex and
        multi-faceted, and many factors not considered by this tool may be
        relevant to your eligibility and/or your eligible credit amount (i.e.
        ppp/owner relatives). ERTCFunding LLC is not an accounting firm, and no
        tax advice is hereby offered or provided. ERTCFunding LLC does not
        guarantee that this calculator is reliable, accurate or complete or that
        it will be compatible with your computer. Should your business have
        opened post January 1, 2019, this calculator will not be correctly
        assess eligibility.
      </p>
      <div class="d-flex justify-content-center p-2">
        <button @click="prev()" class="btn btn btn-danger m-2">Refuse</button>
        <button @click="next()" class="btn btn btn-primary m-2">Accept</button>
      </div>
    </div>
    <div v-if="step == 1">
      <h2>
        Was your business forced to reduce operations in any way due to
        government restrictions?
      </h2>
      <hr />
      <div class="form-check">
        <input
          v-model="reduce_operations"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          :value="true"
        />
        <label class="form-check-label" for="flexRadioDefault1"> Yes </label>
      </div>
      <div class="form-check">
        <input
          v-model="reduce_operations"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          :value="false"
        />
        <label class="form-check-label" for="flexRadioDefault2"> No </label>
      </div>

      <div class="d-flex justify-content-center p-2">
        <button @click="prev()" class="btn btn btn-danger m-2">Previous</button>
        <button @click="next()" class="btn btn btn-primary m-2">Next</button>
      </div>
    </div>
    <div v-if="step == 2">
      <h2>
        Please select the quarter(s) your business was affected by Government
        Restrictions.
      </h2>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
          @change="handleCheckboxes(1)"
        />
        <label class="form-check-label" for="defaultCheck1"> Q1 2020 </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck2"
          @change="handleCheckboxes(2)"
        />
        <label class="form-check-label" for="defaultCheck2"> Q2 2020 </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck3"
          @change="handleCheckboxes(3)"
        />
        <label class="form-check-label" for="defaultCheck3"> Q3 2020 </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck4"
          @change="handleCheckboxes(4)"
        />
        <label class="form-check-label" for="defaultCheck4"> Q4 2020 </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="defaultCheck5"
          @change="handleCheckboxes(5)"
        />
        <label class="form-check-label" for="defaultCheck5"> Q1 2021 </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck6"
          true-value="q6"
          false-value="q6"
          @change="handleCheckboxes(6)"
        />
        <label class="form-check-label" for="defaultCheck6"> Q2 2021 </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck7"
          @change="handleCheckboxes(7)"
        />
        <label class="form-check-label" for="defaultCheck7"> Q3 2021 </label>
      </div>

      <div class="d-flex justify-content-center p-2">
        <button @click="prev()" class="btn btn btn-danger m-2">Previous</button>
        <button @click="next()" class="btn btn btn-primary m-2">Next</button>
      </div>
    </div>
    <div v-if="step == 3">
      <h2>What information do you have handy?</h2>
      <hr />
      <div class="form-check">
        <input
          v-model="useful_info"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault2"
          id="flexRadioDefault1"
          :value="0"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          I have my 2019 – 2021 quarterly P/Ls
        </label>
      </div>
      <div class="form-check">
        <input
          v-model="useful_info"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault2"
          id="flexRadioDefault2"
          :value="1"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          I have my 2020 – 2021 Quarterly 941s
        </label>
      </div>
      <div class="form-check">
        <input
          v-model="useful_info"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault2"
          id="flexRadioDefault3"
          :value="2"
        />
        <label class="form-check-label" for="flexRadioDefault3">
          I have both.
        </label>
      </div>
      <div class="form-check">
        <input
          v-model="useful_info"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault2"
          id="flexRadioDefault4"
          :value="3"
        />
        <label class="form-check-label" for="flexRadioDefault4">
          I have none.
        </label>
      </div>

      <div class="d-flex justify-content-center p-2">
        <button @click="prev()" class="btn btn btn-danger m-2">Previous</button>
        <button @click="next()" class="btn btn btn-primary m-2">Next</button>
      </div>
    </div>
    <div v-if="step == 5">
      <h2>
        How many employees did you average over the 2019 fiscal year across all
        aggregated entities?
      </h2>
      <hr />
      <div class="form-check">
        <input
          v-model="number_employes_step3"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault3"
          id="flexRadioDefault1"
          :value="0"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Under 100
        </label>
      </div>
      <div class="form-check">
        <input
          v-model="number_employes_step3"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault3"
          id="flexRadioDefault2"
          :value="1"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Over 100
        </label>
      </div>
      <div class="form-check">
        <input
          v-model="number_employes_step3"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault3"
          id="flexRadioDefault3"
          :value="2"
        />
        <label class="form-check-label" for="flexRadioDefault3">
          Over 500
        </label>
      </div>

      <div class="d-flex justify-content-center p-2">
        <button @click="prev()" class="btn btn btn-danger m-2">Previous</button>
        <button @click="next()" class="btn btn btn-primary m-2">Next</button>
      </div>
    </div>
    <div v-if="step == 6">
      <h2>
        How many employees did you average over the 2019 fiscal year across all
        aggregated entities?
      </h2>
      <br />
      <p>
        Please enter your taxable wages (941 line 5c/d) and your employee amount
        (941 line 3) below.
      </p>
      <hr />
      <br />
      <div class="row form-row">
        <div class="col" style="text-align: center">2020 Payroll</div>
        <div class="col" style="text-align: center">W2 Employees 2020</div>
        <div class="col" style="text-align: center">Quarterly Refunds 2020</div>
      </div>
      <div class="row form-row" v-for="(q, index) in _2020_fields" :key="index">
        <div class="col">
          <input
            :name="'input' + q"
            :id="'input' + q"
            type="text"
            class="form-control is-2020 fetch"
            :placeholder="'Q' + q + ' Payroll'"
            :aria-label="'Q' + q + ' Payroll'"
            :data="q"
          />
        </div>
        <div class="col">
          <input
            :name="'input' + q + q"
            :id="'input' + q + q"
            type="text"
            class="form-control fetch"
            :placeholder="'# of employees Q' + q"
            :aria-label="'# of employees Q' + q"
          />
        </div>
        <div class="col">
          <input
            :name="'input' + q + q + q"
            :id="'input' + q + q + q"
            type="text"
            class="form-control"
            :placeholder="'Final Refunds Q' + q"
            :aria-label="'Final Refunds Q' + q"
          />
        </div>
      </div>
      <br />
      <h3>Total Refunds 2020</h3>
      <input
        name="input13"
        id="input"
        type="text"
        class="form-control"
        placeholder="$0.00"
        aria-label="$0.00"
        readonly
      />
      <br />
      <hr />
      <br />
      <div class="row form-row">
        <div class="col" style="text-align: center">2021 Payroll</div>
        <div class="col" style="text-align: center">W2 Employees 2021</div>
        <div class="col" style="text-align: center">Quarterly Refunds 2021</div>
      </div>
      <div class="row form-row" v-for="(q, index) in _2021_fields" :key="index">
        <div class="col">
          <input
            name="input11"
            id="input11"
            type="text"
            class="form-control"
            :placeholder="'Q' + (q - 4) + ' Payroll'"
            :aria-label="'Q' + (q - 4) + ' Payroll'"
          />
        </div>
        <div class="col">
          <input
            data="1"
            name="input12"
            id="input12"
            type="text"
            class="form-control"
            :placeholder="'# of employees Q' + (q - 4)"
            :aria-label="'# of employees Q' + (q - 4)"
          />
        </div>
        <div class="col">
          <input
            data="5"
            name="input13"
            id="input13"
            type="text"
            class="form-control"
            :placeholder="'Final Refunds Q' + (q - 4)"
            :aria-label="'Final Refunds Q' + (q - 4)"
          />
        </div>
      </div>
      <h3>Total Credit Amount for 2021:</h3>
      <input
        name="input13"
        id="input"
        type="text"
        class="form-control"
        placeholder="$0.00"
        aria-label="$0.00"
        readonly
      />
      <br />
      <div class="d-flex justify-content-center p-2">
        <button @click="prev()" class="btn btn btn-danger m-2">Previous</button>
        <button @click="next()" class="btn btn btn-primary m-2">Next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      step: 0,
      previous: [] as number[],
      reduce_operations: true,
      useful_info: 0,
      number_employes_step3: 0,
      quarters: [] as number[],
      valid_revenue: [] as number[],
      quarter: "",
      _941_fields: [] as number[],
    };
  },
  methods: {
    next() {
      this.previous.push(this.step)
      if (this.step === 1) this.step = this.reduce_operations ? 2 : 3;
      else if (this.step === 3) {
        if (this.useful_info === 0 || this.useful_info === 2) this.step = 4;
        else {
          this.step = this.useful_info === 1 ? 5 : 6;
        }
      } else if (this.step === 4) {
        this.step = this.useful_info === 0 ? 6 : 5;
      } else {
        this.step = this.step + 1;
      }
      
    },
    prev() {
      this.step = this.previous.length ? this.previous.pop()! : 0
    },
    handleCheckboxes(q: number) {
      console.log(q);
      if (!this.quarters.includes(q)) {
        this.quarters.push(q);
      } else {
        let i = this.quarters.indexOf(q);
        this.quarters.splice(i, 1);
      }
      console.log(this.quarters);
    },
    getQuarterName(q: number): string {
      return q > 0 && q <= 4 ? `Quarter ${q} 2020` : `Quarter ${q} 2021`;
    },
  },
  computed: {
    _2020_fields() {
      return this._941_fields.filter((e) => e <= 4);
    },
    _2021_fields() {
      return this._941_fields.filter((e) => e > 4);
    },
  },
  watch: {
    step(newStep, oldStep) {
      if (this.step === 6) {
        setTimeout(() => {
          var my_awesome_script = document.createElement("script");

          my_awesome_script.setAttribute("src", "./_941_calculator.js");
          my_awesome_script.setAttribute("id", "my_awesome_script1");

          document.head.appendChild(my_awesome_script);
        }, 500);
      } else {
        document.getElementById("my_awesome_script1")?.remove();
      }

      if (newStep === 5) {
        if (this.useful_info != 0) this._941_fields = [1, 2, 3, 4, 5, 6, 7];
      }
      if (oldStep === 4) {
        let nums: number[] = [];
        document
          .querySelectorAll(".is-valid")
          .forEach((element) =>
            nums.push(parseInt(element.getAttribute("data")!))
          );
        this.valid_revenue = [...nums];

        if (this.reduce_operations) {
          let temp: number[] = this.quarters.filter(function (n) {
            return nums.indexOf(n) === -1;
          });

          this._941_fields = [...temp,...nums];
        } else if (this.useful_info === 0)
          this._941_fields = [...this.valid_revenue];
      }
      if (this.step === 4) {
        setTimeout(() => {
          var my_awesome_script = document.createElement("script");

          my_awesome_script.setAttribute("src", "./revenue.js");
          my_awesome_script.setAttribute("id", "my_awesome_script");

          document.head.appendChild(my_awesome_script);
        }, 500);
      } else {
        document.getElementById("my_awesome_script")?.remove();
      }
    },
  },
});
</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
.container {
  margin: 0 auto;
  width: 60%;
  padding: 2%;
}
.form-row {
  margin-bottom: 15px;
}
</style>
