import { Component, OnInit, ViewChild, ViewChildren, ElementRef, HostListener, AfterViewChecked } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrMsgService } from '../notification/toastr-msg.service';
declare var $: any;
@Component({
  selector: 'app-codestack',
  templateUrl: './codestack.component.html',
  styleUrls: ['./codestack.component.scss']
})
export class CodestackComponent implements OnInit, AfterViewChecked {
  public demoForm: FormGroup;
  public itemForSelect = ['item 1', 'item 2', 'item 3', 'item 4'];
  public formcontrol: any;
  public activeIndex = 0;
  public nativeElement: any;
  private wizardList: any;
  public wizardWidth = 0;
  public activeTab = 'Primary Tab';
  public ngSelect;
  @ViewChild('demowizard', { static: true }) myDiv: ElementRef;
  @ViewChildren('demowizard') set inputF(wizard: any) {
    this.nativeElement = wizard.first.nativeElement;
  }
  constructor(private toastr: ToastrMsgService) {
    this.createDemoForm();
  }

  ngOnInit() {

  }
  movingTab(activeTab: any, index: number) {
    this.activeIndex = index;
    this.activeTab = activeTab as any;
    this.wizardList = this.nativeElement.querySelectorAll('li') as Array<any>;
    const movingPosition = $(this.wizardList[this.activeIndex]).position();
    let movingWidth = this.wizardList[this.activeIndex].offsetWidth;
    movingPosition.left = movingPosition.left - 10;
    movingWidth = movingWidth + 20;
    $('.moving-tab').css({ transform: 'translate3d(' + movingPosition.left + 'px, ' + movingPosition.top + 'px, 0)', width: movingWidth + 'px', opacity: 1 });
    this.wizardWidth = this.myDiv.nativeElement.offsetWidth;
  }

  openToaster(type) {
    switch (type) {
      case 's-0': {
        this.toastr.successMsg('This is success message');
        break;
      }
      case 's-1': {
        this.toastr.successTimeOut('This is success message with timeout');
        break;
      }
      case 'w-0': {
        this.toastr.warningMsg('This is success message');
        break;
      }
      case 'w-1': {
        this.toastr.warningTimeOut('This is success message with timeout');
        break;
      }
      case 'i-0': {
        this.toastr.infoMsg('This is success message');
        break;
      }
      case 'i-1': {
        this.toastr.infoTimeOut('This is success message with timeout');
        break;
      }
      case 'd-0': {
        this.toastr.errorMsg('This is success message');
        break;
      }
      case 'd-1': {
        this.toastr.errorTimeOut('This is success message with timeout');
        break;
      }
    }
  }
  demoFormUpdate() {
    console.log(this.demoForm.value);
  }
  private createDemoForm() {
    this.demoForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      amount: new FormControl(null, [Validators.required]),
      loanApplicant: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        dob: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(8), Validators.pattern(/^\d{1,2}\/\d{1,2}\/\d{4}$/)]),
        gender: new FormControl(null, [Validators.required]),
        pan_no: new FormControl(null, [Validators.required]),
        monthly_turnover: new FormControl(null, [Validators.required])
      })
    });
  }
  ngAfterViewChecked() {
    setTimeout(() => {
      if (this.wizardWidth !== this.myDiv.nativeElement.offsetWidth) {
        this.movingTab(this.activeTab, this.activeIndex);
      }
    }, 200);
  }

  @HostListener('window:resize', [])
  public onResize(): void {
    this.movingTab(this.activeTab, this.activeIndex);
  }
}
