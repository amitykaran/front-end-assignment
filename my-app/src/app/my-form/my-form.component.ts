import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, RequiredValidator, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  myform: FormGroup;
  slides: FormGroup;
  elements: FormGroup;
  options: FormGroup;
  dateOptions: FormGroup;
  form_arr = [];
  slide_arr = [];
  element_arr = [];

  constructor(
    private fb: FormBuilder
  ) { 
    this.myform = fb.group({
      //code: [null, Validators.required],
      title: [null, Validators.required],
    });
    this.slides = fb.group({
      questiontext: [null, Validators.required],
      isSkippingAllowed: [false, Validators.compose([])],
      isAutoSkipped: [false, Validators.compose([])]
    });
    this.elements = this.fb.group({
      isRequired: [false, ],
      elementType: [null, ],
      validationRule: [null, ],
      isMultiSelectAllowed: [false, ],
      options: this.fb.group({
          value: [null, ],
          label: [null, ],
          image: [null,],
          image_alt_text: [null,],
          isImageAvailable: [false,],
          isOptionMainOption: [false, ],
      }), 
      textLabel: [null, ],
      textElementName: [null, ],
      textPlaceholder: [null,],
      textIcon: [null, ],
      defaultValue: [null, ],
      dateOptions: this.fb.group({
          rule: [null,],
          checkbox: [false, ]
          })
});
    // this.slides = fb.group({
    //   questiontext: [null, Validators.required],
    //   isSkippingAllowed: [null, Validators.compose([])],
    //   isAutoSkipped: [null, Validators.compose([])],
    // });
  }

  ngOnInit() {
  }

  adddetails(form, slid, elem) {
    console.log(form.value);
      let form1 = form.value;
      if(form.valid) {
        form1.slides = slid.value;
        form1.slides.elements = elem.value;
        if(this.slide_arr.length != 0) {
          form1.slides = this.slide_arr;
        }
        console.log(form1);
      }
      // form1.slides = this.slide_arr;
      // console.log(form1);
    // form.value.slides = this.slide_arr;
    // if(form.valid) {
    //   console.log('form is valid');
    // } else {
    //   console.log('Form is invalid');
    // }
  }

  add_elements(elem) { 
    const element = elem.value;
    this.element_arr.push(element);
    console.log( this.element_arr);
  }
  add_slides(slid, elem) {
    let slide = slid.value;
    slide.elements = elem.value;
    if(this.element_arr.length != 0) {
      slide.elements = this.element_arr;
    }
    this.slide_arr.push(slide);
    console.log( this.slide_arr);
  }
  deleteElement(indx) {
    this.element_arr.splice(indx, 1);
  }
  deleteSlide(indx) {
    this.slide_arr.splice(indx, 1);
  }

}
