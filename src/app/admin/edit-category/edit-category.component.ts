import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: any;
  imagePreview: any;
  image: File;
  urlParams: any = '';

  constructor(
    private adminService: AdminService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
   this.router.params.subscribe(res => {
     this.urlParams = res;
   });
  }

  addCategory(form: NgForm) {
    const category = form.value;
    const {image, ...others} = category;
    this.adminService.createCategory(others, this.image).subscribe((res) => {
      this.category = res;
    });
  }

  fileUpload($event: any) {
    // @ts-ignore
    const file = event.target.files[0];
    this.image = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

}
