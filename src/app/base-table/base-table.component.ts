import { Component,  OnInit} from '@angular/core';//ElementRef, , ViewChild
import {DatasourceService} from '../services/datasource.service'
import {Student} from '../services/Student'
import { EditService, ToolbarService, PageService ,IEditCell} from '@syncfusion/ej2-angular-grids';//, FilterType, GridComponent

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  providers: [ToolbarService, EditService, PageService,DatasourceService]
})
export class BaseTableComponent implements OnInit {
    public dataService: DatasourceService;
    public data: Student[] = new Array<Student>() ;
    //public data : object[] = [];
    public editSettings: Object =[];
    public toolbar: string[] = [];
    public birthdayrules: Object =[];
    public namerules: Object = [];
    public scorerules: Object = [];
    public pageSettings: Object = { pageSize:10};
    public editparams: Object = [];
    public formatOptions: object = {};
    public initialSort: Object=[];
    public filterSettings = { type: 'Menu' };
    public numericParams: Object = {};
    constructor( private ds: DatasourceService) {
      this.dataService = ds
    }
    public async ngOnInit(): Promise<void> {
        this.data = await this.dataService.getData();
        //console.log(this.data)
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete','Search'];
        this.birthdayrules = { required: true , dateIso:true};
        this.scorerules = { required: true , number: true,range: [0,100] };
        this.namerules =  { required: true };
        this.formatOptions = {type: 'date', format: 'yyyy-MM-dd'};
        this.editparams = { params: { popupHeight: '300px' }};
        this.numericParams = { params: {
          validateDecimalOnType: true,
          decimals: 0,
          format: 'N' }
        };
        this.initialSort = {
          columns: [{ field: 'fullName', direction: 'Ascending' }]
        };

       
    }

}
