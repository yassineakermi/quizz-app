<template>
  <div class="container card min">
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
    <div v-if="!step">
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
    <div v-if="step == 12">
      <h2>
        How many employees did you average over the 2019 fiscal year across all
        aggregated entities?
      </h2>
      <hr />
      <select
        v-model="num_employees"
        class="form-select form-select"
        aria-label=".form-select-sm example"
      >
        <option>How many employees did you average in 2019?</option>
        <option :value="0">1-10</option>
        <option :value="1">10-20</option>
        <option :value="2">20-50</option>
        <option :value="3">50-100</option>
        <option :value="4">100+</option>
      </select>
      <div class="d-flex justify-content-center p-2">
        <button @click="prev()" class="btn btn btn-danger m-2">Previous</button>
        <button @click="next()" class="btn btn btn-primary m-2">Next</button>
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
            disabled
          />
        </div>
      </div>
      <br />
      <h3>Total Refunds 2020</h3>
      <input
        name="ref2020"
        id="ref2020"
        type="text"
        class="form-control"
        placeholder="$0.00"
        aria-label="$0.00"
        disabled
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
            :name="'input' + q"
            :id="'input' + q"
            type="text"
            class="form-control"
            :placeholder="'Q' + (q - 4) + ' Payroll'"
            :aria-label="'Q' + (q - 4) + ' Payroll'"
            @blur="updateRefund(q)"
          />
        </div>
        <div class="col">
          <input
            data="1"
            :name="'input' + q + q"
            :id="'input' + q + q"
            type="text"
            class="form-control"
            :placeholder="'# of employees Q' + (q - 4)"
            :aria-label="'# of employees Q' + (q - 4)"
            @blur="updateRefund(q)"
          />
        </div>
        <div class="col">
          <input
            data="5"
            :name="'input' + q + q + q"
            :id="'input' + q + q + q"
            type="text"
            class="form-control"
            :placeholder="'Final Refunds Q' + (q - 4)"
            :aria-label="'Final Refunds Q' + (q - 4)"
            disabled
          />
        </div>
      </div>
      <h3>Total Refunds 2021:</h3>
      <input
        name="ref2021"
        id="ref2021"
        type="text"
        class="form-control"
        placeholder="$0.00"
        aria-label="$0.00"
        :value="'$' + _2021_total.toFixed(1)"
        readonly
      />
      <br />
      <div class="d-flex justify-content-center p-2">
        <button @click="prev()" class="btn btn btn-danger m-2">Previous</button>
        <button @click="next()" class="btn btn btn-primary m-2">Next</button>
      </div>
    </div>
    <div v-if="step == 7">
      <h2>{{ conclusion_text }}</h2>
      <div class="d-flex justify-content-center p-2">
        <button @click="prev()" class="btn btn btn-danger m-2">Refuse</button>
        <button @click="next()" class="btn btn btn-primary m-2">Accept</button>
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
      num_employees: 0,
      conclusion_text: "",
      _2021_total: 0,
      _2020_total: 0,
    };
  },
  methods: {
    updateRefund(q: number) {
      let nb_empl = parseInt(
        (document.getElementById("input" + q + q) as HTMLInputElement).value
      );
      let payroll = parseInt(
        (document.getElementById("input" + q) as HTMLInputElement).value
      );
      console.log(nb_empl, payroll, "first");
      if (!isNaN(nb_empl) && !isNaN(payroll)) {
        let avg = payroll / nb_empl;
        let onePerson = avg >= 7000 ? 7000 : avg * 0.7;
        let total = onePerson * nb_empl;
        console.log(avg, onePerson, total, "second");

        let node = document.getElementById(
          "input" + q + q + q
        ) as HTMLInputElement;
        let oldValue = node.value.replace("$", "");
        node.value = "$" + total.toFixed(1);
        this._2021_total =
          this._2021_total +
          (total - (parseInt(oldValue) > 0 ? parseInt(oldValue) : 0));
      }
    },
    next() {
      this.previous.push(this.step);
      if (!this.step) this.step = 12;
      else if (this.step === 12) this.step = 1;
      else if (this.step === 1) this.step = this.reduce_operations ? 2 : 3;
      else if (this.step === 3) {
        if (!this.useful_info || this.useful_info === 2) this.step = 4;
        else {
          this.step = this.useful_info === 1 ? 5 : 7;
        }
      } else if (this.step === 4) {
        this.step = !this.useful_info ? 6 : 5;
      } else {
        this.step = this.step + 1;
      }
    },
    prev() {
      this.step = this.previous.length ? this.previous.pop()! : 0;
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
    convertToNumber(field: any) {
      return typeof field === "string" ? parseInt(field) : field;
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
      let impossible =
        "Based on your submission, we are unable to help at this point in time.";
      let impossibleAi =
        "Based on your answers our AI calculator has determined you are ineligible for the ERC credit.";
      let congrat =
        "congratulations on prequalifying for the ERC! A consultant will be reaching out shortly.";

      if (oldStep === 6) {
        this._2020_total = parseInt(
          (
            document.getElementById("ref2020") as HTMLInputElement
          ).value.replace("$", "")
        );
        this._2020_total = isNaN(this._2020_total) ? 0 : this._2020_total;
      }
      if (this.step === 7) {
        if (this.useful_info == 3) this.conclusion_text = impossible;
        else if (this.useful_info == 1)
          this.conclusion_text =
            this._2021_total + this._2020_total < 100000 ? impossible : congrat;
        else if (this.num_employees < 2) {
          if (!this.convertToNumber(this.useful_info)) this.conclusion_text = impossible;
          else if (this.useful_info == 2) {
            if (this.valid_revenue.length)
              this.conclusion_text =
                this._2021_total + this._2020_total < 100000
                  ? impossible
                  : congrat;
            else if (!this.valid_revenue.length)
              this.conclusion_text = impossibleAi;
          }
        } else if (this.num_employees > 2) {
          if (!this.convertToNumber(this.useful_info))
            this.conclusion_text = !this.valid_revenue.length
              ? impossible
              : congrat;
          else if (this.useful_info == 2) {
            if (this.valid_revenue.length)
              this._2021_total + this._2020_total < 100000
                ? impossible
                : congrat;
            else if (
              !this.valid_revenue.length &&
              !this.convertToNumber(this.reduce_operations)
            ) {
              this.conclusion_text = impossibleAi;
            } else if (
              this.valid_revenue.length &&
              this.convertToNumber(this.reduce_operations)
            ) {
              this._2021_total + this._2020_total < 100000
                ? impossible
                : congrat;
            }
          }
        } else this.conclusion_text = "path impossible";
      }
      if (this.step === 6) {
        setTimeout(() => {
          if (!this.reduce_operations) {
            if (this.useful_info !== 0 && this.useful_info !== 2)
              this._941_fields = [1, 2, 3, 4, 5, 6, 7];
            else {
              let nums = [...this.valid_revenue];
              let temp: number[] = this.quarters.filter(function (n) {
                return nums.indexOf(n) === -1;
              });
              this._941_fields = [...temp, ...nums];
            }
          } else if (this.reduce_operations) {
            console.log("here now");

            let nums = [...this.valid_revenue];
            console.log(this.valid_revenue, "nums1");

            let temp: number[] = this.quarters.filter(function (n) {
              return nums.indexOf(n) === -1;
            });
            console.log(temp, "temp");
            console.log(nums, "nums");

            this._941_fields = [...temp, ...nums];
          }

          var my_awesome_script = document.createElement("script");

          my_awesome_script.setAttribute("src", "./_941_calculator.js");
          my_awesome_script.setAttribute("id", "my_awesome_script1");

          document.head.appendChild(my_awesome_script);
        }, 500);
      } else {
        document.getElementById("my_awesome_script1")?.remove();
      }

      if (oldStep === 4) {
        let nums: number[] = [];
        document
          .querySelectorAll(".is-valid")
          .forEach((element) =>
            nums.push(parseInt(element.getAttribute("data")!))
          );
        this.valid_revenue = [...nums];
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
